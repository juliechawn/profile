import React from 'react';
import './Trex.css';

import Header from './components/Header';

import Text from './components/Text';

class Trex extends React.Component {

  render() {
    return (
      <div className="app" id="app">     
          <Header />
          <Text />
      </div>    
    );
  }
}

export default Trex;

