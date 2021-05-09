import React, {useEffect, useRef} from 'react';
import './App.scss';
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
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {
  setEnLangAction,
  setRuLangAction,
  setUaLangAction,
} from '../../store/langReducer';
import {switchThemeAction} from '../../store/themeReducer';
import img1 from '../../assets/cv_dark.png';
import img2 from '../../assets/cv_light.png';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  // preload bg imgs and set stored language
  useEffect(() => {
    new Image().src = img1;
    new Image().src = img2;
    const storedLang = window.localStorage.getItem('abrasimov-cv-lang');
    if (storedLang === 'en') {
      dispatch(setEnLangAction());
    } else if (storedLang === 'ru') {
      dispatch(setRuLangAction());
    } else {
      dispatch(setUaLangAction());
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('abrasimov-cv-lang', lang);
  }, [lang]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('abrasimov-cv-theme');
    if (storedTheme === 'light') {
      dispatch(switchThemeAction());
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('abrasimov-cv-theme', theme);
  }, [theme]);

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
