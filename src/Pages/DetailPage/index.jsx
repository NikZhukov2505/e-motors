import React from 'react';
import { useEffect } from 'react';
import styles from './DetailPage.module.css'
import SwiperDetail from './SwiperDetail/index';
import Description from './Description/index';


const DetailPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.box_character}>
                <div className={styles.box_character_img}>
                    <SwiperDetail />
                </div>
                <div className={styles.box_character_title}>
                    <div className={styles.title_character}>
                        <h2>Honda M-NV (топовая комплектация)</h2>
                    </div>
                    <div className={styles.title_character}></div>
                    <div className={styles.title_character}>
                        <button>заказать</button>
                    </div>
                </div>
            </div>
            <Description />
        </div>
    );
};

export default DetailPage;