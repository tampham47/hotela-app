/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import request from 'request';

import './styles.css';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('RomDetail', props.match.params.id);
    console.log('RomDetail', props);

    this.state = {
      form: {},
      roomDetail: null,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPostComment = this.onPostComment.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    request({
      method: 'get',
      url: 'http://35.162.241.129:3000/api/v1/room/' + id,
    }, function (error, response, body) {
      const data = JSON.parse(body);
      console.log('Roomdetail error:', error);
      console.log('Roomdetail data:', typeof data, data);

      this.setState({
        roomDetail: data
      })
    }.bind(this));
  }

  onPostComment(e) {
    e.preventDefault();
    alert('Post Comment Clicked !' + JSON.stringify(this.state.form));
  }

  onNameChange(e) {
    console.log('onNameChange', e.target.value);
    this.setState({
      form: {
        name: e.target.value
      }
    });
  }

  render() {
    const room = this.state.roomDetail;

    return (
      <div>
        <Navbar title="Room Detail" />

        {!room && (
          <span>Loading...</span>
        )}

        {room && (
          <div className="details app-pages app-section">
            <div className="container">
              <img src={"http://35.162.241.129:3000/uploads/" + room.coverImage.filename} alt="" />
              <h3>{room.title}</h3>
              <div className="rating">
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className="active"><i className="fa fa-star"></i></span>
                <span className=""><i className="fa fa-star"></i></span>
              </div>

              <div dangerouslySetInnerHTML={{__html: room.content}}></div>

              <ul className="button-ul">
                <li><button className="button">Book Now</button></li>
                <li><button className="button">Add to Card</button></li>
              </ul>
              <div className="comment">
                <h6>2 Comment</h6>
                <div className="content">
                  <img src="img/comment1.png" alt="" />
                  <div className="entry">
                    <strong><a href="">John Doe</a></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                  </div>
                </div>
                <div className="content">
                  <img src="img/comment2.png" alt="" />
                  <div className="entry">
                    <strong><a href="">John Doe</a></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                  </div>
                </div>
              </div>
              <div className="post-comment">
                <h6>Post Comments</h6>
                <div className="content">
                  <form action="#">
                    <input type="text" placeholder="Name 2"
                      value={this.state.form.name}
                      onChange={this.onNameChange} />
                    <input type="email" placeholder="Email"
                      value={this.state.form.email} />
                    <input type="text" placeholder="Website"
                      value={this.state.form.website} />
                    <textarea cols="20" rows="10" placeholder="Comment"
                      value={this.state.form.comment}></textarea>
                    <button className="button" onClick={this.onPostComment}>Post Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer>
          <div className="container">
            <h6>Find & follow us</h6>
            <ul className="icon-social">
              <li className="facebook"><a href=""><i className="fa fa-facebook"></i></a></li>
              <li className="twitter"><a href=""><i className="fa fa-twitter"></i></a></li>
              <li className="google"><a href=""><i className="fa fa-google"></i></a></li>
              <li className="instagram"><a href=""><i className="fa fa-instagram"></i></a></li>
              <li className="rss"><a href=""><i className="fa fa-rss"></i></a></li>
            </ul>
            <div className="tel-fax-mail">
              <ul>
                <li><span>Tel:</span> 900000o02</li>
                <li><span>Fax:</span> 0400000o98</li>
                <li><span>Email:</span> info@youremail.com</li>
              </ul>
            </div>
            <div className="ft-bottom">
              <span>Copyright © 2017 All Rights Reserved </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
