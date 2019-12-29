import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MenuLink from './menuLink';

const MenuRaces = () => {
  return (
    <li>
      <Link to={'races'}>Races</Link>
      <ul className='sub-menu'>
        <MenuLink value='Marathon' url='marathon'/>
        <MenuLink value='Half Marathon' url='halfmarathon'/>
        <MenuLink value='5k' url='5k'/>
      </ul>
    </li>
  );
};

export default MenuRaces;
