/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getFavorites, removeFavorite } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import {
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { AccessTime, Favorite as FavoriteIcon } from '@mui/icons-material'
import { Header } from '../../components'
import FavoritesImage from '../../assets/favorites.png'
import { RootReducer } from '../../store/store'
import { doResetFavorites } from '../../actions/favorite'
import getFormatedTime from '../../utils/getFormatedTime'
import { Favorite } from '../../models'
import styles from './Favorites.module.css'

export default function Favorites() {
  const { access_token, display_name } = useSelector(
    (state: RootReducer) => state.user
  )
  const { items, total } = useSelector((state: RootReducer) => state.favorite)
  const dispatch = useDispatch()

  function handleClickFavorite(trackId: string, trackIndex: number) {
    removeFavorite(access_token, trackId, trackIndex)
  }

  useEffect(() => {
    getFavorites(access_token)
    return () => {
      dispatch(doResetFavorites())
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <Header userName={display_name} />
      {items.length === 0 && <CircularProgress size="3em" />}
      {items.length > 0 && (
        <Container maxWidth="md" sx={{ padding: '1em' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                className={styles.favorites__image}
                src={FavoritesImage}
                alt="favorites_icon"
              />
            </Grid>
            <Grid className={styles.favorites__title} item xs={8}>
              <Typography variant="h3" gutterBottom>
                Tus Favoritos
              </Typography>
              <Typography variant="body2" gutterBottom color="text.disabled">
                {`${display_name} • ${total} canciones`}
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
                  <TableCell>Álbum</TableCell>
                  <TableCell align="center">
                    <AccessTime />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((favorite: Favorite, index: number) => (
                  <TableRow
                    hover
                    key={`${index}-${favorite.track.track_number}`}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell>
                      <div className={styles.favorites__rowTitle}>
                        <img
                          className={styles.favorites__albumImage}
                          src={favorite.track.album.images[0].url}
                          alt="album_img"
                        />
                        {favorite.track.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={styles.favorites__rowAlbum}>
                        {favorite.track.album.name}
                        <IconButton
                          onClick={() =>
                            handleClickFavorite(favorite.track.id, index)
                          }
                        >
                          <FavoriteIcon color="success" />
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {getFormatedTime(favorite.track.duration_ms)}
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
