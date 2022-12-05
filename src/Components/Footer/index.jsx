import React from 'react';
import styles from './Footer.module.css'
import logo from './../../assets/logo.png'
import telegram from './../../assets/telegram.png'
import whatsapp from './../../assets/whatsapp.png'
import instagram from './../../assets/instagram.png'

const Footer = () => {

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',

            });
        }
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box_logo}>
                    <img className={styles.btn_scroll_up} onClick={handlerScrollUp} src={logo} alt="logo" />
                </div>
                <div className={styles.box_contact}>
                    <div className={styles.box_contact_info}>
                        <p id={styles.contact_number}>+996 (552) 343 656</p>
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