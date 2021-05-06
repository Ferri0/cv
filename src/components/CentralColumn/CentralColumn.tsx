import React, {ReactNode} from 'react';
import './CentralColumn.scss';

function CentralColumn({children}: {children: ReactNode}) {
  return (
    <div className={'central-column'}>
      <div className="hexagon">
        <div className="hexTop" />
        <div className="hexBottom" />
      </div>
      <div className={'central-column__triangle'} />
      <div className={'central-column__block'}>{children}</div>
    </div>
  );
}

export default CentralColumn;
