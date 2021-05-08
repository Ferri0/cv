import React, {useEffect, useRef} from 'react';
import './App.scss';
import '@animxyz/core';
import CentralColumn from '../CentralColumn';
import SideColumn from '../SideColumn';
import ExperienceSection from '../ExperienceSection';
import SkillSection from '../SkillSection';
import EduSection from '../EduSection';
import ProjectSection from '../ProjectsSection';
import LangSection from '../LangSection';
import HeroSection from '../HeroSection';
import PersonalInfo from '../PersonalInfo';
import HobbySection from '../HobbySection';
import ContactsSection from '../ContactsSection';
import LangSwitch from '../LangSwitch';
import ThemeSwitch from '../ThemeSwitch';
import {RootStateOrAny, useSelector} from 'react-redux';

function App() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );

  const root = useRef(document.getElementById('root'));

  useEffect(() => {
    if (theme === 'dark') {
      root.current!.classList.add('dark-theme');
      root.current!.classList.remove('light-theme');
    } else {
      root.current!.classList.add('light-theme');
      root.current!.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <div className={`app app--${theme}`}>
      <LangSwitch />
      <ThemeSwitch />
      <SideColumn textAlign={'right'}>
        <ExperienceSection />
        <LangSection />
        <SkillSection column={'left'} />
      </SideColumn>
      <CentralColumn>
        <HeroSection />
        <PersonalInfo />
        <HobbySection />
        <ContactsSection />
      </CentralColumn>
      <SideColumn textAlign={'left'}>
        <ProjectSection />
        <EduSection />
        <SkillSection column={'right'} />
      </SideColumn>
    </div>
  );
}

export default App;
