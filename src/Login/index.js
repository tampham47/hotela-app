/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="container">
            <div className="panel-control-left">
              <a href="#" data-activates="slide-out-left" className="sidenav-control-left"><i className="fa fa-bars"></i></a>
            </div>
            <div className="site-title">
              <a href="index.html" className="logo"><h1>HOTELA</h1></a>
            </div>
            <div className="panel-control-right">
              <a href="#" data-activates="slide-out-right" className="sidenav-control-right"><i className="fa fa-shopping-bag"></i><span>2</span></a>
            </div>
          </div>
        </div>

        <div className="panel-control-left">
          <ul id="slide-out-left" className="side-nav collapsible"  data-collapsible="accordion">
            <li>
              <a href="index.html"><i className="fa fa-home"></i>Home</a>
            </li>
            <li>
              <div className="collapsible-header"><i className="fa fa-file-text-o"></i>Categories<span><i className="fa fa-chevron-right"></i></span></div>
              <div className="collapsible-body">
                <ul className="categories-in collapsible"  data-collapsible="accordion">
                  <li><a href="categories.html">Luxury Room</a></li>
                  <li><a href="categories.html">Beautiful Room</a></li>
                  <li><a href="categories.html">Suite Room</a></li>
                  <li><a href="categories.html">Family Room</a></li>
                  <li><a href="categories.html">Double Room</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="room.html"><i className="fa fa-th-large"></i>Room List</a>
            </li>
            <li>
              <a href="details.html"><i className="fa fa-list"></i>Room Details</a>
            </li>
            <li>
              <a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i>Shopping Cart</a>
            </li>
            <li>
              <a href="book-now.html"><i className="fa fa-send"></i>Book Now</a>
            </li>
            <li>
              <a href="gallery.html"><i className="fa fa-image"></i>Gallery</a>
            </li>
            <li>
              <div className="collapsible-header"><i className="fa fa-rss"></i>Blog <span><i className="fa fa-chevron-right"></i></span></div>
              <div className="collapsible-body">
                <ul className="side-nav-panel">
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="fa fa-file-powerpoint-o"></i>Pages <span><i className="fa fa-chevron-right"></i></span></div>
              <div className="collapsible-body">
                <ul className="side-nav-panel">
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="testimonial.html">Testimonial</a></li>
                  <li><a href="404.html">404 Page</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="contact.html"><i className="fa fa-envelope"></i>Contact Us</a>
            </li>
            <li>
              <a href="login.html"><i className="fa fa-sign-in"></i>Login</a>
            </li>
            <li>
              <a href="register.html"><i className="fa fa-user-plus"></i>Register</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
