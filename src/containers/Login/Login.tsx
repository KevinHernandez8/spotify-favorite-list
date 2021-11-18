import React from 'react'
import { useNavigate } from 'react-router'
import { Box } from '@mui/system'
import {
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Logo } from '../../components'
import { Routes } from '../../constants'
import { config } from '../../config'
import styles from './Login.module.css'

export default function Login() {
  const { clientId, authorizeUrl, redirectUrl } = config
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // const data = new FormData(event.currentTarget)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
  }

  function handleLoginSpotify() {
    window.location.href = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_dialog=true&scope=user-library-modify user-library-read`
  }

  function handleSignUp() {
    navigate(Routes.SIGNUP)
  }

  return (
    <Grid container component="main" className={styles.login__container}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          className={styles.login__form}
          sx={{
            my: 8,
            mx: 4,
          }}
        >
          <Logo />
          <br />
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Button
              onClick={handleLoginSpotify}
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 1, mb: 1 }}
            >
              Ingresar con Spotify
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={handleSignUp} variant="body2">
                  ¿No tienes una cuenta? Regístrate
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
