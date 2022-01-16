import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const MemorialNavigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light nav-wrapper' data-toggle='collapse'
         data-target='.nav-collapse' id='memorial'>
      <a className='navbar-brand' href='/memorial.html'>10k</a>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='memorialraceday.html' className='nav-link' aria-haspopup='true' aria-expanded='false'>Race Info</Link>
          </li>
          <li className='nav-item'>
            <Link to='memorial10kcourse.html' className='nav-link'>Map</Link>
          </li>
          <li className='nav-item'>
            <Link to='memorialresults.html' className='nav-link'>Results</Link>
          </li>
          <li className='nav-item'>
            <a href='https://runsignup.com/Race/IN/ColumbiaCity/TheMemorialDay10k' target='_blank'
               rel='noopener noreferrer' className='nav-link'>Register
              <i className="fas fa-external-link-alt padding-left-one"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

MemorialNavigation.propTypes = {
  enJson: PropTypes.object
};

export default MemorialNavigation;
