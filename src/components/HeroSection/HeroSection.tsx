import React from 'react';
import './HeroSection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';

function HeroSection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'hero-section'}>
      <div className={'hero-section__name'}>Yaroslav Abrasimov</div>
      <div className={'hero-section__position'}>
        Junior frontend web developer
      </div>
      <div className={'hero-section__intro'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </section>
  );
}

export default HeroSection;
