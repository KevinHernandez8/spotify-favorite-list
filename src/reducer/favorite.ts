import { AnyAction } from 'redux'
import {
  REMOVE_FAVORITE,
  RESET_FAVORITES,
  SET_FAVORITES,
} from '../actions/favorite'
import { FavoritePayload } from '../models'

const initialState: FavoritePayload = {
  href: '',
  items: [],
  limit: 0,
  next: '',
  offset: 0,
  previous: '',
  total: 0,
}

export default function favorite(
  state: FavoritePayload = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        ...action.payload,
      }
    case REMOVE_FAVORITE:
      state.items.splice(action.payload, 1)
      return {
        ...state,
        total: state.total - 1,
      }
    case RESET_FAVORITES:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
