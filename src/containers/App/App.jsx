// @flow
import React, { memo, useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import CSSModules from 'react-css-modules';
import type { Props } from './type';
import styles from './App.scss';
import constants from '../../constants';
import Forms from '../../components/Forms';

const {
  header, footer, aboutMe, app, navbar, experiences, educations, projects,
} = constants;

const {
  Navbar, Header, Footer, AboutMe, Experiences, Educations, Projects,
} = Forms;

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
            hamburgerIconUrl={navbar.hamburgerIconUrl}
            closeIconUrl={navbar.closeIconUrl}
            logoUrl={app.logoUrl}
            {...props}
          />
          <Header
            name={header.NAME}
            description={header.DESCRIPTION}
            btnTxt={header.BUTTON_TEXT}
            avatarUrl={header.avatarUrl}
            socialNetworks={app.socialNetworks}
          />
          <AboutMe
            title={aboutMe.TITLE}
            greeting={aboutMe.GREETING}
            summary={aboutMe.SUMMARY}
            basicInfo={aboutMe.basicInfo}
            skills={aboutMe.skills}
          />
          <Experiences
            title={experiences.TITLE}
            timeline={experiences.timeline}
          />
          <Projects
            title={projects.TITLE}
            items={projects.items}
          />
          <Educations
            title={educations.TITLE}
            timeline={educations.timeline}
          />
          <Footer
            slogan={footer.SLOGAN}
            copyright={footer.COPYRIGHT}
            socialNetworks={app.socialNetworks}
            logoUrl={app.logoUrl}
          />
        </>
      )}
    </>
  );
};

export default memo<Props>(CSSModules(App, styles));
