import React from 'react';
import './App.scss';
import CentralColumn from '../CentralColumn';
import SideColumn from '../SideColumn';
import SectionTitle from '../SectionTitle';
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
      <div style={{position: 'absolute', top: '0', fontSize: 15}}>
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

      <SideColumn textAlign={'right'}>
        <ExperienceSection />
        <SkillSection column={'left'} />
      </SideColumn>
      <CentralColumn />
      <SideColumn textAlign={'left'}>
        <ExperienceSection />
        <SkillSection column={'right'} />
      </SideColumn>
    </div>
  );
}

export default App;
