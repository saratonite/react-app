import React from 'react';
import Note from './Note';

class Notes extends React.Component {

  constructor(){
    super();
  }

  renderNotes(){
    console.log(this.props);
    return this.props.items.map(function(item){
      return(<Note key={item.key} data={item}></Note>);
    });


  }

  render(){

    return(

      <div>
        <h4>Recent Notes </h4>
        {this.renderNotes()}
      </div>
    );
  }

}

export default Notes;
