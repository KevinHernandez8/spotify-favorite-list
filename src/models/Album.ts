import Artist from './Artist'
import Image from './Image'

export default interface Album {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: object
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}
