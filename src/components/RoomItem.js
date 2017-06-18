import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const RoomItem = function(props) {
  return (
    <div className="col s6">
      <div className="entry">
        <img src={"http://35.162.241.129:3000/uploads/" + props.coverImage.filename} alt="" />
        <div className="content">
          <h5>
            <Link to={'/room/' + props._id}>{props.title}</Link>
            </h5>
          <p>Lorem ipsum dolor sit amet . . .</p>
          <h6><span>{props.price}</span> / Night</h6>
        </div>
      </div>
    </div>
  )
}

export default RoomItem;
