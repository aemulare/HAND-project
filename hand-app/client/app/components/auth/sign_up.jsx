import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import EmailField from './email_field';
import PasswordField from './password_field';
import AuthLogo from './auth_logo';
import Auth from '../../modules/auth';
import css from './styles/auth.scss';

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
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.post('signup', { email, password })
      .then((res) => {
        if (res.status === 201) {
          Auth.login(res.data);
          this.props.history.push('/root/home');
        }
      })

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
            <Col xs={12} className="center-block">
              <AuthLogo />
              <h1 className={css.sign_intro}>Register in Project
              <br /> Help After Natural Disasters
              </h1>
            </Col>

            <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
              <form className={css.auth} autoComplete="off" onSubmit={this.handleSignUp}>
                <EmailField email={email} changeCallback={this.handleEmailChanged} />
                <PasswordField password={password} changeCallback={this.handlePasswordChanged} />
                <PasswordField password={passwordConfirmation} changeCallback={this.handlePasswordConfirmationChanged} />

                <Button type="submit" className={`btn btn-lg btn-primary center-block ${css.btn_auth}`} >
                  Register
                </Button>

                <FormGroup>
                  <FormControl.Static className={css.help_question}>
                    Already have an account?
                  </FormControl.Static>
                </FormGroup>

                <Link to="/signin" className={`btn btn-lg btn-default center-block ${css.btn_auth}`}>
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

SignUp.propTypes = {
  history: PropTypes.object.isRequired
};

export default SignUp;
