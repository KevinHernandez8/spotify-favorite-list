import axios from 'axios'
import store from '../store/store'
import { Endpoints } from '../constants'
import { doSetUserInformation } from '../actions/user'
import { doLoadMoreAlbums, doSetAlbums } from '../actions/album'
import {
  doAddFavorite,
  doAlbumNotFound,
  doCheckFavorites,
  doRemoveFavoriteTrack,
  doSetTracks,
} from '../actions/track'
import { doSetFavorites, doRemoveFavorite } from '../actions/favorite'

const baseURL = `https://api.spotify.com/v1`

/**
 * Get the user's information from the API using the current access_token
 * @param token access_token of the user (taken from the API)
 */
async function getUserInfo(token: string) {
  const result = await axios.get(`${baseURL}/${Endpoints.me}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (result.status === 200) {
    const { display_name, id } = result.data
    store.dispatch(doSetUserInformation({ id, display_name }))
  }
}

/**
 * Get the new releases albums from the API and save them in the storage
 * @param token access_token of the user (taken from the API)
 */
async function getNewReleases(token: string) {
  const result = await axios.get(`${baseURL}/${Endpoints.newReleases}`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { country: 'CO', limit: 15, offset: 0 },
  })
  if (result.status === 200) {
    store.dispatch(doSetAlbums(result.data.albums))
  }
}

/**
 * Get the next releases albums from the API and save them in the storage
 * @param url "next" url inside the album storage
 * @param token access_token of the user
 */
async function loadMoreReleases(url: string, token: string) {
  const result = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (result.status === 200) {
    store.dispatch(doLoadMoreAlbums(result.data.albums))
  }
}

/**
 * Get the tracks of the specified album
 * @param albumId id of the album to search
 * @param token access_token of the user
 */
async function getAlbumTracks(albumId: string, token: string) {
  try {
    const result = await axios.get(`${baseURL}/albums/${albumId}/tracks`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { market: 'CO', limit: 50, offset: 0 },
    })
    if (result.status === 200) {
      store.dispatch(doSetTracks(result.data))
    }
  } catch (error) {
    store.dispatch(doAlbumNotFound())
  }
}

/**
 * Get the favorite tracks of the user
 * @param token access_token of the user
 */
async function getFavorites(token: string) {
  const result = await axios.get(`${baseURL}/${Endpoints.favorites}`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { market: 'CO', limit: 50, offset: 0 },
  })
  if (result.status === 200) {
    store.dispatch(doSetFavorites(result.data))
  }
}

/**
 * Remove the track from the favorite list given the track id
 * @param token access_token of the user
 * @param trackId id of the track to be removed
 * @param trackIndex index of the track to be removed from store
 */
async function removeFavorite(
  token: string,
  trackId: string,
  trackIndex: number,
  isSingleTrack: boolean = false
) {
  const result = await axios.delete(`${baseURL}/${Endpoints.favorites}`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { ids: trackId },
  })
  if (result.status === 200) {
    if (isSingleTrack) {
      store.dispatch(doRemoveFavoriteTrack(trackIndex))
    } else {
      store.dispatch(doRemoveFavorite(trackIndex))
    }
  }
}

/**
 * Add the track to the favorite list given the track id
 * @param token access_token of the user
 * @param trackId id of the track to be removed
 * @param trackIndex index of the track to be removed from store
 */
async function addFavorite(token: string, trackId: string, trackIndex: number) {
  const result = await axios.put(
    `${baseURL}/${Endpoints.favorites}`,
    {},
    { headers: { Authorization: `Bearer ${token}` }, params: { ids: trackId } }
  )
  if (result.status === 200) {
    store.dispatch(doAddFavorite(trackIndex))
  }
}

/**
 * Check if the track is liked by the user
 * @param token acess_token of the user
 * @param tracks array with id of the tracks
 * @returns array of booleans that indicate if the track is favorite or not
 */
async function checkFavorites(token: string, tracks: string[]) {
  const result = await axios.get(`${baseURL}/${Endpoints.checkFavorites}`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { ids: tracks.join(',') },
  })
  if (result.status === 200) {
    store.dispatch(doCheckFavorites(result.data))
  }
}

export {
  getUserInfo,
  getNewReleases,
  loadMoreReleases,
  getAlbumTracks,
  getFavorites,
  removeFavorite,
  addFavorite,
  checkFavorites,
}
