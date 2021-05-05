import React from 'react';
import './LangBlock.scss';

type langDataType = {
  data: {
    language: string;
    studying: string;
    level: string;
    certificateText?: string;
    certificateUrl?: string;
  };
};

function LangBlock({data}: langDataType) {
  return (
    <div className={'language-block'}>
      <div className={'language-block__language'}>{data.language}</div>
      <div className={'language-block__studying'}>{data.studying}</div>
      <div className={'language-block__level'}>{data.level}</div>
      {data.certificateText ? (
        <a
          className={'language-block__certificate'}
          href={data.certificateUrl}
          target={'_blank'}
          rel={'noreferrer'}>
          {data.certificateText}
        </a>
      ) : null}
    </div>
  );
}

export default LangBlock;
