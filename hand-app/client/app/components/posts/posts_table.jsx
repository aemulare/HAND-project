import React from 'react';
import PropTypes from 'prop-types';

const moment = require('moment');


const TableRow = ({ row }) => (

  <tr>
    <td key={row.created_at}>{moment(row.created_at).format('MMMM Do YYYY') }</td>
    <td key={row.location}>{row.location}</td>
    <td key={row.title}>{row.title}</td>
    <td key={row.description}>{row.description}</td>
    <td key={row.user_id}>{row.user_id}</td>
  </tr>
);

const PostsTable = ({ data }) => (
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Title</th>
        <th>Description</th>
        <th>Author</th>
      </tr>
      {data.map(row => <TableRow row={row} />)}
    </table>
  </div>
);


TableRow.propTypes = {
  row: PropTypes.object.isRequired
};

PostsTable.propTypes = {
  data: PropTypes.array.isRequired
};


export default PostsTable;
