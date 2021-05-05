import React from 'react';
import './EduBlock.scss';

type eduDataType = {
  data: {
    institution: string;
    period: string;
    certificateText: string;
    certificateUrl: string;
  };
};

function EduBlock({data}: eduDataType) {
  return (
    <div key={data.institution} className={'edu-block'}>
      <div className={'edu-block__institution'}>{data.institution}</div>
      <div className={'edu-block__period'}>{data.period}</div>
      <a
        className={'edu-block__certificate'}
        href={data.certificateUrl}
        target={'_blank'}
        rel={'noreferrer'}>
        {data.certificateText}
      </a>
    </div>
  );
}

export default EduBlock;
