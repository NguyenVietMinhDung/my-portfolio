// @flow
import React, { memo } from 'react';
import type { AppProps } from './type';
import { navbarItems, socialNetworks } from './initialData';
import logoUrl from '../../assets/images/logo.png';
import hamburgerIconUrl from '../../assets/images/hamburger-icon.png';
import closeIconUrl from '../../assets/images/close-icon.png';
import avatarUrl from '../../assets/images/avatar.png';
import constants from '../../constants';
import Forms from '../../components/Forms';

const {
  Navbar,
  Header,
  AboutMe,
} = Forms;

const {
  header: {
    HEADER_NAME,
    HEADER_DESCRIPTION,
    HEADER_BUTTON_TEXT,
  },
  aboutMe: {
    ABOUT_ME_TITLE,
    ABOUT_ME_GREETING,
    ABOUT_ME_SUMMARY,
  },
} = constants;

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
      name={HEADER_NAME}
      description={HEADER_DESCRIPTION}
      btnTxt={HEADER_BUTTON_TEXT}
      socialNetworks={socialNetworks}
      avatarUrl={avatarUrl}
    />
    <AboutMe
      title={ABOUT_ME_TITLE}
      greeting={ABOUT_ME_GREETING}
      summary={ABOUT_ME_SUMMARY}
    />
  </>
);

export default memo(App);
