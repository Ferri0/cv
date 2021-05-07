import React from 'react';
import './HobbySection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import hobby1 from '../../assets/icons/hobbies/game-controller.svg';
import hobby2 from '../../assets/icons/hobbies/book.svg';
import hobby3 from '../../assets/icons/hobbies/headphones.svg';
import hobby4 from '../../assets/icons/hobbies/steering-wheel.svg';
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
        <img src={hobby1} alt="hobby 1" className={'hobby-section__icon'} />
        <img src={hobby2} alt="hobby 2" className={'hobby-section__icon'} />
        <img src={hobby3} alt="hobby 3" className={'hobby-section__icon'} />
        <img src={hobby4} alt="hobby 4" className={'hobby-section__icon'} />
      </div>
    </section>
  );
}

export default HobbySection;
