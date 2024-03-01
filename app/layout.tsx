'use client'
import React from 'react';
import styled,{ThemeProvider} from 'styled-components';
import {theme,GlobalStyle} from '../styles'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StyledMainContainer = styled.main`
  counter-reset: section;
`;
export default function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {
   
    return (
      <html lang="en">
        <body >
          <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          <StyledContent>
            {children}
            </StyledContent>
            </ThemeProvider>
            </body>
      </html>
    )
  }