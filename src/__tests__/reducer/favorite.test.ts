import { AnyAction } from 'redux'
import favorite from '../../reducer/favorite'
import {
  SET_FAVORITES,
  REMOVE_FAVORITE,
  RESET_FAVORITES,
} from '../../actions/favorite'
import MockFavorite from '../mock/Favorite.mock.json'

describe('favorite reducer', () => {
  it('should handle initial state', () => {
    expect(favorite(undefined, {} as AnyAction)).toMatchSnapshot()
  })

  it('should handle SET_FAVORITES', () => {
    expect(
      favorite(undefined, {
        type: SET_FAVORITES,
        payload: {
          href: 'test',
          items: [],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle REMOVE_FAVORITE', () => {
    expect(
      favorite(
        {
          href: 'test',
          items: [MockFavorite],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
        },
        {
          type: REMOVE_FAVORITE,
          payload: 0,
        }
      )
    ).toMatchSnapshot()
  })

  it('should handle RESET_FAVORITES', () => {
    expect(favorite(undefined, { type: RESET_FAVORITES })).toMatchSnapshot()
  })
})
