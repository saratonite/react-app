import React, { Component } from 'react';
import { Link } from 'react-router';


class IndexComponent extends Component {

  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <h2>Hello World </h2>
      <Link to="main">User</Link>
      </div>
    );
  }
}

export default IndexComponent;
