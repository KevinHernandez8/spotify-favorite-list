import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Redirect from '../../containers/Redirect'
import store from '../../store/store'
import { MemoryRouter } from 'react-router'

describe('Redirect container test', () => {
  it('should render component without crashing', () => {
    render(
      <Provider store={store}>
        <Redirect />
      </Provider>,
      { wrapper: MemoryRouter }
    )
  })
})
