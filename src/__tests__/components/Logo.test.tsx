import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from '../../components'

describe('Logo component test', () => {
  it('should render component without crashing', () => {
    render(<Logo />)
    const text = screen.getByText(/My Music App/g)
    expect(text).toBeInTheDocument()
  })
})
