import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Menu, MenuItem } from '@mui/material'
import { ExpandLess, ExpandMore, Logout, Star } from '@mui/icons-material'
import { Routes } from '../../constants'
import { doLogoutUser } from '../../actions/user'
import { RootReducer } from '../../store/store'
import Logo from '../Logo'
import styles from './Header.module.css'

type HeaderProps = {
  userName: string
}

export default function Header({ userName }: HeaderProps) {
  const { isLogged } = useSelector((state: RootReducer) => state.user)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpenMenu = !!anchorEl
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleClickButton(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleCloseMenu() {
    setAnchorEl(null)
  }

  function handleClickLogo() {
    navigate(Routes.HOME)
  }

  function handleClickFavorites() {
    navigate(Routes.FAVORITES)
  }

  function handleClickLogout() {
    dispatch(doLogoutUser())
  }

  useEffect(() => {
    if (!isLogged) {
      navigate(Routes.LOGIN)
    }
  }, [isLogged])

  return (
    <header className={styles.header__container}>
      <div className={styles.header__title} onClick={handleClickLogo}>
        <Logo />
      </div>
      <Button
        className={styles.header__button}
        variant="text"
        onClick={handleClickButton}
      >
        {userName}&nbsp;{isOpenMenu ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpenMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleClickFavorites}>
          <Star color="disabled" />
          &nbsp;Tus favoritos
        </MenuItem>
        <MenuItem onClick={handleClickLogout}>
          <Logout color="disabled" />
          &nbsp;Salir
        </MenuItem>
      </Menu>
    </header>
  )
}
