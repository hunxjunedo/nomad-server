import { it, expect, describe, beforeEach } from 'vitest'
const request = require('supertest')

const app = require('../app')
const User = require('../models/user')

const { setupDatabase } = require('./fixtures/db')
const { testUserAdmin, testUserOne, testUserTwo } = require('./fixtures/data/users')
const { testGroupOne, testGroupTwo } = require('./fixtures/data/groups')

beforeEach(setupDatabase)

describe('GET /admin/users/', () => {
  it('should return array of 3 test users with lastLogin descending order', async () => {
    const { body } = await request(app)
      .get('/admin/users/?current=1&pageSize=10&lastLoginOrder=descend')
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(200)
    expect(body).toHaveProperty('total', 3)
    expect(body.users.length).toBe(3)
    expect(body.users[0]).toHaveProperty('username', 'admin')
    expect(body.users[1].inactiveDays).toBe(2)
  })

  it('should fail with status code 403 if user is not authorised', async () => {
    await request(app).get('/admin/users/?current=1&pageSize=10').expect(403)
  })

  it('should return array of 2 active user', async () => {
    const { body } = await request(app)
      .get('/admin/users/?current=1&pageSize=10&showInactive=false')
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(200)
    expect(body).toHaveProperty('total', 2)
    expect(body.users.length).toBe(2)
  })

  it('should return array with admin test user if "adm" string is provided as username', async () => {
    const { body } = await request(app)
      .get('/admin/users/?current=1&pageSize=10&username=adm')
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(200)
    expect(body.users[0]).toHaveProperty('fullName', 'Admin User')
  })

  it('should return array of 1 test user if group is defined in search params', async () => {
    const { body } = await request(app)
      .get(`/admin/users/?current=1&pageSize=10&group=${testGroupTwo._id.toString()}`)
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(200)
    expect(body).toHaveProperty('total', 1)
    expect(body.users.length).toBe(1)
    expect(body.users[0]).toHaveProperty('username', 'admin')
  })

  it('should return simple list of active users in a given group for drop down select', async () => {
    const { body } = await request(app)
      .get(`/admin/users/?list=true&group=${testGroupOne._id.toString()}`)
      .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
      .expect(200)
    expect(body[0]).toMatchObject({
      _id: testUserTwo._id,
      username: testUserTwo.username,
      fullName: testUserTwo.fullName
    })
  })

  it('should return simple list of inactive users for drop down select in search', async () => {
    const { body } = await request(app)
      .get(
        `/admin/users/?list=true&showInactive=true&group=${testGroupOne._id.toString()}&search=true`
      )
      .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
      .expect(200)
    expect(body[0]).toMatchObject({
      _id: testUserOne._id,
      username: testUserOne.username,
      fullName: testUserOne.fullName
    })
  })

  it('should return simple list including ex-users for drop down select in search', async () => {
    const { body } = await request(app)
      .get(
        `/admin/users/?list=true&showInactive=true&group=${testGroupTwo._id.toString()}&search=true`
      )
      .set('Authorization', `Bearer ${testUserOne.tokens[0].token}`)
      .expect(200)
    expect(body[0]).toMatchObject({
      _id: testUserOne._id,
      username: testUserOne.username,
      fullName: testUserOne.fullName
    })
  })
})

describe('POST /admin/users/', () => {
  it('should create a new user entry', async () => {
    const { body } = await request(app)
      .post('/admin/users/')
      .send({
        username: 'newUser',
        fullName: 'New User',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(201)
    expect(body._id).toBeDefined()
    expect(body.group.groupName).toBe('test-group-1')
    expect(body.password).toBeNull()

    // Asserting that the database was changed correctly
    const newUser = await User.findById(body._id)
    expect(newUser).toBeTypeOf('object')
    expect(newUser.password).toBeTypeOf('string').not.toBe('newSecret1')
  })

  it('should fail with status code 403 if request does not have authorisation header', async () => {
    await request(app)
      .post('/admin/users/')
      .send({
        username: 'newUser',
        fullName: 'New User',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .expect(403)
  })

  it('should fail with status code 403 if request if authorised user does not have admin access level', async () => {
    await request(app)
      .post('/admin/users/')
      .send({
        username: 'newUser',
        fullName: 'New User',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserTwo.tokens[0].token}`)
      .expect(403)
  })

  it('should fail with status code 422 if username is an empty string', async () => {
    const { body } = await request(app)
      .post('/admin/users/')
      .send({
        username: '',
        fullName: 'New User',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(422)
    expect(body.errors[0].msg).toBe('Username minimum length is 3')
  })

  it('should fail with status code 422 if username is not unique', async () => {
    const { body } = await request(app)
      .post('/admin/users/')
      .send({
        username: 'admin',
        fullName: 'Test Unique',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(422)
    expect(body.errors[0].msg).toBe(`Error: Username admin already exists`)
  })

  it('should fail with status code 422 if invalid e-mail address is provided', async () => {
    const { body } = await request(app)
      .post('/admin/users/')
      .send({
        username: 'newUser',
        fullName: 'New User',
        email: 'blaBla',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(422)
    expect(body.errors[0].msg).toBe('Email is invalid')
  })
  it('should fail with status code 422 if invalid fullName provided', async () => {
    const { body } = await request(app)
      .post('/admin/users/')
      .send({
        username: 'newUser',
        fullName: 'New&User',
        email: 'new@example.com',
        groupId: testGroupOne._id,
        password: 'newSecret1'
      })
      .set('Authorization', `Bearer ${testUserAdmin.tokens[0].token}`)
      .expect(422)
    expect(body.errors[0].msg).toBe('Full name is invalid')
  })
})
