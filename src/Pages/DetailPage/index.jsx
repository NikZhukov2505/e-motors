import React from 'react';
import { useEffect } from 'react';
import styles from './DetailPage.module.css'
import SwiperDetail from './SwiperDetail/index';


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

                </div>
            </div>
        </div>
    );
};

export default DetailPage;