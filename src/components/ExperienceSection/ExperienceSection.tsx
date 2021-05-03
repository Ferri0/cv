import React from 'react';
import './ExperienceSection.scss';
import SectionTitle from '../SectionTitle';
import * as landingTextData from '../../data/landingText.json';
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
      <SectionTitle titleText={landingTextData.sectionTitle.experience[lang]} />
      {landingTextData.experienceSection[lang].map((experienceBlockData) => {
        return (
          <ExperienceBlock
            key={experienceBlockData.company}
            data={experienceBlockData}
          />
        );
      })}
    </section>
  );
}

export default ExperienceSection;
