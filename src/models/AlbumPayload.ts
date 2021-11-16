import Album from './Album'

export default interface AlbumPayload {
  href: string
  items: Album[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}
