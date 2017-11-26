import React from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

const MenuItem = ({ label, icon, active, path }) => {
  const Icon = icon;

  return (
    <LinkContainer to={path}>
      <NavItem className={active ? 'active' : null}>
        <span className="pull-left">
          <Icon size={24} />
        </span>
        {label}
      </NavItem>
    </LinkContainer>
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
