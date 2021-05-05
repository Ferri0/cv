import React from 'react';
import './SkillBlock.scss';

type skillBlockProps = {
  data: {
    skill: string;
    level: string;
  };
  align: 'left' | 'right';
};

function SkillBlock({data, align}: skillBlockProps) {
  const levelPoints = [];
  const maxLevel = 6;
  const currentLevel = +data.level;

  for (let i = 1; i <= maxLevel; i += 1) {
    levelPoints.push(i <= currentLevel ? 'filled' : 'empty');
  }

  return (
    <div className={`skill-block skill-block--${align}-column`}>
      <div>{data.skill}</div>
      <div className={'skill-block__points'}>
        {levelPoints.map((levelPoint, i) => {
          return <div key={i} className={`point point--${levelPoint}`} />;
        })}
      </div>
    </div>
  );
}

export default SkillBlock;
