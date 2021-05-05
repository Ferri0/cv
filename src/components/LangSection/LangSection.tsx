import React from 'react';
import './LangSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import SectionTitle from '../SectionTitle';
import * as langSection from '../../data/langSection.json';
import LangBlock from '../LangBlock';

function LangSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'languages'}>
      <SectionTitle titleText={langSection.langSectionTitle[lang]} />
      {langSection.langSectionText[lang].map((langBlockInfo) => {
        return <LangBlock data={langBlockInfo} />;
      })}
    </section>
  );
}

export default LangSection;
