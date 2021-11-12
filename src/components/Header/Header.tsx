import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Menu, MenuItem } from '@mui/material'
import { ExpandLess, ExpandMore, Logout, Star } from '@mui/icons-material'
import { Routes } from '../../constants'
import Logo from '../Logo'
import styles from './Header.module.css'

type HeaderProps = {
  userName: string
}

export default function Header({ userName }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpenMenu = !!anchorEl
  const navigator = useNavigate()

  function handleClickButton(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleCloseMenu() {
    setAnchorEl(null)
  }

  function handleClickLogo() {
    navigator(Routes.HOME)
  }

  function handleClickFavorites() {
    navigator(Routes.FAVORITES)
  }

  function handleClickLogout() {
    console.log('Logout')
  }

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
