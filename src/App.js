import React, { Component } from 'react';
import Header from './Header';
import Sidemenu from './Sidemenu';

class App extends Component {
  render() {
    return (
      <div>
        <div className="br-logo"><a href="true"><span>[</span>bracket <i>plus</i><span>]</span></a></div>,
        <Header/>,
        <Sidemenu/>
      </div>
    );
  }
}

export default App;
