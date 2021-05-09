import React, {useEffect} from 'react';
import './LangSwitch.scss';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {
  setEnLangAction,
  setRuLangAction,
  setUaLangAction,
} from '../../store/langReducer';
import img1 from '../../assets/icons/lang/hexagon_empty.svg';
import img2 from '../../assets/icons/lang/hexagon_empty_white.svg';
import img3 from '../../assets/icons/lang/en_selected.svg';
import img4 from '../../assets/icons/lang/en.svg';
import img5 from '../../assets/icons/lang/ru_selected.svg';
import img6 from '../../assets/icons/lang/ru.svg';
import img7 from '../../assets/icons/lang/ua_selected.svg';
import img8 from '../../assets/icons/lang/ua.svg';
import img9 from '../../assets/icons/lang/light-theme/hexagon_empty.svg';
import img10 from '../../assets/icons/lang/light-theme/hexagon_empty_white.svg';
import img11 from '../../assets/icons/lang/light-theme/en_selected.svg';
import img12 from '../../assets/icons/lang/light-theme/en.svg';
import img13 from '../../assets/icons/lang/light-theme/ru_selected.svg';
import img14 from '../../assets/icons/lang/light-theme/ru.svg';
import img15 from '../../assets/icons/lang/light-theme/ua_selected.svg';
import img16 from '../../assets/icons/lang/light-theme/ua.svg';

function LangSwitch() {
  // preload images
  useEffect(() => {
    const preloadedImgs = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    ];
    preloadedImgs.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <form id={'lang-switch'}>
      <label
        className={`en-btn-label en-btn-label--${
          lang === 'en' ? 'active' : 'inactive'
        }-${theme}`}
        htmlFor={'en-btn'}
      />

      <input
        onChange={() => {
          dispatch(setEnLangAction());
        }}
        id={'en-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'en'}
      />
      <label
        className={`ru-btn-label ru-btn-label--${
          lang === 'ru' ? 'active' : 'inactive'
        }-${theme}`}
        htmlFor={'ru-btn'}
      />
      <input
        onChange={() => {
          dispatch(setRuLangAction());
        }}
        id={'ru-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'ru'}
      />
      <label
        className={`ua-btn-label ua-btn-label--${
          lang === 'ua' ? 'active' : 'inactive'
        }-${theme}`}
        htmlFor={'ua-btn'}
      />

      <input
        onChange={() => {
          dispatch(setUaLangAction());
        }}
        id={'ua-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'ua'}
      />
    </form>
  );
}

export default LangSwitch;
