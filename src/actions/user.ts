import { UserInformationPayload } from '../models'

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const SET_USER_INFORMATION = 'SET_USER_INFORMATION'
export const LOGOUT_USER = 'LOGOUT_USER'

/**
 * Set access_token to the user's state
 * @param payload access_token for the user
 */
export function doSetAccessToken(payload: string) {
  return {
    type: SET_ACCESS_TOKEN,
    payload,
  }
}

/**
 * Set the user information from API response
 * @param payload id, display_name from the user
 */
export function doSetUserInformation(payload: UserInformationPayload) {
  return {
    type: SET_USER_INFORMATION,
    payload,
  }
}

/**
 * Log out the current user
 */
export function doLogoutUser() {
  return { type: LOGOUT_USER }
}
