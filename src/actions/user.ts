export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'

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
