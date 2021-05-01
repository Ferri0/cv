import React from 'react';
import './App.scss';
import CentralColumn from '../CentralColumn';
import SideColumn from '../SideColumn';
import SectionTitle from '../SectionTitle';
import * as experienceData from '../../data/experience.json';

function App() {
  return (
    <div className={'app'}>
      <SideColumn textAlign={'right'}>
        <SectionTitle titleText={'Section 1'} />
      </SideColumn>
      <CentralColumn />
      <SideColumn textAlign={'left'}>
        <SectionTitle titleText={'Section 2'} />
      </SideColumn>
    </div>
  );
}

export default App;
