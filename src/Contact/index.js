/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="home">
        <h2>CONTACT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iure, quidem impedit dolores, quis maiores quia illum illo porro similique natus, harum adipisci quo nobis sapiente soluta! Excepturi, recusandae, fuga.</p>
        <Link to="/">Index</Link>
      </div>
    );
  }
}

export default App;
