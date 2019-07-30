// @flow
import React, { memo, useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import CSSModules from 'react-css-modules';
import type { Props } from './type';
import styles from './App.scss';
import constants from '../../constants';
import Forms from '../../components/Forms';

const {
  header, aboutMe, app, navbar,
} = constants;

const { Navbar, Header, AboutMe } = Forms;

const useLoadingStatus = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => setLoadingStatus(false));
  return loadingStatus;
};

const App = (props: Props) => {
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
            items={navbar.items}
            logoUrl={navbar.logoUrl}
            hamburgerIconUrl={navbar.hamburgerIconUrl}
            closeIconUrl={navbar.closeIconUrl}
            {...props}
          />
          <Header
            name={header.NAME}
            description={header.DESCRIPTION}
            btnTxt={header.BUTTON_TEXT}
            socialNetworks={header.socialNetworks}
            avatarUrl={header.avatarUrl}
          />
          <AboutMe
            title={aboutMe.TITLE}
            greeting={aboutMe.GREETING}
            summary={aboutMe.SUMMARY}
            basicInfo={aboutMe.basicInfo}
            skills={aboutMe.skills}
          />
        </>
      )}
    </>
  );
};

export default memo<Props>(CSSModules(App, styles));
