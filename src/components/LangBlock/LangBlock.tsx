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
  theme: string;
};

function LangBlock({data, theme}: langDataType) {
  return (
    // @ts-ignore
    <div xyz="fade right-100% delay-0" className={'language-block'}>
      <div
        className={`xyz-in language-block__language language-block__language--${theme}`}>
        {data.language}
      </div>
      <div
        className={`xyz-in language-block__studying language-block__studying--${theme}`}>
        {data.studying}
      </div>
      <div
        className={`xyz-in language-block__level language-block__level--${theme}`}>
        {data.level}
      </div>
      {data.certificateText ? (
        <a
          className={`xyz-in language-block__certificate language-block__certificate--${theme}`}
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
