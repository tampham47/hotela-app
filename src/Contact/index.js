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
        <Navbar title="Contact" />

        <div className="contact app-pages app-section">
          <div className="container">
            <div className="pages-title">
              <h3>Contact Us</h3>
            </div>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Telepon" />
              <input type="text" placeholder="Website" />
              <textarea cols="20" rows="10" placeholder="Your Message"></textarea>
              <button className="button">Submit</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
