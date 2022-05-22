import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import { Background } from './background';
import { headerHeight } from './styleguide/breakpoints'

const StyledHeader = styled.header`
  position:relative;
  height: ${headerHeight};
`

export const Header = () =>
  (
    <StyledHeader>
      <Background imageUrl="https://storage.cloud.google.com/kbs-nexwave.appspot.com/muhamad_widi_aryanto.png" />
      <ProfileImage imageUrl="https://storage.cloud.google.com/kbs-nexwave.appspot.com/muhamad_widi_aryanto.png" />
    </StyledHeader>
  )
