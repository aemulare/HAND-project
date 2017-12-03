import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import NotificationContainer from 'react-notification-system';
import EmailField from './email_field';
import PasswordField from './password_field';
import AuthLogo from './auth_logo';
import Auth from '../../modules/auth';
import css from './styles/auth.scss';

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
          Auth.login(res.data);
          this.props.history.push('/root/home');
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
            <Col xs={12} className="center-block">
              <AuthLogo />
              <h1 className={css.sign_intro}>Welcome to Project
              <br /> Help After Natural Disasters
              </h1>

            </Col>
            <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
              <form className={css.auth} autoComplete="off" onSubmit={this.handleSignIn}>
                <EmailField email={email} changeCallback={this.handleEmailChanged} />
                <PasswordField password={password} changeCallback={this.handlePasswordChanged} />

                <Button type="submit" className={`btn btn-lg btn-primary center-block ${css.btn_auth} ${css.center_block}`}>
                  Login
                </Button>

                <FormGroup>
                  <FormControl.Static>
                    <a className={css.help_question}>Forgot password?</a>
                  </FormControl.Static>
                </FormGroup>

                <FormGroup>
                  <FormControl.Static className={css.help_question}>
                    Do not have an account?
                  </FormControl.Static>
                </FormGroup>

                <Link to="/signup" className={`btn btn-lg btn-default center-block ${css.btn_auth} ${css.center_block}`}>
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
