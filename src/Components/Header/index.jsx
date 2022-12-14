import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';

const Header = () => {
    const location = useLocation()
    const params = useParams()
    // console.log(params);
    return (
        <header id='top' className={styles.header}>
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
                    <li className={location.pathname == '/catalog' || location.pathname == '/detail-motors/1' ? styles.activeMenu_item : styles.menu_item}>
                        <WavyLink duration={700} to={'/catalog'} color={'#000'}>
                            {/* <NavLink className={({ isActive }) =>
                            isActive ? styles.activeMenu_item : styles.menu_item
                        } to={'/catalog'}> */}
                            Каталог
                            {/* </NavLink> */}
                        </WavyLink>
                    </li>
                    <li><HashLink to={'/#about-us'} className={styles.links} >О нас</HashLink></li>
                    <li><Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        activeClass={'active'}
                        duration={1500} className={styles.links} to='contacts'>Контакты</Link></li>
                    <li className={location.pathname == '/parts' || location.pathname == '/detail-parts/1' ? styles.activeMenu_item : styles.menu_item}>
                        <WavyLink duration={700} color={'#000'} to={'/parts'}>дополнительное</WavyLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.connect_block}>
                <a href="https://wa.me/message/MAZFGZ7VXQLPB1">
                    <button className={styles.connect_btn}>Связаться с нами</button>
                </a>
            </div>
        </header>
    );
};

export default Header;