import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomeHeader from './welcome_header';
import Map from './map';
import About from './about';
import News from './news';
import Contact from './contact';
import '../assets/styles/welcome.css';

const Welcome = () => (
  <div>
    <header>
      <WelcomeHeader />
    </header>
    <Grid id="content">
      <Row>
        <Col xs={12} className="center-block">
          <Route exact path="/" component={Map} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/news" component={News} />
        </Col>
      </Row>
    </Grid>
    <footer className="text-center">
      footer
    </footer>
  </div>
);


export default Welcome;
