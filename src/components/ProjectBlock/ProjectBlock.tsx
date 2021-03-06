import React from 'react';
import './ProjectBlock.scss';

type projectDataType = {
  data: {
    project: string;
    linkText: string;
    url: string;
    description: string;
  };
  theme: string;
};

function ProjectBlock({data, theme}: projectDataType) {
  return (
    <div key={data.project} className={'project-block'}>
      <div
        className={`project-block__project-title project-block__project-title--${theme}`}>
        {data.project}
      </div>
      <a
        href={data.url}
        target={'_blank'}
        className={`project-block__link project-block__link--${theme}`}
        rel="noreferrer">
        {data.linkText}
      </a>
      <div
        className={`project-block__description project-block__description--${theme}`}>
        {data.description}
      </div>
    </div>
  );
}

export default ProjectBlock;
