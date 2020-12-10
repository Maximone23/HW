import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'
import {PATH} from './Routes';

function Header() {
    return (
        <div className={styles.items}>

            <NavLink activeClassName={styles.active} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink activeClassName={styles.active} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink activeClassName={styles.active} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>

            <svg className={styles.arrowRight3} viewBox="0 0 5 9">
                <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"/>
            </svg>

        </div>
    );
}

export default Header

