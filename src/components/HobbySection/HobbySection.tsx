import React from 'react';
import './HobbySection.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import hobby1_dark from '../../assets/icons/hobbies/game-controller.svg';
import hobby1_light from '../../assets/icons/hobbies/game-controller_light.svg';
import hobby2_dark from '../../assets/icons/hobbies/book.svg';
import hobby2_light from '../../assets/icons/hobbies/book_light.svg';
import hobby3_dark from '../../assets/icons/hobbies/headphones.svg';
import hobby3_light from '../../assets/icons/hobbies/headphones_light.svg';
import hobby4_dark from '../../assets/icons/hobbies/steering-wheel.svg';
import hobby4_light from '../../assets/icons/hobbies/steering-wheel_light.svg';
import * as hobbyText from '../../data/hobbySection.json';

function HobbySection() {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <section className={'xyz-in hobby-section'}>
      <div className={`hobby-section__title hobby-section__title--${theme}`}>
        {hobbyText.hobbySectionTitle[lang]}
      </div>
      <div
        className={`hobby-section__icons-block hobby-section__icons-block--${theme}`}>
        <img
          src={theme === 'dark' ? hobby1_dark : hobby1_light}
          alt="hobby 1"
          className={'hobby-section__icon'}
        />
        <img
          src={theme === 'dark' ? hobby2_dark : hobby2_light}
          alt="hobby 2"
          className={'hobby-section__icon'}
        />
        <img
          src={theme === 'dark' ? hobby3_dark : hobby3_light}
          alt="hobby 3"
          className={'hobby-section__icon'}
        />
        <img
          src={theme === 'dark' ? hobby4_dark : hobby4_light}
          alt="hobby 4"
          className={'hobby-section__icon'}
        />
      </div>
    </section>
  );
}

export default HobbySection;
