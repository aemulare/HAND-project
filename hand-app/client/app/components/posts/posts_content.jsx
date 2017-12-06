import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const moment = require('moment');


const PostPanel = ({ post }) => (
  <Panel header={`${moment(post.created_at).format('MM/DD/YYYY')} ${post.location},  published by: ${post.user.firstName} ${post.user.lastName}`} bsStyle="info">
    <h4>
      <strong>{post.title}</strong>
    </h4>
    <p>{post.description}</p>
  </Panel>
);

const PostsContent = ({ data }) => (
  <div>
    {data.map(post => <PostPanel post={post} />)}
  </div>
);


PostPanel.propTypes = {
  post: PropTypes.object.isRequired
};

PostsContent.propTypes = {
  data: PropTypes.array.isRequired
};


export default PostsContent;
