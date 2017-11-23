import React from 'react';
import '../../assets/styles/app.css';

const MenuItem = () => {
  const Icon = this.props.icon;
  return (
    <li className={this.props.active ? 'active' : null}>
      <a>
        <span className="pull-left">
          <Icon size={24} />
        </span>
        {this.props.label}
      </a>
    </li>
  );
};

export default MenuItem;
