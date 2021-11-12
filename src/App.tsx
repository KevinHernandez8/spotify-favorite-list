import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Routes as Paths } from './constants/index'
import Home from './containers/Home'
import Login from './containers/Login'
import Redirect from './containers/Redirect'
import SignUp from './containers/SignUp'
import store from './store/store'
import './App.css'

function NotFound() {
  return <h1>404</h1>
}

/**
 * Use dark theme by default
 */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path={Paths.HOME} element={<Home />} />
            <Route path={Paths.LOGIN} element={<Login />} />
            <Route path={Paths.REDIRECT} element={<Redirect />} />
            <Route path={Paths.SIGNUP} element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
