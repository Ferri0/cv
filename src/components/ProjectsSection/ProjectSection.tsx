import React from 'react';
import './ProjectSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import SectionTitle from '../SectionTitle';
import * as projectsSection from '../../data/projectsSection.json';

function ProjectSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'projects'}>
      <SectionTitle titleText={projectsSection.projectsSectionTitle[lang]} />
      {projectsSection.projectsSectionText[lang].map((projectBlockData) => {
        return (
          <div key={projectBlockData.project}>{projectBlockData.project}</div>
        );
      })}
    </section>
  );
}

export default ProjectSection;
