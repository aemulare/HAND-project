import React, { Component } from 'react';
import { Grid, Row, Col, Panel, ButtonToolbar, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../modules/auth';
import FieldGroup from '../shared/field_group';


class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: Auth.currentUserId(),
      title: '',
      description: '',
      location: '',
      resources: [
        {
          tagId: 1,
          quantity: 5
        }
      ]
    };

    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
    this.handleLocationChanged = this.handleLocationChanged.bind(this);
  }

  handleNewPost(event) {
    event.preventDefault();
    const {
      userId,
      title,
      description,
      location,
      resources
    } = this.state;

    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json', Authorization: Auth.token() };
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.post('posts/new', {
      userId,
      title,
      description,
      location,
      resources
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('New post created');
        }
      })
      .catch(error => console.log(error));
  }

  handleTitleChanged(event) {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChanged(event) {
    this.setState({ description: event.target.value });
  }

  handleLocationChanged(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    const {
      title,
      description,
      location
    } = this.state;

    return (
      <div>
        <Panel width={800}>
          <form onSubmit={this.handleNewPost}>
            <Grid>
              <Row>
                <Col sm={12} md={3} lg={3}>
                  <FieldGroup type="text" label="Title" value={title} name="title" changeCallback={this.handleTitleChanged} />
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" value={description} name="description" onChange={this.handleDescriptionChanged} />
                  </FormGroup>
                  <FieldGroup type="text" label="Location" value={location} name="location" changeCallback={this.handleLocationChanged} />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <ButtonToolbar>
                    <Button className="btn btn-warning" >
                      Edit
                    </Button>
                    <Button type="submit" className="btn btn-primary" id="save" >
                      Save
                    </Button>
                    <Button className="btn btn-default">
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

export default PostForm;
