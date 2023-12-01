import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'
import errorHandler from './errorHandler'
import fileDownload from 'js-file-download'

export const downloadDataset = (datasetId, fileName, token) => {
  return dispatch => {
    axios
      .get('/data/dataset-zip/' + datasetId, {
        headers: { Authorization: 'Bearer ' + token },
        responseType: 'blob'
      })
      .then(res => {
        fileDownload(res.data, fileName + '.zip')
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const patchDatasetSuccess = payload => ({
  type: actionTypes.PATCH_DATASET_META_SUCCESS,
  payload
})

export const patchDataset = (datasetId, metaData, token) => {
  return dispatch => {
    axios
      .patch('/datasets/' + datasetId, metaData, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(patchDatasetSuccess(res.data))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const loadingDatasetsStarts = () => ({
  type: actionTypes.LOADING_DATASETS_START
})

export const getDatasetsSuccess = payload => ({
  type: actionTypes.GET_DATASETS_SUCCESS,
  payload
})

export const getDatasets = (searchParams, token) => {
  // console.log(searchParams)
  return dispatch => {
    dispatch(loadingDatasetsStarts())
    axios
      .get('/datasets/?' + new URLSearchParams(searchParams).toString(), {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(getDatasetsSuccess({ searchData: res.data, searchParams }))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const deleteDatasetSuccess = payload => ({
  type: actionTypes.DELETE_DATASET_SUCCESS,
  payload
})

export const deleteDataset = (datasetId, token) => {
  return dispatch => {
    dispatch(loadingDatasetsStarts())
    axios
      .delete('/datasets/' + datasetId, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(deleteDatasetSuccess(res.data))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const toggleDatasetDisplay = payload => ({
  type: actionTypes.TOGGLE_DATASET_DISPLAY,
  payload
})

export const updateCheckedExpsInDatasets = payload => ({
  type: actionTypes.UPDATE_CHECKED_EXPS_IN_DATASETS,
  payload
})

export const updateCheckedDatasetsSearch = payload => ({
  type: actionTypes.UPDATE_CHECKED_DATASETS_SEARCH,
  payload
})

export const resetCheckedInDatasets = () => ({
  type: actionTypes.RESET_CHECKED_DATASETS
})

export const updateTagSuccess = payload => ({
  type: actionTypes.UPDATE_DATASET_TAGS,
  payload
})

export const updateTagsDatasets = (datasetId, tags, token) => {
  return dispatch => {
    axios
      .patch(
        '/datasets/tags/' + datasetId,
        { tags },
        {
          headers: { Authorization: 'Bearer ' + token }
        }
      )
      .then(res => {
        dispatch(updateTagSuccess(res.data))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const toggleCollectionModal = () => ({
  type: actionTypes.TOGGLE_COLLECTION_MODAL
})

export const addDatasetsToCollectionSuccess = payload => ({
  type: actionTypes.ADD_DATASETS_TO_COLLECTION_SUCCESS,
  payload
})

export const addDatasetsToCollection = (data, token) => {
  return dispatch => {
    dispatch(loadingDatasetsStarts())
    axios
      .post('/collections/', data, {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(addDatasetsToCollectionSuccess(res.data))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}

export const getCollectionsListSuccess = payload => ({
  type: actionTypes.GET_COLLECTION_LIST_SUCCESS,
  payload
})

export const getCollectionsList = token => {
  return dispatch => {
    axios
      .get('/collections/?list=true', {
        headers: { Authorization: 'Bearer ' + token }
      })
      .then(res => {
        dispatch(getCollectionsListSuccess(res.data))
      })
      .catch(err => {
        dispatch(errorHandler(err))
      })
  }
}
