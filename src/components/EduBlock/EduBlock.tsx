import React from 'react';
import './EduBlock.scss';

type eduDataType = {
  data: {
    institution: string;
    period: string;
    certificateText: string;
    certificateUrl: string;
  };
  theme: string;
};

function EduBlock({data, theme}: eduDataType) {
  return (
    <div
      key={data.institution}
      className={'edu-block'}
      // @ts-ignore
      xyz="fade left-100% delay-0">
      <div
        className={`xyz-in edu-block__institution edu-block__institution--${theme}`}>
        {data.institution}
      </div>
      <div className={`xyz-in edu-block__period edu-block__period--${theme}`}>
        {data.period}
      </div>
      <a
        className={`xyz-in edu-block__certificate edu-block__certificate--${theme}`}
        href={data.certificateUrl}
        target={'_blank'}
        rel={'noreferrer'}>
        {data.certificateText}
      </a>
    </div>
  );
}

export default EduBlock;
