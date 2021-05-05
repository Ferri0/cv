import React from 'react';
import './ProjectBlock.scss';

type projectDataType = {
  data: {
    project: string;
    link: string;
    description: string;
  };
};

function ProjectBlock({data}: projectDataType) {
  return (
    <div key={data.project} className={'project-block'}>
      <div className={'project-block__project-title'}>{data.project}</div>
      <div className={'project-block__link'}>{data.link}</div>
      <div className={'project-block__description'}>{data.description}</div>
    </div>
  );
}

export default ProjectBlock;
