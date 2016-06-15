import React, { Component } from 'react';
import { Link } from 'react-router';

import AddNote from './AddNote';
import Notes from './Notes';



class IndexComponent extends Component {

  constructor() {
    super();
    this.state = {
      items:[{text:"Sample txt",body:"sample body","key":Date.now()},{text:"ss txt",body:"sample ss","key":Date.now()+2}]
    }
  }
  onAddNote(text,body){

    var items = this.state.items;

    items.push({text:text,body:body,key: Date.now()});

    this.setState({'items':items});

    alert("Hoorey");


  }

  render() {
    return (
      <div>
        <AddNote onAddNote={this.onAddNote.bind(this)} ></AddNote>
        <Notes items={this.state.items}></Notes>
      </div>
    );
  }
}

export default IndexComponent;
