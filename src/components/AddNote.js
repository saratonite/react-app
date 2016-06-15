import React from 'react';
import {FormGroup,FormControl,ControlLabel,Button,Grid,Row,Col} from 'react-bootstrap';


class AddNote extends React.Component {

  constructor(){
    super();
    this.state = {
      noteText:"",
      noteBody:""
    }
  }

  addNewNote(e){



    this.props.onAddNote(this.state.noteText,this.state.noteBody);
    this.setState({noteText:'',noteBody:""});

  }

  handleChangeText(e){

    this.state.noteText = e.target.value;

  }
  handleChangeBody(e){

    this.state.noteBody = e.target.value;

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
              onChange={this.handleChangeText.bind(this)}
              value={this.noteText}


            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Text</ControlLabel>
            <FormControl componentClass="textarea"   placeholder="Message" onChange={this.handleChangeBody.bind(this)} />
          </FormGroup>
          <FormGroup>
          <Button bsStyle="success" onClick={this.addNewNote.bind(this)}>Post</Button>
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
