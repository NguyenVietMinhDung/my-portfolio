// @flow
import React, { memo, useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import CSSModules from 'react-css-modules';
import type { AppProps } from './type';
import styles from './App.scss';
import logoUrl from '../../assets/images/logo.png';
import hamburgerIconUrl from '../../assets/images/hamburger-icon.png';
import closeIconUrl from '../../assets/images/close-icon.png';
import avatarUrl from '../../assets/images/avatar.png';
import constants from '../../constants';
import {
  navbarItems, basicInfo, socialNetworks, skills,
} from './initialData';
import Forms from '../../components/Forms';

const { Navbar, Header, AboutMe } = Forms;

const { header, aboutMe, app } = constants;

const useLoadingStatus = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => setLoadingStatus(false));
  return loadingStatus;
};

const App = (props: AppProps) => {
  const loadingStatus = useLoadingStatus();
  return (
    <>
      <div styleName="loader">
        <HashLoader
          size={app.LOADER_SIZE}
          sizeUnit={app.LOADER_SIZE_UNIT}
          color={app.LOADER_COLOR}
          loading={loadingStatus}
        />
      </div>
      {!loadingStatus && (
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
            basicInfo={basicInfo}
            skills={skills}
          />
        </>
      )}
    </>
  );
};

export default memo<AppProps>(CSSModules(App, styles));
