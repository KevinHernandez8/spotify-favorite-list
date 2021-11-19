import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Login from '../../containers/Login'
import store from '../../store/store'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'

describe('Login container test', () => {
  it('should render component without crashing', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    )
  })

  it('should fill the form', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    )

    const email = getByLabelText(/Correo electrónico/i)
    const password = getByLabelText(/Contraseña/i)
    const button = screen.getAllByText(/Ingresar/i)

    userEvent.type(email, 'test@test.com')
    userEvent.type(password, '123456789')
    userEvent.click(button[0])

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button[0]).toBeInTheDocument()
  })
})
