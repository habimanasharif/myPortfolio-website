'use client'
import React,{useEffect} from "react"
import styled from "styled-components";
import dynamic from "next/dynamic";
import Hero from "../components/hero";
import ReactGA from 'react-ga4';
import RecentBlogs from "../components/recentBlogs";
const About = dynamic(() => import('../components/About'), {
  ssr: false,
})
const Jobs = dynamic(() => import('../components/jobs'), {
  ssr: false,
})
const Featured = dynamic(() => import('../components/feature'), {
  ssr: false,
})
const Projects = dynamic(() => import('../components/projects'), {
  ssr: false,
})

const Contact = dynamic(() => import('../components/contact'), {
  ssr: false,
})


const StyledMainContainer = styled.main`
  counter-reset: section;
`;
export default function Page() {
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize('G-CPDJ8LHF0G');
  }, []);
  

  ReactGA.send({
    hitType:"pageview",
    page:window.location.pathname}
  )
    return<StyledMainContainer className="fillHeight">
     <Hero/>
     <About/>
     <Jobs/> 
     <Featured/>
     <Projects/>
     <RecentBlogs/>
      <Contact/>
    </StyledMainContainer>
      
  }