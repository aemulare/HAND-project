import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon, ControlLabel } from 'react-bootstrap';
import axios from 'axios';
import PostsContent from './posts_content';
import Auth from '../../modules/auth';
import './styles/table.scss';

class PostsCollection extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };

    // handlers
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const API_URL = 'http://localhost:8000/api/v1';
    const API_HEADERS = { 'Content-Type': 'application/json', Authorization: Auth.token() };
    const client = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: API_HEADERS
    });

    client.get('posts', { })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ posts: res.data });
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  handleSearch(event) {
    this.setState({ search: event.target.value });
  }


  render() {
    const {
      posts,
      search
    } = this.state;

    return (
      <div>
        <h1>Find where you can help</h1>
        <FormGroup validationState="null">
          <ControlLabel />
          <FormControl componentClass="input" type="text" value={search} placeholder="Search posts" onChange={this.handleSearch} />
          <FormControl.Feedback>
            <Glyphicon glyph="search" />
          </FormControl.Feedback>
        </FormGroup>
        <PostsContent data={posts} />
      </div>
    );
  }
}

export default PostsCollection;
