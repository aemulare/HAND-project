import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import '../assets/styles/app.css';

class Content extends Component {
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid xyz">
          <div className="row">
            <div className="col-lg-12">
              <Breadcrumbs />
              <h1>Main content goes here</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium nobis cum dignissimos ex inventore,
                velit blanditiis. Quod laborum soluta quidem culpa officia eligendi, quam, recusandae iste aliquid amet odit!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
