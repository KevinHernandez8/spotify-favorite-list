import { AnyAction } from 'redux'
import { SET_TRACKS, ALBUM_NOT_FOUND, RESET_TRACKS } from '../actions/track'
import { TrackPayload } from '../models'

const initialState: TrackPayload = {
  href: '',
  items: [],
  limit: 0,
  next: '',
  offset: 0,
  previous: '',
  total: 0,
  error: false,
}

export default function track(
  state: TrackPayload = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        ...action.payload,
      }
    case ALBUM_NOT_FOUND:
      return {
        ...state,
        error: true,
      }
    case RESET_TRACKS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
