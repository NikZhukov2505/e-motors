import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';


const Header = () => {
    const location = useLocation()
    console.log(location);

    return (
        <header className={styles.header}>
            <div className={styles.logo_block}>
                <WavyLink duration={700} color='#000' to={'/'}><img src={logo} alt="e_motors_logo" /></WavyLink>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={location.pathname == '/' ? styles.activeMenu_item : styles.menu_item}>
                        <WavyLink duration={700} to={'/'} color={'#000'}>
                            {/* <NavLink to={'/'} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            }> */}
                            Главная
                            {/* </NavLink> */}
                        </WavyLink>
                    </li>
                    <li className={location.pathname == '/catalog' ? styles.activeMenu_item : styles.menu_item}>
                        <WavyLink duration={700} to={'/catalog'} color={'#000'}>
                            {/* <NavLink className={({ isActive }) =>
                            isActive ? styles.activeMenu_item : styles.menu_item
                        } to={'/catalog'}> */}
                            Каталог
                            {/* </NavLink> */}
                        </WavyLink>
                    </li>
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