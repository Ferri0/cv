import React from 'react';
import './SkillBlock.scss';

type skillBlockProps = {
  data: {
    skill: string;
    level: string;
  };
  align: 'left' | 'right';
  theme: string;
};

function SkillBlock({data, align, theme}: skillBlockProps) {
  const levelPoints = [];
  const maxLevel = 6;
  const currentLevel = +data.level;

  for (let i = 1; i <= maxLevel; i += 1) {
    levelPoints.push(i <= currentLevel ? 'filled' : 'empty');
  }

  return (
    <div
      className={`skill-block skill-block--${align}-column skill-block--${theme}`}>
      <div>{data.skill}</div>
      <div className={' skill-block__points'}>
        {levelPoints.map((levelPoint, i) => {
          return (
            <div key={i} className={` point point--${levelPoint}-${theme}`} />
          );
        })}
      </div>
    </div>
  );
}

export default SkillBlock;
