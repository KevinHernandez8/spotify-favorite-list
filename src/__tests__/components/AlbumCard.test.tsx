import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'
import { AlbumCard } from '../../components'
import MockArtist from '../mock/Artist.mock.json'

describe('AlbumCard component test', () => {
  it('should render component without crashing', () => {
    render(
      <AlbumCard
        albumId="123"
        imageUrl=""
        name="TestAlbum"
        artists={[MockArtist]}
      />,
      { wrapper: MemoryRouter }
    )
    const text = screen.getByText(/TestAlbum/i)
    expect(text).toBeInTheDocument()
  })
})
