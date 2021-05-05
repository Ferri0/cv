import React from 'react';
import './ExperienceBlock.scss';

type experienceDataType = {
  data: {
    company: string;
    position: string;
    period: string;
    description: string;
  };
};

function ExperienceBlock({data}: experienceDataType) {
  return (
    <div className={'experience-block'}>
      <div className={'experience-block__company'}>{data.company}</div>
      <div className={'experience-block__position'}>{data.position}</div>
      <div className={'experience-block__period'}>{data.period}</div>
      <div className={'experience-block__description'}>{data.description}</div>
    </div>
  );
}

export default ExperienceBlock;
