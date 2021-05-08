import React from 'react';
import './SkillSection.scss';
import SectionTitle from '../SectionTitle';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as skillSection from '../../data/skillSection.json';
import SkillBlock from '../SkillBlock';

type skillSectionProps = {
  column: 'left' | 'right';
};

// eslint-disable - disabled in case of bug with prettier/prettier rules bug
function SkillSection({column}: skillSectionProps) {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );
  // syntax skillSection[column].skillSectionTitle[lang] dont worked for me here
  // cant understand why. That's why used ternary operator and boilerplate
  return column === 'left' ? (
    <section className={`skills skills--left`}>
      <SectionTitle
        titleText={skillSection.left.skillSectionTitle[lang]}
        theme={theme}
      />
      {skillSection.left.skillSectionSkills.map((skillInfo) => {
        return (
          <SkillBlock
            data={skillInfo}
            align={column}
            key={skillInfo.skill}
            theme={theme}
          />
        );
      })}
    </section>
  ) : (
    <section className={`skills skills--right`}>
      <SectionTitle
        titleText={skillSection.right.skillSectionTitle[lang]}
        theme={theme}
      />
      {skillSection.right.skillSectionSkills.map((skillInfo) => {
        return (
          <SkillBlock
            data={skillInfo}
            align={column}
            key={skillInfo.skill}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default SkillSection;
