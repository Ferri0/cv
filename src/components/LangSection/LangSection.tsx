import React from 'react';
import './LangSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import SectionTitle from '../SectionTitle';
import * as langSection from '../../data/langSection.json';
import LangBlock from '../LangBlock';

function LangSection() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'languages'}>
      <SectionTitle
        titleText={langSection.langSectionTitle[lang]}
        theme={theme}
      />
      {langSection.langSectionText[lang].map((langBlockInfo) => {
        return (
          <LangBlock
            key={langBlockInfo.language}
            data={langBlockInfo}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default LangSection;
