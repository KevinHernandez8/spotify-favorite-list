import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'
import SignUp from '../../containers/SignUp'
import userEvent from '@testing-library/user-event'

describe('SignUp container test', () => {
  it('should render component without crashing', () => {
    render(<SignUp />, { wrapper: MemoryRouter })
    const title = screen.getByText(/Regístrate/i)
    expect(title).toBeInTheDocument()
  })

  it('should fill the form', () => {
    const { getByLabelText } = render(<SignUp />, { wrapper: MemoryRouter })

    const firstName = getByLabelText(/First Name/i)
    const lastName = getByLabelText(/Last Name/i)
    const email = getByLabelText(/Email Address/i)
    const password = getByLabelText(/Password/i)
    const button = screen.getByText(/Registrar/i)

    userEvent.type(firstName, 'Name')
    userEvent.type(lastName, 'LastName')
    userEvent.type(email, 'test@test.com')
    userEvent.type(password, '123456789')
    userEvent.click(button)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
