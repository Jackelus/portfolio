import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from "../styles/globalStyle"
import { lightTheme, darkTheme } from "../styles/theme"
import Header from "./header"
import Footer from "./footer"


const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </ThemeProvider>
    </StyledLayoutWrapper>
  )
}

export default Layout