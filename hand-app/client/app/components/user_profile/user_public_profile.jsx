import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MapMarkerIcon from 'react-icons/lib/fa/map-marker';
import MegaphoneIcon from 'react-icons/lib/fa/bullhorn';
import LifeBouyIcon from 'react-icons/lib/fa/life-bouy';
import CheckMarkIcon from 'react-icons/lib/fa/check-circle-o';
import Userpic from '../shared/userpic';


class PublicUserProfile extends Component {
  constructor() {
    super();
    this.state = {
      userpic: 'img/male_user_01.jpg',
      fullName: 'John Doe',
      shortAddress: 'Princeton, NJ, United States'
    };
  }

  render() {
    const {
      userpic,
      fullName,
      shortAddress,
    } = this.state;

    const divStyle = {
      border: '1px solid lightgrey'
    };

    return (
      <div>
        <Grid>
          <Row>
            <Col sm={4} style={divStyle}>
              <div>
                <h3>Profile Details</h3>
                <Userpic src={userpic} width={200} />
                <h4><strong>{fullName}</strong></h4>
                <h6><MapMarkerIcon /> {shortAddress}</h6>
                <MegaphoneIcon size={30} /><LifeBouyIcon size={30} /><CheckMarkIcon size={35} />
              </div>
            </Col>
            <Col sm={6} style={divStyle}>
              <div>
                <h3>Helped To</h3>
                <Grid>
                  <Row>
                    <Col sm={1}>
                      <time>11/23/2017</time>
                    </Col>
                    <Col sm={5}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu est metus. Sed posuere felis nisi, varius auctor turpis eleifend non.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={1}>
                      <time>11/25/2017</time>
                    </Col>
                    <Col sm={5}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu est metus. Sed posuere felis nisi, varius auctor turpis eleifend non.
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PublicUserProfile;
