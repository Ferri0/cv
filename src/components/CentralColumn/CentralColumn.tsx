import React from 'react';
import './CentralColumn.scss';

function CentralColumn() {
  return (
    <div className={'central-column'}>
      <div className="hexagon">
        <div className="hexTop" />
        <div className="hexBottom" />
      </div>
      <div className={'central-column__triangle'} />
      <div className={'central-column__block'} />
    </div>
  );
}

export default CentralColumn;
