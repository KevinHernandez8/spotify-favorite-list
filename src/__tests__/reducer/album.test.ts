import { AnyAction } from 'redux'
import album from '../../reducer/album'
import { SET_ALBUMS, LOAD_MORE_ALBUMS, RESET_ALBUMS } from '../../actions/album'

describe('album reducer', () => {
  it('should handle initial state', () => {
    expect(album(undefined, {} as AnyAction)).toMatchSnapshot()
  })

  it('should handle SET_ALBUMS', () => {
    expect(
      album(undefined, {
        type: SET_ALBUMS,
        payload: {
          href: 'test',
          items: ['test'],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle LOAD_MORE_ALBUMS', () => {
    expect(
      album(undefined, {
        type: LOAD_MORE_ALBUMS,
        payload: {
          href: 'test',
          items: ['test'],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle RESET_ALBUMS', () => {
    expect(album(undefined, { type: RESET_ALBUMS })).toMatchSnapshot()
  })
})
