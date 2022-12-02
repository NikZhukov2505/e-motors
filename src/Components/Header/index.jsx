import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_block}>
                <Link to={'/'}><img src={logo} alt="e_motors_logo" /></Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive ? styles.activeMenu_item : styles.menu_item
                    }>Главная</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? styles.activeMenu_item : styles.menu_item
                    } to={'/catalog'}>Каталог</NavLink></li>
                    <li><a className={styles.links} href='/#about-us'>О нас</a></li>
                    <li><a className={styles.links} href='/#contacts'>Контакты</a></li>
                </ul>
            </nav>
            <div className={styles.connect_block}>
                <button className={styles.connect_btn}>Связаться с нами</button>
            </div>
        </header>
    );
};

export default Header;