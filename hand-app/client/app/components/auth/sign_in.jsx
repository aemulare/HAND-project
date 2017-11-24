import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import NotificationContainer from 'react-notification-system';
import EmailField from './email_field';
import PasswordField from './password_field';
import Auth from '../../modules/auth';
import '../../assets/styles/auth.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.notifications = null;

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
  }

  componentDidMount() {
    this.notifications = this.notificationSystem;
  }


  handleSignIn(event) {
    event.preventDefault();
    const { email, password } = this.state;

    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json' };
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.post('signin', { email, password })
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data;
          Auth.login(token);
          this.props.history.push('/root');
        }
      })
      .catch((error) => {
        console.log(error);
        this.notifications.addNotification({
          title: 'Invalid email or password',
          level: 'error',
        });
      });
  }


  handleEmailChanged(event) {
    this.setState({ email: event.target.value });
  }


  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
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
              <form className="auth" autoComplete="off" onSubmit={this.handleSignIn}>
                <EmailField email={email} changeCallback={this.handleEmailChanged} />
                <PasswordField password={password} changeCallback={this.handlePasswordChanged} />

                <Button type="submit" className="btn btn-lg btn-primary center-block btn-auth" id="login">
                  Login
                </Button>

                <FormGroup>
                  <FormControl.Static className="text-center">
                    <a className="help-question">Forgot password?</a>
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
        <NotificationContainer ref={(c) => { this.notificationSystem = c; }} />
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired
};

export default SignIn;
