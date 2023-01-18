import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
const BurgerMenu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    return (
        <div className={styles.burgerMenu}>
            <div onClick={() => setBurgerActive(!burgerActive)} className={burgerActive ? styles.menu_btn_active : styles.menu_btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={burgerActive ? styles.menu_active : styles.menu}>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} to={'/'} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            }>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            } to={'/catalog'}>
                                Каталог
                            </NavLink>
                        </li>
                        <li><HashLink onClick={() => setBurgerActive(!burgerActive)} to={'/#about-us'} className={styles.links} >О нас</HashLink></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            activeClass={'active'}
                            duration={1500} className={styles.links} to='contacts'>Контакты</Link></li>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            } to={'/parts'}>дополнительное</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.connect_block}>
                    <a href='#'>
                        <button className={styles.connect_btn}>Связаться с нами</button>
                    </a>
                </div>
            </div >
        </div >
    );
};

export default BurgerMenu;