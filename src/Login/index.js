/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './styles.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.gotoHomePage = this.gotoHomePage.bind(this);
  }

  gotoHomePage() {
    this.props.history.push('home');
  }

  render() {
    return (
      <div>
        <Navbar title="Login" />

        <div className="login app-pages app-section">
          <div className="container">
            <div className="pages-title">
              <h3>Login</h3>
            </div>
            <form action="#">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <div><a href="" className="forgot">Forgot Password?</a></div>
              <div className="chebox">
                <input type="checkbox" id="checkbox" />
                  <label for="checkbox">Remember me</label>
              </div>
              <button className="button" onClick={this.gotoHomePage}>Login</button>

              <div className="create-account">Not Registered? <a href="">Create an account</a></div>
            </form>
            <div className="or">
              <h5>OR</h5>
              <button className="button facebook">Login with Facebook</button>
              <button className="button twitter">Login with Twitter</button>
              <button className="button google">Login with Google+</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
