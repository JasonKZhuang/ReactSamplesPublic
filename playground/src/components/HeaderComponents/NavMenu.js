import React from 'react';
import { menuData } from './NavMenuData';

function NavMenu(props) {
    return (
        <ul>
            {
                menuData.map((obj, index) =>
                    <li key={index}>
                        <a href='/'>{obj.label}</a>
                    </li>
                )
            }
        </ul>
    );

}

export default NavMenu
