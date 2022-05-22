import React from 'react';
import styled from 'styled-components';
import { grayLight } from './styleguide/colors';
import { DesignCredits } from './design-credits';
import { MadeWith } from './made-with';

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: .5rem 0.5rem;
  display: flex;
  color: ${grayLight};
  justify-content: space-between;
`

export const Footer = () => (
  <StyledFooter>
    <DesignCredits
      content="Muhamad Widi Aryanto"
      arialLabel="Get in touch with Muhamad Widi Aryanto"
      link="https://gitlab.com/widiaryanto">
    </DesignCredits>
    <MadeWith description="Made with React and"/>
  </StyledFooter>);
