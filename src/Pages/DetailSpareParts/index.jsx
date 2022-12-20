import React from 'react';
import styles from './DetailPage.module.css'
import SwiperDetailParts from './SwiperDetail/index';
import DetailSpareParts from './Description/index';


const DetailPageParts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box_character}>
                <div className={styles.box_character_img}>
                    <SwiperDetailParts />
                </div>
                <div className={styles.box_character_title}>
                    <div className={styles.title_character}>
                        <h2>провод M-NV (топовый зуб даю)</h2>
                    </div>
                    <div className={styles.title_character}></div>
                    <div className={styles.title_character}>
                        <button>заказать</button>
                    </div>
                </div>
            </div>
            <DetailSpareParts />
        </div>
    );
};

export default DetailPageParts;