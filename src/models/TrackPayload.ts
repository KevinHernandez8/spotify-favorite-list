import Track from './Track'

export default interface TrackPayload {
  href: string
  items: Track[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  error: boolean
}
