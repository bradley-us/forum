import { combineReducers } from 'redux'
import { toggleAuthReducer } from './userReducer'

export const rootReducer = combineReducers(
  {
    /**
     * Syntax = global state name : reducer imported to be controlled
     * TODO: call here your reducers
     */
    toggleAuth: toggleAuthReducer
  }
)