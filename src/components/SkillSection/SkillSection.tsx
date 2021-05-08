import React from 'react';
import './SkillSection.scss';
import SectionTitle from '../SectionTitle';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as skillSection from '../../data/skillSection.json';
import SkillBlock from '../SkillBlock';

type skillSectionProps = {
  column: 'left' | 'right';
};

function SkillSection({column}: skillSectionProps) {
  // TODO implement theme change
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  // TODO implement other languages
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
          <SkillBlock data={skillInfo} align={column} key={skillInfo.skill} />
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
          <SkillBlock data={skillInfo} align={column} key={skillInfo.skill} />
        );
      })}
    </section>
  );
}

export default SkillSection;
