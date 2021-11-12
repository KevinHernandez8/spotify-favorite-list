import { AnyAction } from 'redux'
import { UserState } from '../models'
import { SET_ACCESS_TOKEN } from '../actions/user'

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
    default:
      return state
  }
}
