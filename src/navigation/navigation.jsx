import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light nav-wrapper' data-toggle='collapse'
         data-target='.nav-collapse'>
      <a className='navbar-brand' href='/'>VM</a>
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
            <Link to={'races'}
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>Races</Link>
            <div className='dropdown-menu'>
              <Link className='dropdown-item' to='marathon'>Marathon</Link>
              <Link className='dropdown-item' to='halfmarathon'>Half-marathon</Link>
              <Link className='dropdown-item' to='fivek'>5k</Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link to='/raceday' className='nav-link' aria-haspopup='true' aria-expanded='false'>Race Day</Link>
          </li>
          <li className='nav-item'>
            <Link to='results' className='nav-link'>Results</Link>
          </li>
          <li className='nav-item'>
            <Link to='contact' className='nav-link'>Contact Us</Link>
          </li>
          <li className='nav-item'>
            <a href='https://runsignup.com/Race/IN/ColumbiaCity/VeteransMarathon' target='_blank'
               rel='noopener noreferrer' className='nav-link'>Register
              <i className='fas fa-external-link-alt padding-left-one'></i>
            </a>
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
