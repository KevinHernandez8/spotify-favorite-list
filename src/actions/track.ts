import { TrackPayload } from '../models'

export const SET_TRACKS = 'SET_TRACKS'
export const ALBUM_NOT_FOUND = 'ALBUM_NOT_FOUND'
export const ADD_FAVORITE_TRACK = 'ADD_FAVORITE_TRACK'
export const REMOVE_FAVORITE_TRACK = 'REMOVE_FAVORITE_TRACK'
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

/**
 * Update the is_favorite key of the specified track
 * @param payload index from the tracks storage
 */
export function doAddFavorite(payload: number) {
  return {
    type: ADD_FAVORITE_TRACK,
    payload,
  }
}

/**
 * Remove the is_favorite key of the specified track
 * @param payload index from the tracks storage
 */
export function doRemoveFavoriteTrack(payload: number) {
  return {
    type: REMOVE_FAVORITE_TRACK,
    payload,
  }
}

/**
 * Clear the tracks storage
 */
export function doResetTracks() {
  return {
    type: RESET_TRACKS,
  }
}
