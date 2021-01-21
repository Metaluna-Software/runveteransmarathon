import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary nav-wrapper parent-nav' data-toggle='collapse'
         data-target='.nav-collapse'>
      <span className="navbar-text"><strong>Veterans Marathon Races</strong></span>
      <button className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'events'}
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>Events</Link>
            <div className='dropdown-menu'>
              <Link className='dropdown-item' to='veterans.html'>Veterans Marathon</Link>
              <Link className='dropdown-item' to='memorial.html'>Memorial Day 10k</Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link to='contact.html' className='nav-link'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  enJson: PropTypes.object
};

export default Navigation;
