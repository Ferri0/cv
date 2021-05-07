import React from 'react';
import './HobbySection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import testImage from '../../assets/IMG_2994_1000x1000.png';
import * as hobbyText from '../../data/hobbySection.json';

function HobbySection() {
  // TODO implement theme change
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  // TODO implement other languages
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'hobby-section'}>
      <div className={'hobby-section__title'}>
        {hobbyText.hobbySectionTitle[lang]}
      </div>
      <div className={'hobby-section__icons-block'}>
        <img src={testImage} alt="hobby 1" className={'hobby-section__icon'} />
        <img src={testImage} alt="hobby 2" className={'hobby-section__icon'} />
        <img src={testImage} alt="hobby 3" className={'hobby-section__icon'} />
        <img src={testImage} alt="hobby 4" className={'hobby-section__icon'} />
      </div>
    </section>
  );
}

export default HobbySection;
