import React from 'react'
import SpotifyLogo from '../../assets/spotify_logo.svg'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <>
      <img className={styles.logo__image} src={SpotifyLogo} alt="logo" />
      <span className={styles.logo__title}>My Music App</span>
    </>
  )
}
