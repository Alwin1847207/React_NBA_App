import React from "react";
import {Link} from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import style from './sidenav.css';

const SideNavItems = () => {

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        },
    ];

    const showItems = () => {
        return items.map((items, i) => {
            return (
                <div key={i} className={items.type}>
                    <Link to={items.link}>
                        <FontAwesome name={items.icon}/>
                        {items.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
};

export default SideNavItems;