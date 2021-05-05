import React from 'react';
import './LangBlock.scss';

type langDataType = {
  data: {
    language: string;
    level: string;
  };
};

function LangBlock({data}: langDataType) {
  return (
    <div className={'language-block'}>
      <div className={'language-block__language'}>{data.language}</div>
      <div className={'language-block__level'}>{data.level}</div>
    </div>
  );
}

export default LangBlock;
