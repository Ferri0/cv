import React from 'react';
import './ExperienceBlock.scss';

type experienceDataType = {
  data: {
    company: string;
    position: string;
    period: string;
    description: string;
  };
  theme: string;
};

function ExperienceBlock({data, theme}: experienceDataType) {
  return (
    // @ts-ignore
    <div className={'experience-block'} xyz="fade right-100% delay-0">
      <div
        className={`xyz-in experience-block__company experience-block__company--${theme}`}>
        {data.company}
      </div>
      <div
        className={`xyz-in experience-block__position experience-block__position--${theme}`}>
        {data.position}
      </div>
      <div
        className={`xyz-in experience-block__period experience-block__period--${theme}`}>
        {data.period}
      </div>
      <div
        className={`xyz-in experience-block__description experience-block__description--${theme}`}>
        {data.description}
      </div>
    </div>
  );
}

export default ExperienceBlock;
