import { AnyAction } from 'redux'
import {
  SET_TRACKS,
  ALBUM_NOT_FOUND,
  RESET_TRACKS,
  ADD_FAVORITE_TRACK,
  REMOVE_FAVORITE_TRACK,
  CHECK_FAVORITES,
} from '../actions/track'
import { Track, TrackPayload } from '../models'

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
    case ADD_FAVORITE_TRACK:
      state.items[action.payload].is_favorite = true
      return {
        ...state,
      }
    case REMOVE_FAVORITE_TRACK:
      state.items[action.payload].is_favorite = false
      return {
        ...state,
      }
    case CHECK_FAVORITES:
      state.items.map(
        (track: Track, index: number) =>
          (track.is_favorite = action.payload[index])
      )
      return {
        ...state,
      }
    case RESET_TRACKS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
