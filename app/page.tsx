'use client'
import React from "react"
import styled from "styled-components";
import dynamic from "next/dynamic";
import Hero from "../components/hero";
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
    return<StyledMainContainer className="fillHeight">
     <Hero/>
     <About/>
     <Jobs/> 
     <Featured/>
     <Projects/>
      <Contact/>
    </StyledMainContainer>
      
  }