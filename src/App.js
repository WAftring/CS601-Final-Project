import React from 'react';
import './App.css';

import View from './components/View'
import { isMobile } from 'react-device-detect';


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
