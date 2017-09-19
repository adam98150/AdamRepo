import React, { Component } from 'react';

var arr = [];

class Content extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <div className="row" id="1">
        <div className="col-lg-6 container">
        <i className="fa fa-times" aria-hidden="true" id="1"></i>
        <h3>Example One</h3>
        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
        </div>
      </div>
      <div className="row" id="2">
        <div className="col-lg-6 container">
        <i className="fa fa-times" aria-hidden="true" id="2"></i>
        <h3>Example Two</h3>
        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
        </div>
      </div>
      </div>
    )
  }
}

export default Content;
