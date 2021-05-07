import React from 'react';
import './LangSwitch.scss';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {
  setEnLangAction,
  setRuLangAction,
  setUaLangAction,
} from '../../store/langReducer';

function LangSwitch() {
  const dispatch = useDispatch();
  // TODO
  // const theme = useSelector(
  //   (state: RootStateOrAny) => state.themeReducer.theme
  // );
  const lang: 'en' | 'ua' | 'ru' = useSelector(
    (state: RootStateOrAny) => state.langReducer.lang
  );

  return (
    <form id={'lang-switch'}>
      <label
        className={`en-btn-label en-btn-label--${
          lang === 'en' ? 'active' : 'inactive'
        }`}
        htmlFor={'en-btn'}
      />

      <input
        onChange={() => dispatch(setEnLangAction())}
        id={'en-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'en'}
      />
      <label
        className={`ru-btn-label ru-btn-label--${
          lang === 'ru' ? 'active' : 'inactive'
        }`}
        htmlFor={'ru-btn'}
      />
      <input
        onChange={() => dispatch(setRuLangAction())}
        id={'ru-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'ru'}
      />
      <label
        className={`ua-btn-label ua-btn-label--${
          lang === 'ua' ? 'active' : 'inactive'
        }`}
        htmlFor={'ua-btn'}
      />

      <input
        onChange={() => dispatch(setUaLangAction())}
        id={'ua-btn'}
        name={'lang-switch'}
        type="radio"
        checked={lang === 'ua'}
      />
    </form>
  );
}

export default LangSwitch;
