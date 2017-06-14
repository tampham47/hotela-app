
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer = function(props) {
  return (
    <div className="panel-control-right">
      <div id="slide-out-right" className="side-nav">
        <div className="row entry">
          <div className="col s4">
            <img src="img/cart1.jpg" alt="" />
          </div>
          <div className="col s6">
            <div className="desc">
              <h6>Luxury Room</h6>
              <div className="rating">
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className=""><i className="fa fa-star"></i></span>
              </div>
              <h6><span>$150.00</span></h6>
            </div>
          </div>
          <div className="col s2">
            <div className="action">
              <i className="fa fa-remove"></i>
            </div>
          </div>
        </div>
        <div className="row entry">
          <div className="col s4">
            <img src="img/cart2.jpg" alt="" />
          </div>
          <div className="col s6">
            <div className="desc">
              <h6>Beautiful Room</h6>
              <div className="rating">
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className=""><i className="fa fa-star"></i></span>
                <span className=""><i className="fa fa-star"></i></span>
              </div>
              <h6><span>$150.00</span></h6>
            </div>
          </div>
          <div className="col s2">
            <div className="action">
              <i className="fa fa-remove"></i>
            </div>
          </div>
        </div>
        <div className="row price">
          <div className="col s8">
            <h6>Total</h6>
          </div>
          <div className="col s4">
            <h6>$300.00</h6>
          </div>
        </div>
        <ul>
          <li>
            <button className="button">Book Now</button>
          </li>
          <li>
            <button className="button">View Cart</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
