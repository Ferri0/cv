import React from 'react';
import './App.scss';
import CentralColumn from '../CentralColumn';
import SideColumn from '../SideColumn';
import * as landingTextData from '../../data/landingText.json';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {switchThemeAction} from '../../store/themeReducer';
import {
  setEnLangAction,
  setRuLangAction,
  setUaLangAction,
} from '../../store/langReducer';
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

function App() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <div className={'app'}>
      <div style={{position: 'absolute', top: '0', right: '0', fontSize: 15}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '3px solid black',
            alignItems: 'center',
          }}>
          {theme}
          <button onClick={() => dispatch(switchThemeAction())}>
            Switch theme
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '3px solid black',
            alignItems: 'center',
          }}>
          {lang}
          <button onClick={() => dispatch(setEnLangAction())}>
            {landingTextData.switchLangBtn.en[lang]}
          </button>
          <button onClick={() => dispatch(setRuLangAction())}>
            {landingTextData.switchLangBtn.ru[lang]}
          </button>
          <button onClick={() => dispatch(setUaLangAction())}>
            {landingTextData.switchLangBtn.ua[lang]}
          </button>
        </div>
      </div>

      <LangSwitch />
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
