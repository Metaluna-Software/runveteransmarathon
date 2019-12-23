import React from 'react';
import Link from "./link";
import MenuRaces from "./menuRaces";
import MenuRaceDay from "./menuRaceDay";
import ExternalLink from "./externalLink";

const Navigation = () => {
    return (
        <nav>
            <a id="resp-menu" className="responsive-menu" href="#">Menu</a>
            <ul className='menu'>
                <Link value={"Home"}
                      url={"index.html"}
                />
                <MenuRaces/>
                <MenuRaceDay/>
                <Link value={"Results"}
                      url={"#"}
                />
                <Link value={"Contact Us"}
                      url={"#"}
                />
                <ExternalLink url={'https://runsignup.com'}
                              value={'Register'}/>
            </ul>
        </nav>
    )
        ;
};

export default Navigation;
