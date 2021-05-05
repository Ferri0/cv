import React from 'react';
import './EduBlock.scss';

type eduDataType = {
  data: {
    institution: string;
    period: string;
    certificate: string;
  };
};

function EduBlock({data}: eduDataType) {
  return (
    <div key={data.institution} className={'edu-block'}>
      <div className={'edu-block__institution'}>{data.institution}</div>
      <div className={'edu-block__period'}>{data.period}</div>
      <div className={'edu-block__certificate'}>{data.certificate}</div>
    </div>
  );
}

export default EduBlock;
