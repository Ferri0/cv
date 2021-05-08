import React from 'react';
import './ThemeSwitch.scss';
import {useDispatch} from 'react-redux';
import {switchThemeAction} from '../../store/themeReducer';

function ThemeSwitch() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <label
        id="switch"
        className="switch"
        onChange={() => dispatch(switchThemeAction())}>
        <input type="checkbox" id="slider" />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default ThemeSwitch;
