import React, { Component } from 'react';
import { Link } from 'react-router';

import AddNote from './AddNote';
import Notes from './Notes';



class IndexComponent extends Component {

  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AddNote></AddNote>
        <Notes></Notes>
      </div>
    );
  }
}

export default IndexComponent;
