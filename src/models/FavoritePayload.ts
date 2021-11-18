import Favorite from './Favorite'

export default interface FavoritePayload {
  href: string
  items: Favorite[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}
