import { SET_FALSE_AUTH } from '../actions/actions'

let initialState = {auth:true}

export const toggleAuthReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_FALSE_AUTH:
      return {
        auth:false
      }
    default:
      return state
  }
}