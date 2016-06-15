import React from 'react';
import {Media} from 'react-bootstrap';


export default class Note extends React.Component {

  render(){
    return(

      <div>
          <Media>
         <Media.Left>
            <img width={64} height={64} src="/images/yeoman.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.data.text}</Media.Heading>
            <p>{this.props.data.body}</p>
          </Media.Body>
        </Media>
      </div>


    );
  }
}
