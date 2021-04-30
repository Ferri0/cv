import React from 'react';
import './SideColumn.scss';

type sideColumnProps = {
  textAlign: string;
};

function SideColumn({textAlign}: sideColumnProps) {
  return <div className={'side-column'} />;
}

export default SideColumn;
