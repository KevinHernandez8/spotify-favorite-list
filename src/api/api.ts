import axios from 'axios'
import store from '../store/store'
import { Endpoints } from '../constants'
import { doSetUserInformation } from '../actions/user'
import { doLoadMoreAlbums, doSetAlbums } from '../actions/album'
import { doAlbumNotFound, doSetTracks } from '../actions/track'

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

export { getUserInfo, getNewReleases, loadMoreReleases, getAlbumTracks }
