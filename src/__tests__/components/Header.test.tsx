import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { doSetUserInformation } from '../../actions/user'
import { Header } from '../../components'
import store from '../../store/store'

store.dispatch(doSetUserInformation({ id: 'test', display_name: 'Test' }))

describe('Header component test', () => {
  it('should render component without crashing', () => {
    render(
      <Provider store={store}>
        <Header userName="Test" />
      </Provider>,
      { wrapper: MemoryRouter }
    )
    const text = screen.getByText(/Test/g)
    expect(text).toBeInTheDocument()
  })

  it('should show the account options', () => {
    render(
      <Provider store={store}>
        <Header userName="Test" />
      </Provider>,
      { wrapper: MemoryRouter }
    )
    fireEvent.click(screen.getByText(/Test/i))
    const favorite = screen.getByText(/favoritos/i)
    const exit = screen.getByText(/salir/i)
    expect(favorite).toBeInTheDocument()
    expect(exit).toBeInTheDocument()
  })
})
