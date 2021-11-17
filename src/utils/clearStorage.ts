import { Dispatch } from 'redux'
import { doResetAlbums } from '../actions/album'
import { doResetTracks } from '../actions/track'
import { doLogoutUser } from '../actions/user'

export default function clearStorage(dispatcher: Dispatch) {
  dispatcher(doLogoutUser())
  dispatcher(doResetAlbums())
  dispatcher(doResetTracks())
  localStorage.clear()
}
