import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/styles/app.scss';

const MenuItem = ({ label, icon, active, path }) => {
  const Icon = icon;

  return (
    <li className={active ? 'active' : null}>
      <Link to={path}>
        <span className="pull-left">
          <Icon size={24} />
        </span>
        {label}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  active: PropTypes.bool,
  path: PropTypes.string
};

MenuItem.defaultProps = {
  active: false,
  path: '/root'
};

export default MenuItem;
