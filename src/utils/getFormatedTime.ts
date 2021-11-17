import moment from 'moment'

/**
 * Receive the song's time in milliseconds and transform it in a better format
 * @param time song's time in milliseconds
 * @returns formatted time in this form '04:55'
 */
export default function getFormatedTime(time: number) {
  return moment(time).format('mm:ss')
}
