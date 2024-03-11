// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { config} from '../config/config';
import sr from '../utils/sr';
import Image from 'next/image';
import { usePrefersReducedMotion } from '../hooks';
const {srConfig }=config

const StyledBlogSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  

  .blog-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;
const StyledBlog = styled.li`
position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }
  .single-blog {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .blog-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .blog-teaser {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  .tag-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
const RecentBlogs = () => {
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const singleBlog =()=>{
    return(
      <div className='single-blog'>

        
          <Image src="/images/blog1.png" width="150" height="150"/>
        <div>
        <h3 className="blog-title">
            <a href='' target="_blank" rel="noreferrer">
              My Blog
            </a>
          </h3>
          <div className="blog-teaser" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto nobis, ducimus nesciunt vitae accusamus. Esse, beatae et? Modi ad velit dignissimos iusto soluta pariatur temporibus in esse architecto. Nesciunt!
          </div>
          </div>

      </div>
    )
  }

    return (
        <StyledBlogSection>
          <h2 ref={revealTitle}>Blogs</h2>
          <ul className="blog-grid">
          <StyledBlog>
          {singleBlog()}
          </StyledBlog>
          <StyledBlog>
          {singleBlog()}
          </StyledBlog>
          </ul>
            
        </StyledBlogSection>
    );
}

export default RecentBlogs;
