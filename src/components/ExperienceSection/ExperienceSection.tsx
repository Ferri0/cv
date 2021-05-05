import React from 'react';
import './ExperienceSection.scss';
import SectionTitle from '../SectionTitle';
import * as experienceSection from '../../data/experienceSection.json';
import {RootStateOrAny, useSelector} from 'react-redux';
import ExperienceBlock from '../ExperienceBlock';

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
    <section className={'experience'}>
      <SectionTitle
        titleText={experienceSection.experienceSectionTitle[lang]}
      />
      {experienceSection.experienceSectionText[lang].map(
        (experienceBlockData) => {
          return (
            <ExperienceBlock
              key={experienceBlockData.company}
              data={experienceBlockData}
            />
          );
        }
      )}
    </section>
  );
}

export default ExperienceSection;
