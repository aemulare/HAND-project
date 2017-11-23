import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from 'react-icons/lib/fa/user';
import LockIcon from 'react-icons/lib/fa/lock';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../assets/styles/auth.css';

const SignIn = () => (
  <div className="container-fluid">
    <Grid>
      <Row>
        <Col xs={12} id="hand-brand" className="center-block">
          <img src="img/hand-logo.png" alt="hand-logo" id="hand-logo" className="img-responsive center-block" />
          <h1 className="sign-intro">Welcome to Project
          <br /> Help After Natural Disasters
          </h1>
        </Col>
        <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
          <form className="auth" name="sign_in" action="/signin" method="post" autoComplete="off">
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

            <Button type="submit" className="btn btn-lg btn-primary center-block btn-auth" id="login">
              Login
            </Button>

            <FormGroup>
              <FormControl.Static className="text-center">
                <a href="#" className="help-question">Forgot password?</a>
              </FormControl.Static>
            </FormGroup>

            <FormGroup>
              <FormControl.Static className="text-center">
                Do not have an account?
              </FormControl.Static>
            </FormGroup>

            <Link to="/signup" className="btn btn-lg btn-default center-block btn-auth" id="register">
              Create an account
            </Link>
          </form>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default SignIn;
