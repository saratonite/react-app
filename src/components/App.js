import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavigationMenu from './NavigationMenu';
import Sidebar from './Sidebar';

class AppComponent extends Component {

  componentWillMount() {
    this.lock = 'AUTH_KEY';
  }

  render() {
    return (
      <div >
        <Grid className="container-fluid ">
          <Row>
            <NavigationMenu/>
            <Col xs={12} md={3}>
                <Sidebar/>
            </Col>
            <Col xs={12} md={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppComponent;
