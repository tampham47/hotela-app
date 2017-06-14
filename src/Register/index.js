/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Register" />

        <div className="register app-pages app-section">
          <div className="container">
            <div className="pages-title">
              <h3>Register</h3>
            </div>
            <form action="#">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <button className="button">Register</button>
              <strong className="login-now">Your already registered? <a href="">Login now</a></strong>
            </form>
            <div className="or">
              <h5>OR</h5>
              <button className="button facebook">Register with Facebook</button>
              <button className="button twitter">Register with Twitter</button>
              <button className="button google">Register with Google+</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
