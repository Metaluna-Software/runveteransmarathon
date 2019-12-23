import React from 'react';
import Link from "./link";

const MenuRaces = () => {
    return (
        <li>
            <a href='raceDay.html'>Races</a>
            <ul className='sub-menu'>
                <Link value='Marathon' url='marathon.html'/>
                <Link value='Half Marathon' url='halfmarathon.html'/>
                <Link value='5k' url='5k.html'/>
            </ul>
        </li>
    );
};

export default MenuRaces;
