import { TrackPayload } from '../models'

export const SET_TRACKS = 'SET_TRACKS'
export const ALBUM_NOT_FOUND = 'ALBUM_NOT_FOUND'
export const RESET_TRACKS = 'RESET_TRACKS'

/**
 * Set the album's tracks information into the storage
 * @param payload album's tracks information from the API
 */
export function doSetTracks(payload: TrackPayload) {
  return {
    type: SET_TRACKS,
    payload,
  }
}

/**
 * Indicates the error in case the album is not found
 */
export function doAlbumNotFound() {
  return {
    type: ALBUM_NOT_FOUND,
  }
}

export function doResetTracks() {
  return {
    type: RESET_TRACKS,
  }
}
