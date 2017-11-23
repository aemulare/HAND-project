import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from 'react-icons/lib/fa/user';
import LockIcon from 'react-icons/lib/fa/lock';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../assets/styles/auth.css';

const SignUp = () => (
  <div className="container-fluid">
    <Grid>
      <Row>
        <Col xs={12} id="hand-brand" className="center-block">
          <img src="img/hand-logo.png" alt="hand-logo" id="hand-logo" className="img-responsive center-block" />
          <h1 className="sign-intro">Register in Project
              <br /> Help After Natural Disasters
          </h1>
        </Col>
        <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
          <form className="auth" name="sign_up" action="/signup" method="post" autoComplete="off">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <UserIcon />
                </InputGroup.Addon>
                <FormControl type="text" placeholder="email" id="email" name="email" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <LockIcon />
                </InputGroup.Addon>
                <FormControl type="password" placeholder="password" name="password" minLength="6" maxLength="12" id="password" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <LockIcon />
                </InputGroup.Addon>
                <FormControl type="password" placeholder="confirm password" name="password_confirm" minLength="6" maxLength="12" id="password-confirm" />
              </InputGroup>
            </FormGroup>

            <Button type="submit" className="btn btn-lg btn-primary center-block btn-auth" id="register">
                  Register
            </Button>

            <FormGroup>
              <FormControl.Static className="text-center">
                    Already have an account?
              </FormControl.Static>
            </FormGroup>

            <Link to="/signin" className="btn btn-lg btn-default center-block btn-auth" id="register">
                  Login
            </Link>
          </form>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default SignUp;
