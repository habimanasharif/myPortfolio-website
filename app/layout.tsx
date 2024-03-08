'use client'
import React,{useState,useEffect} from 'react';
import styled,{ThemeProvider} from 'styled-components';
import {theme,GlobalStyle} from '../styles'
import { usePathname } from 'next/navigation';
import Loader from '../components/loaders';
import Nav from '../components/nav';
import Social from '../components/social';
import Email from '../components/email';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {
   
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);
     // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
    return (
      <html lang="en">
        <head>
        <title>Sharifdev</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Sharif's portifolio" />
        <meta property="og:description" content="This is my portfolio website to showcase my work and some of my skills and contacts" />
        </head>
        <body >
          <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
          <StyledContent>
          <Nav isHome={true} />
          <Social isHome={true} />
          <Email isHome={true} />
          <div id="content">
            {children}</div>
            </StyledContent>)}
            </ThemeProvider>
            </body>
      </html>
    )
  }