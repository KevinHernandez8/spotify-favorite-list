import { AnyAction } from 'redux'
import { UserState } from '../models'
import {
  LOGOUT_USER,
  SET_ACCESS_TOKEN,
  SET_USER_INFORMATION,
} from '../actions/user'

const initialState: UserState = {
  id: '',
  display_name: '',
  access_token: '',
  isLogged: false,
}

export default function user(
  state: UserState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      }
    case SET_USER_INFORMATION:
      return {
        ...state,
        id: action.payload.id,
        display_name: action.payload.display_name,
        isLogged: true,
      }
    case LOGOUT_USER:
      return {
        initialState,
      }
    default:
      return state
  }
}
