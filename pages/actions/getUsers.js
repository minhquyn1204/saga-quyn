import {ActionTypes} from '../constants/ActionTypes'

export const loadUserStart = () =>({
  type: ActionTypes.LOAD_USER_START, 
})
export const loadUserSuccess = (users) =>({
  type: ActionTypes.LOAD_USER_SUCCESS, 
  payload:users
})
export const loadUserError = (error) =>({
  type: ActionTypes.LOAD_USER_ERROR, 
  payload: error
})
//
export const createUserStart = (user) =>({
  type: ActionTypes.CREATE_USER_START, 
  payload:user
})
export const createUserSuccess = () =>({
  type: ActionTypes.CREATE_USER_SUCCESS, 
})
export const createUserError = (error) =>({
  type: ActionTypes.CREATE_USER_ERROR, 
  payoad: error,
})
//
export const deleteUserStart = (userId) =>({
  type: ActionTypes.DELETE_USER_START, 
  payload:userId
})
export const deleteUserSuccess = (userId) =>({
  type: ActionTypes.DELETE_USER_SUCCESS, 
  payload:userId
})
export const deleteUserError = (error) =>({
  type: ActionTypes.DELETE_USER_ERROR, 
  payoad: error,
})