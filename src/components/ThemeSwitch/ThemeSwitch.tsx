import React from 'react';
import './ThemeSwitch.scss';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {switchThemeAction} from '../../store/themeReducer';

function ThemeSwitch() {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  return (
    <div className="container">
      <label
        id="switch"
        className="switch"
        onChange={() => dispatch(switchThemeAction())}>
        <input type="checkbox" id="slider" defaultChecked={theme === 'light'} />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default ThemeSwitch;
