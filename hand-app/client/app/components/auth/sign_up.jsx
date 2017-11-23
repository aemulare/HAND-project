import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from 'react-icons/lib/fa/user';
import LockIcon from 'react-icons/lib/fa/lock';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
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
    console.log(this.state);
    event.preventDefault();
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
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <UserIcon />
                    </InputGroup.Addon>
                    <FormControl
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={this.handleEmailChanged}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <LockIcon />
                    </InputGroup.Addon>
                    <FormControl
                      type="password"
                      placeholder="password"
                      minLength="6"
                      maxLength="12"
                      value={password}
                      onChange={this.handlePasswordChanged}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <LockIcon />
                    </InputGroup.Addon>
                    <FormControl
                      type="password"
                      placeholder="confirm password"
                      minLength="6"
                      maxLength="12"
                      value={passwordConfirmation}
                      onChange={this.handlePasswordConfirmationChanged}
                    />
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
  }
}

export default SignUp;
