import React from 'react';
import './HeroSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import * as heroSection from '../../data/heroSection.json';

function HeroSection() {
  // TODO implement theme change
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'hero-section'}>
      <div className={`hero-section__name hero-section__name--${theme}`}>
        {heroSection.heroSectionTitle[lang]}
      </div>
      <div
        className={`hero-section__position hero-section__position--${theme}`}>
        {heroSection.heroSectionSubtitle[lang]}
      </div>
      <div className={`hero-section__intro hero-section__intro--${theme}`}>
        {heroSection.heroSectionText[lang]}
      </div>
    </section>
  );
}

export default HeroSection;
