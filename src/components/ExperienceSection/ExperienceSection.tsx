import React from 'react';
import './ExperienceSection.scss';
import SectionTitle from '../SectionTitle';
import * as landingTextData from '../../data/landingText.json';
import {RootStateOrAny, useSelector} from 'react-redux';

function ExperienceSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <>
      <SectionTitle titleText={landingTextData.sectionTitle.experience[lang]} />
      <section className={'experience'} />;
    </>
  );
}

export default ExperienceSection;
