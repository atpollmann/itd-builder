import {
  OPEN_POPPER,
  CLOSE_POPPER
} from "../actions"
import initialState from "./intialState"

function reducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_POPPER:
      return {
        ...state,
        isPopperOpen: action.isPopperOpen
      }
    case CLOSE_POPPER:
      return {
        ...state,
        isPopperOpen: action.isPopperOpen
      }
    default:
      return state
  }
}

export default reducer