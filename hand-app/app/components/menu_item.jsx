import React, { Component } from 'react';
import '../assets/styles/app.css';

class MenuItem extends Component {
  render() {
    return (
      <li className={this.props.active ? 'active' : null}>
        <a href="#">
          <span className="fa-stack fa-lg pull-left">
            <i className={`fa ${this.props.icon} fa-stack-1x`} />
          </span>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default MenuItem;
