import React from 'react';
import styles from './Footer.module.css'
import logo from './../../assets/logo.png'
import telegram from './../../assets/telegram.png'
import whatsapp from './../../assets/whatsapp.png'
import instagram from './../../assets/instagram.png'
import { Link } from 'react-scroll';

const Footer = () => {

    return (
        <footer id='contacts' className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box_logo}>
                    <Link spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        to={'top'}
                    >
                        <img className={styles.btn_scroll_up} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={styles.box_contact}>
                    <div className={styles.box_contact_info}>
                        <p ><a id={styles.contact_number} href="tel:+996 (552) 343 656">+996 (552) 343 656</a></p>
                    </div>
                    <div className={styles.box_contact_info}>
                        <p>Наш адресс:</p>
                        <p>Кыргызстан, г. Бишкек<br />
                            ул. Усенбаева №52</p>
                    </div>
                    <div className={styles.box_contact_info}>
                        <p>Наша почта:</p>
                        <p>Почта: betterlife.kg@gmail.com</p>
                    </div>
                    <div className={`${styles.box_contact_info} ${styles.box_contact_icons}`}>
                        <a href="https://telegram.org/" target="_blank"><img src={telegram} alt="telegram" /></a>
                        <a href="https://www.whatsapp.com/?lang=ru" target="_blank"><img src={whatsapp} alt="whatsapp" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram" /></a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;