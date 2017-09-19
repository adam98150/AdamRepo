import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return(
          <div className="jumbotron">
            <h3>Blog</h3>
            <p>Dummy dummy dummy dummy</p>
            <input type="button" className="btn btn-primary" value="Add Post" />
          </div>
    )
  }
}

export default Header;
