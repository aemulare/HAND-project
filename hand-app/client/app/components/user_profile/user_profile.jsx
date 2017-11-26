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
      dateOfBirth: '',
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

    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleUsStateSelect = this.handleUsStateSelect.bind(this);
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


  handleCountrySelect(event) {
    this.setState({ selectedCountry: event.target.value });
  }

  handleUsStateSelect(event) {
    this.setState({ selectedUsState: event.target.value });
  }


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
                  <SelectField
                    label="Country"
                    selectedValue={selectedCountry}
                    placeholder="Select your country"
                    options={countries}
                    valueGetter={option => option.alpha2code}
                    onSelect={this.handleCountrySelect}
                  />
                  <FieldGroup type="text" label="Address Line 1" value={addressLine1} />
                  <FieldGroup type="text" label="Address Line 2 (optional)" value={addressLine2} />
                  <FieldGroup type="text" label="City" value={city} />
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
                   : <FieldGroup type="text" label="Region / Province" value={region} />
                  }
                  <FieldGroup type="text" label="Postal Code" value={postalCode} />
                </Col>

                <Col sm={12} md={2} lg={2}>
                  <Userpic src={UserPicture} width={200} />
                  <FilePicker value={userpic} />
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
