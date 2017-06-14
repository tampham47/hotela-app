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
        <Navbar title="Faq" />

        <div className="faq app-pages app-section">
          <div className="container">
            <div className="pages-title">
              <h3>Faq</h3>
            </div>
            <div className="entry">
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header faq-collapsible">
                    What is eCommerce Group? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    How to sell your product? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    How to get money with us? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    Can I buy using paypal? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    What the offers your get? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    How to get discount up 50%? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    How buy using bank transfer? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header faq-collapsible">
                    How to reset password? <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
