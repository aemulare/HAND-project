import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../assets/styles/auth.css';

class SignUp extends Component {
  render() {
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
            <div className="col-xs-12">
              <form className="auth" name="sign_up" action="/signup" method="post" autoComplete="off">

                <div className="row control-group">
                  <div className="input-group col-xs-12 col-sm-4 col-sm-offset-4">
                    <span className="input-group-addon">
                      <i className="fa fa-user" />
                    </span>
                    <input type="text" className="form-control" name="email" id="email" placeholder="email" />
                    <span className="help-block text-danger" />
                  </div>
                </div>

                <div className="row control-group">
                  <div className="input-group col-xs-12 col-sm-4 col-sm-offset-4">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input type="text" className="form-control" name="password" maxLength="12" id="password" placeholder="password" />
                    <span className="help-block text-danger" />
                  </div>
                </div>

                <div className="row control-group">
                  <div className="input-group col-xs-12 col-sm-4 col-sm-offset-4">
                    <span className="input-group-addon">
                      <i className="fa fa-lock" />
                    </span>
                    <input type="text" className="form-control" name="password_confirm" maxLength="12" id="password-confirm" placeholder="confirm password" />
                    <span className="help-block text-danger" />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-xs-12">
                    <button className="btn btn-lg btn-primary center-block btn-auth" type="submit" id="register">Register</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <p className="help-question">Already have an account?</p>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-xs-12">
                    <a href="/signin" className="btn btn-lg btn-default center-block btn-auth">Login</a>
                  </div>
                </div>
              </form>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
