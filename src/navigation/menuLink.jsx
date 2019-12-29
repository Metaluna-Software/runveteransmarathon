import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

const MenuLink = (props) => {
  const {
    value,
    url
  } = props;
  return (
    <li>
      <Link to={url}>{value}</Link>
    </li>
  );
};

MenuLink.propTypes = {
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default MenuLink;
