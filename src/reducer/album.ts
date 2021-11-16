import { AnyAction } from 'redux'
import { AlbumPayload } from '../models'
import { SET_ALBUMS, RESET_ALBUMS } from '../actions/album'

const initialState: AlbumPayload = {
  href: '',
  items: [],
  limit: 0,
  next: '',
  offset: 0,
  previous: '',
  total: 0,
}

export default function album(
  state: AlbumPayload = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        ...action.payload,
      }
    case RESET_ALBUMS:
      return initialState
    default:
      return state
  }
}
