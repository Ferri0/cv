import React from 'react';
import './ProjectBlock.scss';

type projectDataType = {
  data: {
    project: string;
    linkText: string;
    url: string;
    description: string;
  };
};

function ProjectBlock({data}: projectDataType) {
  return (
    <div key={data.project} className={'project-block'}>
      <div className={'project-block__project-title'}>{data.project}</div>
      <a
        href={data.url}
        target={'_blank'}
        className={'project-block__link'}
        rel="noreferrer">
        {data.linkText}
      </a>
      <div className={'project-block__description'}>{data.description}</div>
    </div>
  );
}

export default ProjectBlock;
