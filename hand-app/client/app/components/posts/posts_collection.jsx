import React from 'react';
import { FormGroup, FormControl, Glyphicon, ControlLabel } from 'react-bootstrap';
import { Column, Table, AutoSizer } from 'react-virtualized';
// import 'react-virtualized/styles.css'; // only needs to be imported once

// Table data as a array of objects
const list = [
  { date: '11/23/2017', location: 'New York, NY', title: 'Help', author: 'John Doe', tags: 'food' },
  { date: '11/23/2017', location: 'New York, NY', title: 'Help', author: 'Mary Smith', tags: 'clothes' },
  { date: '10/23/2017', location: 'New York, NY', title: 'Help', author: 'Gary Smith', tags: 'shelter' }
];


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

    <AutoSizer>
      {({ height, width }) => (
        <Table
          width={width}
          height={height}
          headerHeight={20}
          rowHeight={30}
          rowCount={list.length}
          rowGetter={({ index }) => list[index]}
        >
          <Column
            label="Date"
            dataKey="date"
            width={200}
          />
          <Column
            label="Location"
            dataKey="location"
            width={200}
          />
          <Column
            label="Title"
            dataKey="title"
            width={400}
          />
          <Column
            label="Author"
            dataKey="author"
            width={300}
          />
          <Column
            label="Tags"
            dataKey="tags"
            width={200}
          />
        </Table>
    )}
    </AutoSizer>
  </div>
);

export default PostsCollection;
