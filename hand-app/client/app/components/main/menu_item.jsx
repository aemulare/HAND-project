import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/app.css';

const MenuItem = ({ label, icon, active }) => {
  const Icon = icon;

  return (
    <li className={active ? 'active' : null}>
      <a>
        <span className="pull-left">
          <Icon size={24} />
        </span>
        {label}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  active: PropTypes.bool
};

MenuItem.defaultProps = {
  active: false
};

export default MenuItem;
