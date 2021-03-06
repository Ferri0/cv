import React from 'react';
import './ProjectSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import SectionTitle from '../SectionTitle';
import * as projectsSection from '../../data/projectsSection.json';
import ProjectBlock from '../ProjectBlock';

function ProjectSection() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'projects'}>
      <SectionTitle
        theme={theme}
        titleText={projectsSection.projectsSectionTitle[lang]}
      />
      {projectsSection.projectsSectionText[lang].map((projectBlockInfo) => {
        return (
          <ProjectBlock
            key={projectBlockInfo.project}
            data={projectBlockInfo}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default ProjectSection;
