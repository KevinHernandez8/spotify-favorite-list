/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Routes } from '../../constants'
import { RootReducer } from '../../store/store'
import { Header, AlbumCard } from '../../components/index'
import {
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'
import { getNewReleases, loadMoreReleases } from '../../api/api'
import { Album } from '../../models'
import styles from './Home.module.css'

export default function Home() {
  const { display_name, access_token, isLogged } = useSelector(
    (state: RootReducer) => state.user
  )
  const { items, next } = useSelector((state: RootReducer) => state.album)
  const navigate = useNavigate()

  function handleLoadMore() {
    loadMoreReleases(next, access_token)
  }

  useEffect(() => {
    if (!isLogged) {
      navigate(Routes.LOGIN)
    } else if (items.length === 0) {
      getNewReleases(access_token)
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <Header userName={display_name} />
      <Container maxWidth="md" sx={{ paddingBottom: '1em' }}>
        <Typography variant="h3" sx={{ padding: '0.5em 0em' }}>
          Nuevos lanzamientos
        </Typography>
        {items.length === 0 ? (
          <CircularProgress size="3em" />
        ) : (
          <>
            <Grid container spacing={2}>
              {items.map((album: Album, index: number) => (
                <Grid key={index} item xs={4}>
                  <AlbumCard
                    albumId={album.id}
                    imageUrl={album.images[0].url}
                    name={album.name}
                    artists={album.artists}
                  />
                </Grid>
              ))}
            </Grid>
            <div className={styles.home__button}>
              <Button
                variant="contained"
                color="success"
                onClick={handleLoadMore}
              >
                Ver más
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  )
}
