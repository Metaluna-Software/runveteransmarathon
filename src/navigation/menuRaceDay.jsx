import React from 'react';
import MenuLink from './menuLink';
import { HashLink as Link } from 'react-router-hash-link';

const MenuRaceDay = () => {
  return (
    <li>
      <Link to={'raceday'}>Race day</Link>
      <ul className='sub-menu'>
        <MenuLink value='Schedule' url='raceday#schedule'/>
        <MenuLink value='Parking' url='raceday#parking'/>
        <MenuLink value='Post race' url='raceday#postRace'/>
        <MenuLink value='Awards' url='raceday#awards'/>
        <MenuLink value='Spectators' url='raceday#spectators'/>
      </ul>
    </li>
  );
};

export default MenuRaceDay;
