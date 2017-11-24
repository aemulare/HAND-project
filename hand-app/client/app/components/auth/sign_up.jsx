import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import 'whatwg-fetch';
import EmailField from './email_field';
import PasswordField from './password_field';
import '../../assets/styles/auth.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmationChanged = this.handlePasswordConfirmationChanged.bind(this);
  }


  handleSignUp(event) {
    event.preventDefault();
    const { email, password } = this.state;

    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json' };
    fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(responseData => console.log(responseData))
      .catch(error => console.log(error));
  }


  handleEmailChanged(event) {
    this.setState({ email: event.target.value });
  }


  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }


  handlePasswordConfirmationChanged(event) {
    this.setState({ passwordConfirmation: event.target.value });
  }


  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
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
              <form className="auth" autoComplete="off" onSubmit={this.handleSignUp}>
                <EmailField email={email} changeCallback={this.handleEmailChanged} />
                <PasswordField password={password} changeCallback={this.handlePasswordChanged} />
                <PasswordField password={passwordConfirmation} changeCallback={this.handlePasswordConfirmationChanged} />

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
  }
}

export default SignUp;
