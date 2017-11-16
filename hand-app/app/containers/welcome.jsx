import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomeHeader from '../components/welcome_header';
// import '../assets/styles/auth.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <header>
          <WelcomeHeader />
        </header>
        <Grid>
          <Row>
            <Col xs={12} className="center-block">
              <img src="img/world-map.svg" alt="world map" />
            </Col>
          </Row>
        </Grid>
        <footer className="text-center">
          footer
        </footer>
      </div>
    );
  }
}

export default Welcome;
