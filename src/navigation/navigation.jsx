import React from 'react';
import MenuLink from "./menuLink";
import MenuRaces from "./menuRaces";
import MenuRaceDay from "./menuRaceDay";
import ExternalLink from "./externalLink";

const Navigation = () => {
    return (
        <nav>
            <a id="resp-menu" className="responsive-menu" href="#">Menu</a>
            <ul className='menu'>
                <MenuLink value={"Home"}
                          url={"/"}
                />
                <MenuRaces/>
                <MenuRaceDay/>
                <MenuLink value={"Results"}
                          url={"#"}
                />
                <MenuLink value={"Contact Us"}
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
