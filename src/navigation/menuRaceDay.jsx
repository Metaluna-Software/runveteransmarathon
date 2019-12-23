import React from 'react';
import Link from "./link";

const MenuRaceDay = () => {
    return (
        <li>
            <a href='raceDay.html'>Race day</a>
            <ul className='sub-menu'>
                <Link value='Schedule' url='raceDay.html#schedule'/>
                <Link value='Parking' url='raceDay.html#parking'/>
                <Link value='Post race' url='raceDay.html#postRace'/>
                <Link value='Awards' url='raceDay.html#awards'/>
                <Link value='Spectators' url='raceDay.html#spectators'/>
            </ul>
        </li>
    );
};

export default MenuRaceDay;
