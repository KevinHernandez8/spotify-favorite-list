import React from 'react'
import { render, screen } from '@testing-library/react'
import { NotFound } from '../../components'

describe('NotFound component test', () => {
  it('should render component without crashing', () => {
    render(<NotFound />)
    const text = screen.getByText(/no fue encontrado/g)
    expect(text).toBeInTheDocument()
  })
})
