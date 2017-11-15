import React, { Component } from 'react';
import '../assets/styles/app.css';

class MenuItem extends Component {
  render() {
    const Icon = this.props.icon;

    return (
      <li className={this.props.active ? 'active' : null}>
        <a href="#">
          <span className="pull-left">
            <Icon size={24} />
          </span>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default MenuItem;
