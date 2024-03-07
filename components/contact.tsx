// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import { InlineWidget } from "react-calendly";
import styled from 'styled-components';
import { config } from '../config/config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
const {srConfig, email}=config
const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(()=>{
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    script .setAttribute('async',true)
    head.appendChild(script);
  },[])

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">Contact</h2>

      <h2 className="title">Have an idea</h2>

      <p>
        Let's talk
      </p>

<InlineWidget url="https://calendly.com/hdidiersharif/book-a-call?hide_event_type_details=1&hide_gdpr_banner=1"  styles={{
  height: '500px',
  marginTop:'5px'
}}/>    
<div>
</div>
      
    </StyledContactSection>
  );
};

export default Contact;
