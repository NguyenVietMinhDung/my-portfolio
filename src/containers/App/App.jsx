// @flow
import React, { memo } from 'react';
import type { AppProps } from './type';
import { navbarItems, socialNetworks, skills } from './initialData';
import logoUrl from '../../assets/images/logo.png';
import hamburgerIconUrl from '../../assets/images/hamburger-icon.png';
import closeIconUrl from '../../assets/images/close-icon.png';
import avatarUrl from '../../assets/images/avatar.png';
import constants from '../../constants';
import Forms from '../../components/Forms';

const { Navbar, Header, AboutMe } = Forms;

const { header, aboutMe } = constants;

const App = (props: AppProps) => (
  <>
    <Navbar
      navbarItems={navbarItems}
      logoUrl={logoUrl}
      hamburgerIconUrl={hamburgerIconUrl}
      closeIconUrl={closeIconUrl}
      {...props}
    />
    <Header
      name={header.NAME}
      description={header.DESCRIPTION}
      btnTxt={header.BUTTON_TEXT}
      socialNetworks={socialNetworks}
      avatarUrl={avatarUrl}
    />
    <AboutMe
      title={aboutMe.TITLE}
      greeting={aboutMe.GREETING}
      summary={aboutMe.SUMMARY}
      skills={skills}
    />
  </>
);

export default memo(App);
