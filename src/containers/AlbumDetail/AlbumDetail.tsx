/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  IconButton,
} from '@mui/material'
import { AccessTime, Favorite, FavoriteBorder } from '@mui/icons-material'
import getFormatedTime from '../../utils/getFormatedTime'
import { doResetTracks } from '../../actions/track'
import { addFavorite, getAlbumTracks, removeFavorite } from '../../api/api'
import { RootReducer } from '../../store/store'
import { Header, NotFound } from '../../components'
import { Album, Artist, Track } from '../../models'
import styles from './AlbumDetail.module.css'

export default function AlbumDetail() {
  const { access_token, display_name } = useSelector(
    (state: RootReducer) => state.user
  )
  const { items: albums } = useSelector((state: RootReducer) => state.album)
  const { items: tracks, error } = useSelector(
    (state: RootReducer) => state.track
  )
  const params = useParams()
  const dispatch = useDispatch()

  function handleClickFavorite(
    trackId: string,
    trackIndex: number,
    isFavorite: boolean
  ) {
    if (isFavorite) {
      removeFavorite(access_token, trackId, trackIndex, true)
    } else {
      addFavorite(access_token, trackId, trackIndex)
    }
  }

  useEffect(() => {
    getAlbumTracks(params.albumId || '', access_token)
    // Reset the state
    return () => {
      dispatch(doResetTracks())
    }
  }, [])

  const currentAlbum: Album = useMemo(() => {
    if (albums.length > 0) {
      return albums.find((album: Album) => album.id === params.albumId)
    }
  }, [albums])

  const artistNames = useMemo(() => {
    if (currentAlbum) {
      return currentAlbum.artists
        .map((artist: Artist) => artist.name)
        .join(', ')
    }
  }, [currentAlbum])

  return (
    <>
      <CssBaseline />
      <Header userName={display_name} />
      {tracks.length === 0 && !error && <CircularProgress size="3em" />}
      {tracks.length === 0 && error && <NotFound />}
      {tracks.length > 0 && (
        <Container maxWidth="md" sx={{ padding: '1em' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                className={styles.albumDetail__image}
                src={currentAlbum?.images[0].url}
                alt="album_img"
              />
            </Grid>
            <Grid item xs={8} className={styles.albumDetail__title}>
              <Typography variant="h3" gutterBottom>
                {currentAlbum?.name}
              </Typography>
              <Typography variant="body2" color="text.disabled">
                {`${artistNames} • ${currentAlbum?.total_tracks} canciones`}
              </Typography>
            </Grid>
          </Grid>
          <br />
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell align="center">
                    <AccessTime />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tracks.map((track: Track, index: number) => (
                  <TableRow hover key={`${index}-${track.track_number}`}>
                    <TableCell align="center">{track.track_number}</TableCell>
                    <TableCell>
                      <div className={styles.albumDetail__customRow}>
                        {track.name}
                        <IconButton
                          onClick={() =>
                            handleClickFavorite(
                              track.id,
                              index,
                              track.is_favorite
                            )
                          }
                        >
                          {track.is_favorite ? (
                            <Favorite color="success" />
                          ) : (
                            <FavoriteBorder />
                          )}
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {getFormatedTime(track.duration_ms)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  )
}
