import { AlbumPayload } from '../models'

export const SET_ALBUMS = 'SET_ALBUMS'
export const RESET_ALBUMS = 'RESET_ALBUMS'

/**
 * Set the albums information
 * @param payload array with albums
 */
export function doSetAlbums(payload: AlbumPayload) {
  return {
    type: SET_ALBUMS,
    payload,
  }
}

/**
 * Clear the album information
 */
export function doResetAlbums() {
  return { type: RESET_ALBUMS }
}
