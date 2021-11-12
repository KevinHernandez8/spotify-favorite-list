/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { doSetAccessToken } from '../../actions/user'
import { RootReducer } from '../../store/store'

export default function Redirect() {
  const { access_token } = useSelector((state: RootReducer) => state.user)
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
      // TODO: Call API to get user info using access_token
      // TODO: Store response information to log in the user
      // TODO: Once user info is complete, redirect to Home
    }
  }, [access_token])

  return <h1>Hola</h1>
}
