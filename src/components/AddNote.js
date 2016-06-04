import React from 'react';
import {FormGroup,FormControl,ControlLabel,Button,Grid,Row,Col} from 'react-bootstrap';


class AddNote extends React.Component {

  addNewNote(e){

    alert('Hello');

  }
  render(){
    return(
      <div>
      <Grid>
      <Row>
      <Col md={8}>
        <h3>Compose Note</h3>
         <form>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
              <FormControl
              type="text"
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Text</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Message" />
          </FormGroup>
          <FormGroup>
          <Button bsStyle="success" onClick={this.addNewNote}>Post</Button>
          </FormGroup>
         </form>
         </Col>
         </Row>
         </Grid>
      </div>
    );
  }
}

export default AddNote;
