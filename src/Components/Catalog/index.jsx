import React from 'react';
import styles from './Catalog.module.css'
import moreCatalog from './../../assets/moreCatalog.png'
import carCatalog from './../../assets/carCatalog.png'
import motoCatalog from './../../assets/motoCatalog.png'
import samoCatalog from './../../assets/samoCatalog.png'
import sircleCatalog from './../../assets/sircleCatalog.png'

const Catalog = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.Catalog_title}>каталог</h2>
            <div className={styles.Output_Catalog}>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={moreCatalog} alt="moreCatalog" />
                    </div>
                    <p>Все категории</p>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={carCatalog} alt="carCatalog" />
                    </div>
                    <p>Электромобили</p>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={motoCatalog} alt="motoCatalog" />
                    </div>
                    <p>Электробайки</p>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={samoCatalog} alt="samoCatalog" />
                    </div>
                    <p>Электротранспорт</p>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={sircleCatalog} alt="sircleCatalog" />
                    </div>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={sircleCatalog} alt="sircleCatalog" />
                    </div>
                </div>
                <div className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={sircleCatalog} alt="sircleCatalog" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;