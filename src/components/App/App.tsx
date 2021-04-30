import React from 'react';
import './App.scss';
import CentralColumn from '../CentralColumn';
import SideColumn from '../SideColumn';

function App() {
  return (
    <div className={'app'}>
      <SideColumn textAlign={'right'} />
      <CentralColumn />
      <SideColumn textAlign={'left'} />
    </div>
  );
}

export default App;
