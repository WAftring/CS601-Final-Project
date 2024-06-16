import React from 'react';
import './App.css';

import View from './components/View'
import MobileView from './components/MobileView';
import { isMobile } from 'react-device-detect';
import Player from './components/Player';


function App() {
  return (
    <div className="App">
      {!isMobile ? (
        <View/>
      ) : (
        <div className='mobile'>
          This site has no support for mobile devices.
        </div>
      )}
    </div>
  );
}

export default App;
