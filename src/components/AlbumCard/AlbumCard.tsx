import React from 'react'
import { useNavigate } from 'react-router'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Routes } from '../../constants'
import { Artist } from '../../models'

type AlbumCardProps = {
  albumId: string
  imageUrl: string
  name: string
  artists: Artist[]
}

export default function AlbumCard({
  albumId,
  imageUrl,
  name,
  artists,
}: AlbumCardProps) {
  const navigate = useNavigate()

  function handleClickAlbum() {
    navigate(`${Routes.ALBUM}/${albumId}`)
  }

  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea onClick={handleClickAlbum}>
        <CardMedia component="img" height={320} image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.disabled">
            {artists.map((artist: Artist) => artist.name).join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
