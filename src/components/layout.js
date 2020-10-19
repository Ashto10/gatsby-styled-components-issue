import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navigation from './navigation'
import Footer from './footer'
import { GlobalStyle, theme } from '../theme/global-style'

export default function Layout({ children, location }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation pathname={location.pathname} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
