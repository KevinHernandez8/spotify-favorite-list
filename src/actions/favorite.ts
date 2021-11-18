import { FavoritePayload } from '../models'

export const SET_FAVORITES = 'SET_FAVORITES'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const RESET_FAVORITES = 'RESET_FAVORITES'

/**
 * Save the favorite list into the storage
 * @param payload favorite list result of the API
 */
export function doSetFavorites(payload: FavoritePayload) {
  return {
    type: SET_FAVORITES,
    payload,
  }
}

/**
 * Removes the favorite track from the storage given the track index
 * @param payload index of the track to be removed
 */
export function doRemoveFavorite(payload: number) {
  return {
    type: REMOVE_FAVORITE,
    payload,
  }
}

/**
 * Clear the favorite storage
 */
export function doResetFavorites() {
  return {
    type: RESET_FAVORITES,
  }
}
