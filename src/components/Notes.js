import React from 'react';
import Note from './Note';

class Notes extends React.Component {

  getInitialState(){

    return({
      notes:[
        {title:'Some title ',body:'Some dummy content ...'},
        {title:'Another title ',body:'Another dummy content ...'}
      ]

    });

  }

  render(){

    return(

      <div>
        <h4>Recent Notes </h4>
        <Note></Note>
      </div>
    );
  }

}

export default Notes;
