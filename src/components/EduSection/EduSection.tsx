import React from 'react';
import './EduSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as eduSection from '../../data/eduSection.json';
import SectionTitle from '../SectionTitle';
import EduBlock from '../EduBlock';

function EduSection() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'education'}>
      <SectionTitle
        titleText={eduSection.eduSectionTitle[lang]}
        theme={theme}
      />
      {eduSection.eduSectionText[lang].map((eduBlockData) => {
        return (
          <EduBlock
            key={eduBlockData.institution}
            data={eduBlockData}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default EduSection;
