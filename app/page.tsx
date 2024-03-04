'use client'
import React from "react"
import styled from "styled-components";
import Hero from "../components/hero";
import About from "../components/About";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
export default function Page() {
    return <StyledMainContainer className="fillHeight">
     <Hero/>
     <About/>
    </StyledMainContainer>
      
  }