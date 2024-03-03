'use client'
import React,{useState,useEffect} from 'react';
import styled,{ThemeProvider} from 'styled-components';
import {theme,GlobalStyle} from '../styles'
import { useRouter } from 'next/router';
import Loader from '../components/loaders';
import Nav from '../components/nav';
import Social from '../components/social';
import Email from '../components/email';

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
          <Nav isHome={true} />
          <Social isHome={true} />
          <Email isHome={true} />
          <div id="content">
            {children}</div>
            </StyledContent>
            </ThemeProvider>
            </body>
      </html>
    )
  }