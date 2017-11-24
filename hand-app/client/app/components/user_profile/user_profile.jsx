import React, { Component } from 'react';
import { Grid, Row, Col, Button, Image, ButtonToolbar, Panel } from 'react-bootstrap';
import DateOfBirthField from './dob_field';
import FieldGroup from './field_group';
import SelectField from './select_field';
import UserpicField from './userpic_field';


class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      userpic: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      region: '',
      country: '',
      postalCode: '',
      phone: '',
      email: '',
      password: ''
    };

    // this.handleUserProfile = this.handleUserProfile.bind(this);
    // this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    // this.handleMiddleNameChanged = this.handleMiddleNameChanged.bind(this);
    // this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
    // this.handleDateOfBirthChanged = this.handleDateOfBirthChanged.bind(this);
    // this.handleUserpicChanged = this.handleUserpicChanged.bind(this);
    // this.handleAddressLine1Changed = this.handleAddressLine1Changed.bind(this);
    // this.handleAddressLine2Changed = this.handleAddressLine2Changed.bind(this);
    // this.handleCityChanged = this.handleCityChanged.bind(this);
    // this.handleRegionChanged = this.handleRegionChanged.bind(this);
    // this.handleCountryChanged = this.handleCountryChanged.bind(this);
    // this.handlePostalCodeChanged = this.handlePostalCodeChanged.bind(this);
    // this.handlePhoneChanged = this.handlePhoneChanged.bind(this);

    // this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
  }

  // handleUserProfile(event) {
  //   event.preventDefault();
  //   const {
  //     firstName,
  //     middleName,
  //     lastName,
  //     dateOfBirth,
  //     userpic,
  //     addressLine1,
  //     addressLine2,
  //     city,
  //     region,
  //     country,
  //     postalCode,
  //     phone,
  //   } = this.state;

  //   const API_URL = 'http://localhost:8000/api/v1';
  //   const API_HEADERS = { 'Content-Type': 'application/json' };
  //   fetch(`${API_URL}/users`, {
  //     method: 'POST',
  //     headers: API_HEADERS,
  //     body: JSON.stringify({  })
  //   })
  //     .then(response => response.json())
  //     .then(responseData => console.log(responseData))
  //     .catch(error => console.log(error));
  // }


  // handleEmailChanged(event) {
  //   this.setState({ email: event.target.value });
  // }


  // handlePasswordChanged(event) {
  //   this.setState({ password: event.target.value });
  // }

  render() {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      userpic,
      addressLine1,
      addressLine2,
      city,
      region,
      country,
      postalCode,
      phone,
      email,
      password
    } = this.state;

    return (
      <div>
        <br />
        <Panel width={800}>
          <form>
            <Grid>
              <Row>
                <Col sm={12} md={3} lg={3}>
                  <FieldGroup type="text" label="First Name" value={firstName} width={300} important />
                  <FieldGroup type="text" label="Middle Name" value={middleName} />
                  <FieldGroup type="text" label="Last Name" value={lastName} />
                  <DateOfBirthField dateOfBirth={dateOfBirth} />
                  <FieldGroup type="text" label="Phone Number" value={phone} />
                  <FieldGroup type="email" label="Email" value={email} />
                  <FieldGroup type="password" label="Password" value={password} />
                </Col>

                <Col sm={12} md={5} lg={5}>
                  <FieldGroup type="text" label="Address Line 1" value={addressLine1} />
                  <FieldGroup type="text" label="Address Line 2 (optional)" value={addressLine2} />
                  <FieldGroup type="text" label="City" value={city} />
                  <FieldGroup type="text" label="State / Region / Province" value={region} />
                  <SelectField label="Country" value={country} placeholder="Select your country" />
                  <FieldGroup type="text" label="Postal Code" value={postalCode} />
                </Col>

                <Col sm={12} md={2} lg={2}>
                  <Image src="img/male_user_01.jpg" width={200} circle responsive />
                  <UserpicField value={userpic} />
                </Col>

              </Row>
              <Row>
                <Col sm={12}>
                  <ButtonToolbar>
                    <Button className="btn btn-warning" id="edit">
                      Edit
                    </Button>
                    <Button type="submit" className="btn btn-primary" id="save">
                      Save
                    </Button>
                    <Button className="btn btn-default" id="cancel">
                      Cancel
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Grid>
          </form>
        </Panel>
      </div>
    );
  }
}

export default UserProfile;
