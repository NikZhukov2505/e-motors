import React from 'react';
import styles from './Catalog.module.css'
import moreCatalog from './../../assets/moreCatalog.png'
import carCatalog from './../../assets/carCatalog.png'
import motoCatalog from './../../assets/motoCatalog.png'
import samoCatalog from './../../assets/samoCatalog.png'
import sircleCatalog from './../../assets/sircleCatalog.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategoryName } from './../../redux/reducers/motorsReducer';

const Catalog = () => {
    const [showCategories, setShowCategories] = useState(false)
    const dispatch = useDispatch()

    const setCategory = (name) => {
        dispatch(setCategoryName(name))
        window.scrollTo(0, 0)
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.Catalog_title}>каталог</h2>
            <div className={styles.Output_Catalog}>
                <div onClick={() => setShowCategories(true)} className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={moreCatalog} alt="moreCatalog" />
                    </div>
                    <p>Все категории</p>
                </div>
                {
                    showCategories &&
                    <>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`} onClick={() => setCategory('electro')} to={'/catalog'}>
                            <div className={styles.item_card}>
                                <img src={carCatalog} alt="carCatalog" />
                            </div>
                            <p>Электромобили</p>
                        </Link>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`} onClick={() => setCategory('scuter')} to={'/catalog'}>
                            <div className={styles.item_card}>
                                <img src={motoCatalog} alt="motoCatalog" />
                            </div>
                            <p>Электробайки</p>
                        </Link>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`} onClick={() => setCategory('transport')} to={'/catalog'}>
                            <div className={styles.item_card}>
                                <img src={samoCatalog} alt="samoCatalog" />
                            </div>
                            <p>Электротранспорт</p>
                        </Link>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`}>
                            <div className={styles.item_card}>
                                <img src={sircleCatalog} alt="sircleCatalog" />
                            </div>
                        </Link>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`}>
                            <div className={styles.item_card}>
                                <img src={sircleCatalog} alt="sircleCatalog" />
                            </div>
                            <p></p>
                        </Link>
                        <Link className={`${styles.card_categories} animate__flipInY animate__animated`}>
                            <div className={styles.item_card}>
                                <img src={sircleCatalog} alt="sircleCatalog" />
                            </div>
                            <p></p>
                        </Link>
                    </>

                }
            </div>
        </div>
    );
};

export default Catalog;