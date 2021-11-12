import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Routes } from '../../constants'
import { RootReducer } from '../../store/store'
import { Header } from '../../components/index'

export default function Home() {
  const { display_name, isLogged } = useSelector(
    (state: RootReducer) => state.user
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate(Routes.LOGIN)
    }
  }, [])

  return (
    <>
      <Header userName={display_name} />
    </>
  )
}
