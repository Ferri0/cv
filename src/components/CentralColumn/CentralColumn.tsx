import React, {ReactNode} from 'react';
import './CentralColumn.scss';
import {RootStateOrAny, useSelector} from 'react-redux';

function CentralColumn({children}: {children: ReactNode}) {
  const theme = useSelector(
    (state: RootStateOrAny) => state.themeReducer.theme
  );
  return (
    <div className={'central-column'}>
      <div className="hexagon">
        <div className="hexTop" />
        <div className="hexBottom" />
      </div>
      <div
        className={`central-column__triangle central-column__triangle--${theme}`}
      />
      <div className={`central-column__block central-column__block--${theme}`}>
        {children}
      </div>
    </div>
  );
}

export default CentralColumn;
