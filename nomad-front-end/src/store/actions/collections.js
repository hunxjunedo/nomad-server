import axios from '../../axios-instance'

import * as actionTypes from './actionTypes'
import errorHandler from './errorHandler'

export const fetchCollectionsStarts = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = payload => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload
})

export const fetchCollections = (token, searchParams) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .get('/collections/?' + new URLSearchParams(searchParams).toString(), {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(fetchCollectionsSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const openCollectionSuccess = payload => ({
  type: actionTypes.OPEN_COLLECTION_SUCCESS,
  payload
})

export const openCollection = (token, collectionId) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())

    axios
      .get('/collections/datasets/' + collectionId, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(openCollectionSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const toggleCollectionDisplay = payload => ({
  type: actionTypes.TOGGLE_COLLECTION_DISPLAY,
  payload
})

export const returnToCollectionList = () => ({
  type: actionTypes.RETURN_TO_COLLECTION_LIST
})

export const deleteCollectionSuccess = payload => ({
  type: actionTypes.DELETE_COLLECTION_SUCCESS,
  payload
})

export const deleteCollection = (collectionId, token) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .delete('/collections/' + collectionId, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(deleteCollectionSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const removeDatasetsSuccess = payload => ({
  type: actionTypes.REMOVE_DATASETS_SUCCESS,
  payload
})

export const removeDatasets = (collectionId, datasetIds, token) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .patch(
        '/collections/datasets/' + collectionId,
        { datasetIds },
        {
          headers: { Authorization: 'Bearer ' + token }
        }
      )
      .then(res => {
        dispatch(removeDatasetsSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const updateCollectionSuccess = payload => ({
  type: actionTypes.UPDATE_COLLECTION_META_SUCCESS,
  payload
})

export const updateCollectionMeta = (collectionId, data, token) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .patch('/collections/metadata/' + collectionId, data, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(updateCollectionSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const updateCollectionShareSuccess = payload => ({
  type: actionTypes.UPDATE_COLLECTION_SHARE_SUCCESS,
  payload
})

export const updateCollectionShare = (collectionId, data, token) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .patch('/collections/share/' + collectionId, data, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(updateCollectionShareSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}

export const downloadCollectionSuccess = payload => ({
  type: actionTypes.DOWNLOAD_COLLECTION_SUCCESS,
  payload
})

export const downloadCollection = (collectionId, token) => {
  return dispatch => {
    dispatch(fetchCollectionsStarts())
    axios
      .get('/collections/zip/' + collectionId, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(downloadCollectionSuccess(res.data))
      })
      .catch(error => {
        dispatch(errorHandler(error))
      })
  }
}
