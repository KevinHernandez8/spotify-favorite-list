import Artist from './Artist'

export default interface Track {
  artists: Artist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: object
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  track_number: number
  type: string
  uri: string
}
