import React from 'react';


export const Header = () => (
  <div id="wrapper">
    {}
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
        <li className="active">
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-user fa-stack-1x " />
            </span>{' '}
                Jane Smith
          </a>
          <ul
            className="nav-pills nav-stacked"
            style={{
                  listStyleType: 'none',
                }}
          >
            <li>
              <a href="#">My profile</a>
            </li>
            <li>
              <a href="#">My posts</a>
            </li>
            <li>
              <a href="#">My offers</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-home fa-stack-1x " />
            </span>Home
          </a>
          <ul
            className="nav-pills nav-stacked"
            style={{
                  listStyleType: 'none',
                }}
          >
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-heartbeat fa-stack-1x " />
                </span>Posts
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-users fa-stack-1x " />
                </span>Users
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-newspaper-o fa-stack-1x " />
            </span>News
          </a>
        </li>
        {}
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-info fa-stack-1x " />
            </span>About
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-gavel fa-stack-1x " />
            </span>Policy
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-paper-plane-o fa-stack-1x " />
            </span>Contact
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-sign-out fa-stack-1x " />
            </span>Sign out
          </a>
        </li>
      </ul>
    </div>
    {}
    {}
    <div id="page-content-wrapper">
      <div className="container-fluid xyz">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs">
                  Home > Some route > ... > <strong>This page</strong>
            </div>
            <h1>Main content goes here</h1>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident laudantium nobis cum dignissimos ex inventore, velit
                  blanditiis. Quod laborum soluta quidem culpa officia eligendi,
                  quam, recusandae iste aliquid amet odit!
            </p>
          </div>
        </div>
      </div>
    </div>
    {}
  </div>

);


export default Sidebar;
