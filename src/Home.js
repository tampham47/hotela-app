/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>HOME</h2>
        <Link to="/">Index</Link>
      </div>
    );
  }
}

export default App;
