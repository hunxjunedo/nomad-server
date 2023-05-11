//ERROR HANDLER
export const HTTP_400_ERROR = 'HTTP_400_ERROR'
export const HTTP_403_ERROR = 'HTTP_403_ERROR'
export const HTTP_404_ERROR = 'HTTP_404_ERROR'
export const HTTP_422_ERROR = 'HTTP_422_ERROR'
export const HTTP_500_ERROR = 'HTTP_500_ERROR'
export const HTTP_OTHER_ERROR = 'HTTP_OTHER_ERROR'

//AUTHENTICATION (auth)
export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL'
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL'
export const SIGN_IN_START = 'SIGN_IN_START'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED'
export const SIGN_OUT = 'SIGN_OUT'
export const POST_PASSWORD_RESET_SUCCESS = 'POST_PASSWORD_RESET_SUCCESS'
export const GET_PASSWORD_RESET_SUCCESS = 'GET_PASSWORD_RESET_SUCCESS'
export const POST_NEW_PASSWORD_SUCCESS = 'POST_NEW_PASSWORD_SUCCESS'

//DASHBOARD
export const TOGGLE_CARDS = 'TOGGLE_CARDS'
export const OPEN_DASH_DRAWER = 'OPEN_DASH_DRAWER'
export const OPEN_DASH_DRAWER_START = 'OPEN_DASH_DRAWER_START'
export const FETCH_DASH_DRAWER_SUCCESS = 'FETCH_DASH_DRAWER_SUCCESS'
export const CLOSE_DASH_DRAWER = 'CLOSE_DASH_DRAWER'
export const FETCH_STATUS_SUMMARY_SUCCESS = 'FETCH_STATUS_SUMMARY_SUCCESS'
export const FETCH_STATUS_TABLE_START = 'FETCH_STATUS_TABLE_START'
export const FETCH_STATUS_TABLE_SUCCESS = 'FETCH_STATUS_TABLE_SUCCESS'
export const STATUS_UPDATE = 'STATUS_UPDATE'
export const TOGGLE_AVAILABLE_SUCCESS_DASH = 'TOGGLE_AVAILABLE_SUCCESS_DASH'
export const UPDATE_CHECKBOX_STATUS_TAB = 'UPDATE_CHECKBOX_STATUS_TAB'
export const DELETE_HOLDERS_SUCCESS = 'DELETE_HOLDERS_SUCCESS'
export const UPDATE_PENDING_CHECKED = 'UPDATE_PENDING_CHECKED'
export const POST_PENDING_SUCCESS = 'POST_PENDING_SUCCESS'

//INSTRUMENTS
export const FETCH_INSTRUMENTS_TABLE_START = 'FETCH_INSTRUMENTS_TABLE_START'
export const FETCH_INSTRUMENTS_TABLE_SUCCESS = 'FETCH_INSTRUMENTS_TABLE_SUCCESS'
export const TOGGLE_INSTRUMENT_FORM = 'TOGGLE_INSTRUMENT_FORM'
export const ADD_INSTRUMENT_SUCCESS = 'ADD_INSTRUMENT_SUCCESS'
export const ADD_INSTRUMENT_FAILED = 'ADD_INSTRUMENT_FAILED'
export const UPDATE_INSTRUMENT_SUCCESS = 'UPDATE_INSTRUMENT_SUCCESS'
export const TOGGLE_ACTIVE_INSTRUMENTS_SUCCESS = 'TOGGLE_ACTIVE_INSTRUMENTS_SUCCESS'
export const TOGGLE_SHOW_INACTIVE_INSTRUMENTS = 'TOGGLE_SHOW_INACTIVE_INSTRUMENTS'
export const FETCH_INSTRUMENT_LIST_SUCCESS = 'FETCH_INSTRUMENT_LIST_SUCCESS'
export const SET_INSTRUMENT_ID_EDITING = 'SET_INSTRUMENT_ID_EDITING'
export const FETCH_OVERHEAD_SUCCESS = 'FETCH_OVERHEAD_SUCCESS'
export const FETCH_OVERHEAD_START = 'FETCH_OVERHEAD_START'
export const RESET_OVERHEAD = 'RESET_OVERHEAD'

//USERS
export const FETCH_USERS_TABLE_START = 'FETCH_USERS_TABLE_START'
export const FETCH_USERS_TABLE_SUCCESS = 'FETCH_USERS_TABLE_SUCCESS'
export const TOGGLE_USERS_FORM = 'TOGGLE_USERS_FORM'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const TOGGLE_ACTIVE_USER_SUCCESS = 'TOGGLE_ACTIVE_SUCCESS'
export const TOGGLE_SHOW_INACTIVE_USERS = 'TOGGLE_SHOW_INACTIVE'
export const SEARCH_USER = 'SEARCH_USER'
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS'
export const RESET_USER_LIST = 'RESET_USER_LIST'
export const RESET_USER_SEARCH = 'RESET_USER_SEARCH'

//GROUPS
export const FETCH_GROUPS_TABLE_START = 'FETCH_GROUPS_TABLE_START'
export const FETCH_GROUPS_TABLE_SUCCESS = 'FETCH_GROUPS_TABLE_SUCCESS'
export const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS'
export const ADD_GROUP_FAILED = 'ADD_GROUP_FAILED'
export const UPDATE_GROUP_SUCCESS = 'UPDATE_GROUP_SUCCESS'
export const TOGGLE_GROUP_FORM = 'TOGGLE_GROUP_FORM'
export const TOGGLE_SHOW_INACTIVE_GROUPS = 'TOGGLE_SHOW_INACTIVE_GROUPS'
export const TOGGLE_ACTIVE_GROUP_SUCCESS = 'TOGGLE_ACTIVE_GROUP_SUCCESS'
export const FETCH_GROUP_LIST_SUCCESS = 'FETCH_GROUP_LIST_SUCCESS'
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'

//EXP-HISTORY
export const FETCH_EXP_HISTORY_SUCCESS = 'FETCH_EXP_HISTORY_SUCCESS'
export const FETCH_EXP_HISTORY_START = 'FETCH_EXP_HISTORY_START'
export const SET_EXP_HISTORY_DATE = 'SET_EXP_HISTORY_DATE'
export const FETCH_REPAIR_SUCCESS = 'FETCH_REPAIR_SUCCESS'
export const SET_SELECTED_INSTRUMENT_ID = 'SET_SELECTED_INSTRUMENT_ID'
export const CLOSE_REPAIR_MODAL = 'CLOSE_REPAIR_MODAL'
export const POST_REPAIR_SUCCESS = 'POST_REPAIR_SUCCESS'

//PARAMETER SETS
export const FETCH_PARAM_SETS_START = 'FETCH_PARAM_SETS_START'
export const FETCH_PARAM_SETS_SUCCESS = 'FETCH_PARAM_SETS_SUCCESS'
export const SET_INSTRUMENT_ID = 'SET_INSTRUMENT_ID'
export const SEARCH_PARAMETER_SETS = 'SEARCH_PARAMETER_SETS'
export const TOGGLE_PARAMS_FORM = 'TOGGLE_PARAMS_FORM'
export const ADD_PARAMETER_SET_SUCCESS = 'ADD_PARAMETER_SET_SUCCESS'
export const ADD_PARAMETER_SET_FAILED = 'ADD_PARAMETER_SET_FAILED'
export const UPDATE_PARAMETER_SET_SUCCESS = 'UPDATE_PARAMETER_SET_SUCCESS'
export const DELETE_PARAMETER_SET_SUCCESS = 'DELETE_PARAMETER_SET_SUCCESS'

//SUBMIT
export const FETCH_HOLDERS_START = 'FETCH_HOLDERS_START'
export const BOOK_HOLDERS_SUCCESS = 'BOOK_HOLDERS_SUCCESS'
export const CANCEL_HOLDER_SUCCESS = 'CANCEL_HOLDER_SUCCESS'
export const CANCEL_BOOKED_HOLDERS_SUCCESS = 'CANCEL_BOOKED_HOLDERS_SUCCESS'
export const BOOK_EXPERIMENTS_SUCCESS = 'BOOK_EXPERIMENTS_SUCCESS'
export const FETCH_ALLOWANCE_SUCCESS = 'FETCH_ALLOWANCE_SUCCESS'

//MESSAGE
export const SEND_MESSAGE_START = 'SEND_MESSAGE_START'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'

//BATCH-SUBMIT
export const LOADING_START = 'LOADING_START'
export const TOGGLE_ADD_RACK = 'TOGGLE_ADD_RACK'
export const TOGGLE_ADD_SAMPLE = 'TOGGLE_ADD_SAMPLE'
export const ADD_RACK_SUCCESS = 'ADD_RACK_SUCCESS'
export const GET_RACKS_SUCCESS = 'GET_RACKS_SUCCESS'
export const CLOSE_RACK_SUCCESS = 'CLOSE_RACK_SUCCESS'
export const SET_ACTIVE_RACK_ID = 'SET_ACTIVE_RACK_ID'
export const DELETE_RACK_SUCCESS = 'DELETE_RACK_SUCCESS'
export const ADD_SAMPLE_SUCCESS = 'ADD_SAMPLE_SUCCESS'
export const RACK_FULL = 'RACK_FULL'
export const DELETE_SAMPLE_SUCCESS = 'DELETE_SAMPLE_SUCCESS'
export const UPDATE_CHECKBOX_RACK_TAB = 'UPDATE_CHECKBOX_RACK_TAB'
export const SET_SELECTED_SLOTS = 'SET_SELECTED_SLOTS'
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS'
export const TOGGLE_BOOK_SAMPLE_MODAL = 'TOGGLE_BOOK_SAMPLE_MODAL'
export const SUBMIT_SAMPLES_SUCCESS = 'SUBMIT_SAMPLES_SUCCESS'

//SEARCH
export const FETCH_EXPERIMENTS_START = 'FETCH_EXPERIMENTS_START'
export const FETCH_EXPERIMENTS_SUCCESS = 'FETCH_EXPERIMENTS_SUCCESS'
export const UPDATE_CHECKED_EXPS = 'UPDATE_CHECKED_EXPS'
export const UPDATE_CHECKED_DATASETS = 'UPDATE_CHECKED_DATASETS'
export const RESET_CHECKED = 'RESET_CHECKED'
export const RESET_SEARCH = 'RESET_SEARCH'
export const DOWNLOAD_EXPS_SUCCESS = 'DOWNLOAD_EXPS_SUCCESS'
export const TOGGLE_DOWNLOAD_MODAL = 'TOGGLE_DOWNLOAD_MODAL'
export const TOGGLE_SEARCH_FORM = 'TOGGLE_SEARCH_FORM'
export const GET_DATA_ACCESS_SUCCESS = 'GET_DATA_ACCESS_SUCCESS'

//ACCOUNTS
export const FETCH_COSTS_START = 'FETCH_COSTS_START'
export const FETCH_COSTS_SUCCESS = 'FETCH_COSTS_SUCCESS'
export const RESET_COSTS_TABLE = 'RESET_COSTS_TABLE'
export const TOGGLE_COSTING_DRAWER = 'TOGGLE_COSTING_DRAWER'
export const SET_TABLE_HEADER = 'SET_TABLE_HEADER'
export const FETCH_INSTRUMENTS_COSTING_SUCCESS = 'FETCH_INSTRUMENTS_COSTING_SUCCESS'
export const UPDATE_INSTRUMENTS_COSTING_SUCCESS = 'UPDATE_INSTRUMENT_COSTING_SUCCESS'

//NMRium
export const FETCH_NMRIUM_SUCCESS = 'FETCH_NMRIUM_SUCCESS'
export const SET_CHANGED_DATA = 'SET_CHANGED_DATA'
export const LOADING_NMRIUM_STARTS = 'LOADING_NMRIUM_STARTS'
export const SAVE_NMRIUM_SUCCESS = 'SAVE_NMRIUM_SUCCESS'
export const SET_ADDING_EXPS_STATUS = 'SET_ADDING_EXPS_STATUS'
export const KEEP_NMRIUM_CHANGES = 'KEEP_NMRIUM_CHANGES'
export const RESET_NMRIUM_DATA = 'RESET_NMRIUM_DATA'

//CLAIM
export const CLAIM_START = 'CLAIM_START'
export const GET_FOLDERS_START = 'GET_FOLDERS_START'
export const GET_MANUAL_FOLDERS_SUCCESS = 'GET_MANUAL_FOLDERS_SUCCESS'
export const RESET_CLAIM = 'RESET_CLAIM'
export const RESET_FOLDERS_DATA = 'RESET_FOLDERS_DATA'
export const UPDATE_CHECKED_CLAIM_EXPS = 'UPDATE_CHECKED_CLAIM_EXPS'
export const UPDATE_CHECKED_CLAIM_DATASETS = 'UPDATE_CHECKED_CLAIM_DATASETS'
export const UPDATE_CLAIM_USER = 'UPDATE_CLAIM_USER'
export const SUBMIT_CLAIM_SUCCESS = 'SUBMIT_CLAIM_SUCCESS'
export const TOGGLE_SHOW_ARCHIVED_SWITCH = 'TOGGLE_SHOW_ARCHIVED_SWITCH'
export const RESET_CLAIM_PROGRESS = 'RESET_CLAIM_PROGRESS'
export const TOGGLE_CLAIM_MODAL = 'TOGGLE_CLAIM_MODAL'

//CLAIMS-HISTORY
export const FETCH_CLAIMS_START = 'FETCH_CLAIMS_START'
export const FETCH_CLAIMS_SUCCESS = 'FETCH_CLAIMS_SUCCESS'
export const PATCH_CLAIMS_SUCCESS = 'PATCH_CLAIMS_SUCCESS'
export const UPDATE_CHECKED_CLAIMS = 'UPDATE_CHECKED_CLAIMS'
export const APPROVE_CHECKED_SUCCESS = 'APPROVE_CHECKED_SUCCESS'
export const TOGGLE_SHOW_APPROVED = 'TOGGLE_SHOW_APPROVED'
export const SET_DATE_RANGE = 'SET_DATE_RANGE'
