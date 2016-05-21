import React from 'react';
import {Link} from 'react-router';
import {ListGroup,ListGroupItem} from 'react-bootstrap';

class Sidebar extends React.Component {

render(){
  return(

    <ListGroup>
    <ListGroupItem><Link to="/">Home</Link></ListGroupItem>
      <ListGroupItem><Link to="/main">Main</Link></ListGroupItem>
    </ListGroup>
  );
}

}

export default Sidebar;
