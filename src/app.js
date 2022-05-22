import React from 'react'
import { Header } from './components/header';
import { UserProfile } from './components/body';
import { injectGlobal } from 'styled-components';
import { pageTitle } from './profile.json';
import { mobileScreenSize } from './src/styleguide/breakpoints';

injectGlobal`
  :root {
    --header-height: 300px;

    @media screen and (max-width: ${mobileScreenSize}) {
      --header-height: 200px;
    }
  }

  body, html, #app {
  font-family: 'Montserrat';
  padding:0;
  margin:0;
  height: 100%;
}
`
document.title = pageTitle || 'Muhamad Widi Aryanto';

export const App = () => (

  <React.Fragment>
    <Header />
    <UserProfile />
  </React.Fragment>
)
