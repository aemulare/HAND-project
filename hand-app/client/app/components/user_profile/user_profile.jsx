import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar, Panel } from 'react-bootstrap';
import axios from 'axios';
import DateOfBirthField from './dob_field';
import FieldGroup from '../shared/field_group';
import SelectField from '../shared/select_field';
import Userpic from '../shared/userpic';
import FilePicker from '../shared/filepicker';
import Auth from '../../modules/auth';
import UserPicture from '../../assets/images/male_user_01.jpg';


class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      selectedCountry: 'us',
      usStates: [],
      selectedUsState: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '1999-01-01',
      userpic: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      region: '',
      postalCode: '',
      phone: '',
      email: '',
      password: ''
    };

    this.handleUserProfile = this.handleUserProfile.bind(this);

    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleUsStateSelect = this.handleUsStateSelect.bind(this);

    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleMiddleNameChanged = this.handleMiddleNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
    this.handleDateOfBirthChanged = this.handleDateOfBirthChanged.bind(this);
    this.handleUserpicChanged = this.handleUserpicChanged.bind(this);
    this.handleAddressLine1Changed = this.handleAddressLine1Changed.bind(this);
    this.handleAddressLine2Changed = this.handleAddressLine2Changed.bind(this);
    this.handleCityChanged = this.handleCityChanged.bind(this);
    this.handleRegionChanged = this.handleRegionChanged.bind(this);
    this.handlePostalCodeChanged = this.handlePostalCodeChanged.bind(this);
    this.handlePhoneChanged = this.handlePhoneChanged.bind(this);
  }


  componentDidMount() {
    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json', Authorization: Auth.token() };
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.get('countries', { })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ countries: res.data });
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    client.get('states', { })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ usStates: res.data });
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleUserProfile(event) {
    event.preventDefault();
    const {
      selectedCountry,
      selectedUsState,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      userpic,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      phone
    } = this.state;

    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json', Authorization: Auth.token() };
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.put('users/', {
      selectedCountry,
      selectedUsState,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      userpic,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      phone
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('User profile updated');
        }
      })

      .catch(error => console.log(error));
  }

  handleCountrySelect(event) {
    this.setState({ selectedCountry: event.target.value });
  }

  handleUsStateSelect(event) {
    this.setState({ selectedUsState: event.target.value });
  }

  handleFirstNameChanged(event) {
    this.setState({ firstName: event.target.value });
  }

  handleMiddleNameChanged(event) {
    this.setState({ middleName: event.target.value });
  }

  handleLastNameChanged(event) {
    this.setState({ lastName: event.target.value });
  }

  handleDateOfBirthChanged(event) {
    this.setState({ dateOfBirth: event.target.value });
  }

  handleUserpicChanged(event) {
    this.setState({ userpic: event.target.value });
  }

  handleAddressLine1Changed(event) {
    this.setState({ addressLine1: event.target.value });
  }

  handleAddressLine2Changed(event) {
    this.setState({ addressLine2: event.target.value });
  }

  handleCityChanged(event) {
    this.setState({ city: event.target.value });
  }

  handleRegionChanged(event) {
    this.setState({ region: event.target.value });
  }

  handlePostalCodeChanged(event) {
    this.setState({ postalCode: event.target.value });
  }

  handlePhoneChanged(event) {
    this.setState({ phone: event.target.value });
  }

  // handleUserInput(event) {
  //   const { name } = event.target.name;
  //   const { value } = event.target.value;
  //   console.log(name);
  //   this.setState({ [name]: value });
  //   () => { this.validateField(name, value); });
  // }

  render() {
    const {
      countries,
      selectedCountry,
      usStates,
      selectedUsState,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      userpic,
      addressLine1,
      addressLine2,
      city,
      region,
      postalCode,
      phone,
      email,
      password
    } = this.state;


    return (
      <div>
        <br />
        <Panel width={800}>
          <form onSubmit={this.handleUserProfile}>
            <Grid>
              <Row>
                <Col sm={12} md={3} lg={3}>
                  <FieldGroup type="text" label="First Name" value={firstName} name="firstName" changeCallback={this.handleFirstNameChanged} width={300} important />
                  <FieldGroup type="text" label="Middle Name" value={middleName} name={middleName} changeCallback={this.handleMiddleNameChanged} />
                  <FieldGroup type="text" label="Last Name" value={lastName} name={lastName} changeCallback={this.handleLastNameChanged} />
                  <DateOfBirthField dateOfBirth={dateOfBirth} name={dateOfBirth} changeCallback={this.handleDateOfBirthChanged} />
                  <FieldGroup type="text" label="Phone Number" value={phone} name={phone} changeCallback={this.handlePhoneChanged} />
                  <FieldGroup type="email" label="Email" value={email} />
                  <FieldGroup type="password" label="Password" value={password} />
                </Col>

                <Col sm={12} md={5} lg={5}>
                  <SelectField
                    label="Country"
                    selectedValue={selectedCountry}
                    placeholder="Select your country"
                    options={countries}
                    valueGetter={option => option.alpha2code}
                    onSelect={this.handleCountrySelect}
                  />
                  <FieldGroup type="text" label="Address Line 1" value={addressLine1} name={addressLine1} changeCallback={this.handleAddressLine1Changed} />
                  <FieldGroup type="text" label="Address Line 2 (optional)" value={addressLine2} name={addressLine2} changeCallback={this.handleAddressLine2Changed} />
                  <FieldGroup type="text" label="City" value={city} name={city} changeCallback={this.handleCityChanged} />
                  {
                    selectedCountry === 'us' ?
                      <SelectField
                        label="State"
                        selectedValue={selectedUsState}
                        placeholder="Select your country"
                        options={usStates}
                        valueGetter={option => option.code}
                        onSelect={this.handleUsStateSelect}
                      />
                   : <FieldGroup type="text" label="Region / Province" value={region} name={region} changeCallback={this.handleRegionChanged} />
                  }
                  <FieldGroup type="text" label="Postal Code" value={postalCode} name={postalCode} changeCallback={this.handlePostalCodeChanged} />
                </Col>

                <Col sm={12} md={2} lg={2}>
                  <Userpic src={UserPicture} width={200} />
                  <FilePicker value={userpic} changeCallback={this.handleUserpicChanged} />
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
