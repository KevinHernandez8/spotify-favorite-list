import { AnyAction } from 'redux'
import user from '../../reducer/user'
import {
  SET_ACCESS_TOKEN,
  SET_USER_INFORMATION,
  LOGOUT_USER,
} from '../../actions/user'

describe('user reducer', () => {
  it('should handle initial state', () => {
    expect(user(undefined, {} as AnyAction)).toMatchSnapshot()
  })

  it('should handle SET_ACCESS_TOKEN', () => {
    expect(
      user(undefined, {
        type: SET_ACCESS_TOKEN,
        payload: 'Test',
      })
    ).toMatchSnapshot()
  })

  it('should handle SET_USER_INFORMATION', () => {
    expect(
      user(undefined, {
        type: SET_USER_INFORMATION,
        payload: {
          id: 'TestId',
          display_name: 'Test',
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle LOGOUT_USER', () => {
    expect(user(undefined, { type: LOGOUT_USER })).toMatchSnapshot()
  })
})
