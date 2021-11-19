import { AnyAction } from 'redux'
import track from '../../reducer/track'
import {
  SET_TRACKS,
  ALBUM_NOT_FOUND,
  ADD_FAVORITE_TRACK,
  REMOVE_FAVORITE_TRACK,
  CHECK_FAVORITES,
  RESET_TRACKS,
} from '../../actions/track'
import MockTrack from '../mock/Track.mock.json'

describe('track reducer', () => {
  it('should handle initial state', () => {
    expect(track(undefined, {} as AnyAction)).toMatchSnapshot()
  })

  it('should handle SET_TRACKS', () => {
    expect(
      track(undefined, {
        type: SET_TRACKS,
        payload: {
          href: 'test',
          items: [],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
          error: false,
        },
      })
    ).toMatchSnapshot()
  })

  it('should handle ALBUM_NOT_FOUND', () => {
    expect(
      track(undefined, {
        type: ALBUM_NOT_FOUND,
      })
    ).toMatchSnapshot()
  })

  it('should handle ADD_FAVORITE_TRACK', () => {
    expect(
      track(
        {
          href: 'test',
          items: [MockTrack],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
          error: false,
        },
        {
          type: ADD_FAVORITE_TRACK,
          payload: 0,
        }
      )
    ).toMatchSnapshot()
  })

  it('should handle REMOVE_FAVORITE_TRACK', () => {
    expect(
      track(
        {
          href: 'test',
          items: [MockTrack],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
          error: false,
        },
        {
          type: REMOVE_FAVORITE_TRACK,
          payload: 0,
        }
      )
    ).toMatchSnapshot()
  })

  it('should handle CHECK_FAVORITES', () => {
    expect(
      track(
        {
          href: 'test',
          items: [MockTrack],
          limit: 10,
          next: 'test',
          offset: 10,
          previous: 'test',
          total: 10,
          error: false,
        },
        {
          type: CHECK_FAVORITES,
          payload: [false],
        }
      )
    ).toMatchSnapshot()
  })

  it('should handle RESET_TRACKS', () => {
    expect(track(undefined, { type: RESET_TRACKS })).toMatchSnapshot()
  })
})
