/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'request';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './styles.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    console.log('componentDidMount');

    request({
      method: 'get',
      url: 'http://35.162.241.129:3000/api/v1/room',
    }, function (error, response, body) {
      console.log('error:', error);
      const data = JSON.parse(body);
      console.log('data:', typeof data, data);

      this.setState({
        data: data
      })
    }.bind(this));

    // fetch('http://35.162.241.129:3000/api/v1/room', {
    //   method: 'get',
    // })
    // .then(function checkStatus(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return response
    //   } else {
    //     var error = new Error(response.statusText)
    //     error.response = response
    //     throw error
    //   }
    // })
    // .then(res => res.json())
    // .then(function(data) {
    //   console.log('request succeeded with JSON response', data)
    //   this.setState({ data: data });
    // }.bind(this))
    // .catch(function(error) {
    //   console.log('request failed', error)
    // });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');

    return (
      <div>
        <Navbar title="Hotela" />

        <div className="rooms app-pages app-section">
          <div className="container">

            {(this.state.data.length === 0) ? (
              <span>Loading...</span>
            ) : (
              <div className="row">
                {this.state.data.map(function(item, index) {
                  return (
                    <div className="col s6" key={index}>
                      <div className="entry">
                        <img src={"http://35.162.241.129:3000/uploads/" + item.coverImage.filename} alt="" />
                        <div className="content">
                          <h5>
                            <Link to={'/room/' + item._id}>{item.title}</Link>
                            </h5>
                          <p>Lorem ipsum dolor sit amet . . .</p>
                          <h6><span>{item.price}</span> / Night</h6>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="pagination">
              <ul>
                <li><a href="">First</a></li>
                <li className="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">Last</a></li>
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
