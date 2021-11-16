import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Artist } from '../../models'

type AlbumCardProps = {
  imageUrl: string
  name: string
  artists: Artist[]
}

export default function AlbumCard({ imageUrl, name, artists }: AlbumCardProps) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
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
