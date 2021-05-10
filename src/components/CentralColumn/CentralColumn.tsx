import React, {ReactNode, useEffect} from 'react';
import './CentralColumn.scss';
import {RootStateOrAny, useSelector} from 'react-redux';
import img1 from '../../assets/IMG_2994_1000x1000.png';

function CentralColumn({children}: {children: ReactNode}) {
  // preload images
  useEffect(() => {
    new Image().src = img1;
  }, []);

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
