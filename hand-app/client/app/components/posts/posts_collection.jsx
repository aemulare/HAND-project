import React from 'react';
import { FormGroup, FormControl, Glyphicon, ControlLabel } from 'react-bootstrap';
import './styles/table.scss';

// Table data as a array of objects
// const list = [
//   { date: '11/23/2017', location: 'New York, NY', title: 'Help', author: 'John Doe', tags: 'food' },
//   { date: '11/23/2017', location: 'New York, NY', title: 'Help', author: 'Mary Smith', tags: 'clothes' },
//   { date: '10/23/2017', location: 'New York, NY', title: 'Help', author: 'Gary Smith', tags: 'shelter' }
// ];

const PostsCollection = () => (
  <div>
    <h1>Find where you can help</h1>
    <FormGroup validationState="null">
      <ControlLabel />
      <FormControl type="text" placeholder="Search posts" />
      <FormControl.Feedback>
        <Glyphicon glyph="search" />
      </FormControl.Feedback>
    </FormGroup>
    <table>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Title</th>
        <th>Author</th>
        <th>Tags</th>
      </tr>
      <tr>
        <td>11/23/2017</td>
        <td>New York, NY</td>
        <td>Help</td>
        <td>John Doe</td>
        <td>food</td>
      </tr>
    </table>
  </div>
);

export default PostsCollection;
