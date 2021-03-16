import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper'
import Navbar from './navbar'

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <Link to='/' aria-label='home'>
          <StyledLogo>JD.</StyledLogo>
        </Link>
        <Navbar />
      </StyledContentWrapper>
    </StyledHeader>
  );
}

export default Header;