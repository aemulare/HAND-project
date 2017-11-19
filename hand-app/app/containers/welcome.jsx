import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomeHeader from '../components/welcome_header';
import Map from '../components/map';
import About from '../components/about';
import News from '../components/news';
import Contact from '../components/contact';
import '../assets/styles/welcome.css';

const routes = [
  {
    id: 'map',
    path: '/map',
    exact: true,
    content: () => <Map />
  },
  {
    id: 'about',
    path: '/about',
    content: () => <About />
  },
  {
    id: 'news',
    path: '/news',
    content: () => <News />
  },
  {
    id: 'contact',
    path: '/contact',
    content: () => <Contact />
  }
];


class Welcome extends Component {
  render() {
    return (
      <div>
        <header>
          <WelcomeHeader />
        </header>
        <Grid id="content">
          <Row>
            <Col xs={12} className="center-block">
              {routes.map(route => (
                <Route
                  key={route.id}
                  path={route.path}
                  exact={route.exact}
                  component={route.content}
                />
            ))}
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
