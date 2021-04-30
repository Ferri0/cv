import React from 'react';
import './SideColumn.scss';

type sideColumnProps = {
  textAlign: string;
  children: any;
};

function SideColumn({textAlign, children}: sideColumnProps) {
  return <div className={'side-column'}>{children}</div>;
}

export default SideColumn;
