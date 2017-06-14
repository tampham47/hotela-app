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
        <Navbar title="Home" />

        <div className="slider-slick app-pages">
          <div className="slider-entry">

            <img src="img/slider1.jpg" alt="" />
            <div className="overlay"></div>
            <div className="caption">
              <div className="container">
                <h2>Hotel and Resort</h2>
                <p>Places to stay good</p>
                <button className="button">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-book">
          <div className="container">
            <div className="form-book-entry">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <select>
                <option value="" disabled selected="">Room Types</option>
                <option value="1">Standard Room</option>
                <option value="2">Double Room</option>
                <option value="3">Family Room</option>
                <option value="3">Suite Room</option>
              </select>
              <div className="row">
                <div className="col s6">
                  <input type="text" placeholder="Arrival Date" className="datepicker" />
                </div>
                <div className="col s6">
                  <input type="text" placeholder="Departure Date" className="datepicker" />
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <select>
                    <option value="" disabled selected="">Adult</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
                <div className="col s6">
                  <select>
                    <option value="" disabled selected="">Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
              </div>
              <button className="button">Book Now</button>
            </div>
          </div>
        </div>

        <div className="features app-bg-dark app-section">
          <div className="container">
            <div className="app-title">
              <i className="fa fa-align-center"></i>
              <div className="line"></div>
              <h4>FEATURES</h4>
            </div>
            <div className="row">
              <div className="col s6">
                <div className="entry">
                  <i className="fa fa-wifi"></i>
                  <h5>Free Wifi</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col s6">
                <div className="entry">
                  <i className="fa fa-television"></i>
                  <h5>Television</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </div>
            <div className="row row-last">
              <div className="col s6">
                <div className="entry">
                  <i className="fa fa-cutlery"></i>
                  <h5>Restaurant</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col s6">
                <div className="entry">
                  <i className="fa fa-bath"></i>
                  <h5>Swimming</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rooms app-section">
          <div className="container">
            <div className="app-title">
              <i className="fa fa-align-center"></i>
              <div className="line"></div>
              <h4>BEST ROOMS</h4>
            </div>
            <div className="row trash-mb">
              <div className="col s6">
                <div className="entry">
                  <img src="img/room6.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Beautiful Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="entry">
                  <img src="img/room3.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Luxury Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="room-promote app-section">
          <div className="container">
            <h4>BEAUTIFUL & LUXURY ROOM</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maxime quod eos</p>
            <button className="button">Book Now</button>
          </div>
        </div>

        <div className="rooms app-section">
          <div className="container">
            <div className="app-title">
              <i className="fa fa-align-center"></i>
              <div className="line"></div>
              <h4>ROOMS</h4>
            </div>
            <div className="row">
              <div className="col s6">
                <div className="entry">
                  <img src="img/room1.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Beautiful Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="entry">
                  <img src="img/room2.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Luxury Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <div className="entry">
                  <img src="img/room3.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Beautiful Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
              <div className="col s6">
                <div className="entry">
                  <img src="img/room4.jpg" alt="" />
                  <div className="content">
                    <h5><a href="">Luxury Rooms</a></h5>
                    <p>Lorem ipsum dolor sit amet . . .</p>
                    <h6><span>$190</span> / Night</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-room">
              <button className="button">View More</button>
            </div>
          </div>
        </div>

        <div className="testimonial app-section app-bg-dark">
          <div className="container">
            <div className="app-title">
              <i className="fa fa-quote-left"></i>
            </div>
            <div id="testimonial" className="owl-carousel owl-theme">
              <div className="item">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore, numquam assumenda nihil totam sunt, ipsum nemo distinctio ipsa voluptates magni enim? Totam, distinctio iure similique consequuntur quae neque nesciunt.</p>
                <img src="img/testimonial1.png" alt="" />
                <h6>Mario Doe</h6>
                <strong>Web Developer</strong>
              </div>
              <div className="item">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore, numquam assumenda nihil totam sunt, ipsum nemo distinctio ipsa voluptates magni enim? Totam, distinctio iure similique consequuntur quae neque nesciunt.</p>
                <img src="img/testimonial2.png" alt="" />
                <h6>Mario Doe</h6>
                <strong>Web Developer</strong>
              </div>
              <div className="item">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore, numquam assumenda nihil totam sunt, ipsum nemo distinctio ipsa voluptates magni enim? Totam, distinctio iure similique consequuntur quae neque nesciunt.</p>
                <img src="img/testimonial3.png" alt="" />
                <h6>Mario Doe</h6>
                <strong>Web Developer</strong>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
