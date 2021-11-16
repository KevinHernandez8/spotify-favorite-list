import axios from 'axios'
import store from '../store/store'
import { Endpoints } from '../constants'
import { doSetUserInformation } from '../actions/user'
import { doSetAlbums } from '../actions/album'

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
    params: { country: 'CO', limit: 20, offset: 0 },
  })
  if (result.status === 200) {
    store.dispatch(doSetAlbums(result.data.albums))
  }
}

export { getUserInfo, getNewReleases }
