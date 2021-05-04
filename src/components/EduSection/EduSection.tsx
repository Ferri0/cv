import React from 'react';
import './EduSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as eduSection from '../../data/eduSection.json';
import SectionTitle from '../SectionTitle';

function EduSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'education'}>
      <SectionTitle titleText={eduSection.eduSectionTitle[lang]} />
      {eduSection.eduSectionText[lang].map((eduBlockData) => {
        return <div>{eduBlockData.institution}</div>;
      })}
    </section>
  );
}

export default EduSection;
