import axios from 'axios'
import store from '../store/store'
import { Endpoints } from '../constants'
import { doSetUserInformation } from '../actions/user'

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

export { getUserInfo }
