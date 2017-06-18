/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftMenu from '../components/LeftMenu';


class MenuPage extends Component {

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

        <LeftMenu />

        <Footer />
      </div>
    );
  }
}

export default MenuPage;
