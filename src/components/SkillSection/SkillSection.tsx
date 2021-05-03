import React from 'react';
import './SkillSection.scss';
import SectionTitle from '../SectionTitle';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as skillSectionText from '../../data/skillSection.json';

type skillSectionProps = {
  column: string;
};

function SkillSection({column}: skillSectionProps) {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={`skills skills--${column}`}>
      <SectionTitle titleText={skillSectionText.left.skillSectionTitle[lang]} />
    </section>
  );
}

export default SkillSection;
