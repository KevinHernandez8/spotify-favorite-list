/* eslint-disable no-restricted-globals */
import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { doSetAccessToken } from '../../actions/user'
import { getUserInfo } from '../../api/api'
import { Routes } from '../../constants'
import { RootReducer } from '../../store/store'
import styles from './Redirect.module.css'

export default function Redirect() {
  const { access_token, isLogged } = useSelector(
    (state: RootReducer) => state.user
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      location.hash &&
      location.hash !== '' &&
      location.hash.includes('access_token')
    ) {
      const token = location.hash.slice(1).split('&')[0].split('=')[1]
      dispatch(doSetAccessToken(token))
    }
  }, [])

  useEffect(() => {
    if (access_token !== '') {
      getUserInfo(access_token)
    }
  }, [access_token])

  useEffect(() => {
    if (isLogged) {
      navigate(Routes.HOME)
    }
  }, [isLogged])

  return (
    <div className={styles.redirect__loader}>
      <CircularProgress size="5em" />
    </div>
  )
}
