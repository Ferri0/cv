import React, {ReactNode} from 'react';
import './SideColumn.scss';

type sideColumnProps = {
  textAlign: string;
  children: ReactNode;
};

function SideColumn({textAlign, children}: sideColumnProps) {
  return (
    <div className={`side-column side-column--align-${textAlign}`}>
      {children}
    </div>
  );
}

export default SideColumn;
