import React from 'react';
import { useState } from 'react';
import styles from './CatalogPage.module.css'
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryName, setLiName } from './../../redux/reducers/motorsReducer';
import Card from './Card';

const CatalogPage = () => {
    const [mobile, setMobile] = useState(false)
    const [scuter, setScuter] = useState(false)
    const [transport, setTransport] = useState(false)
    const { categoryName, liName } = useSelector(state => state.motors)
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoryName == 'scuter') {
            setScuter(true)
        } else if (categoryName == 'transport') {
            setTransport(true)
        } else {
            setMobile(true)
        }
    }, [categoryName])

    const showActiveLi = (category, name) => {
        dispatch(setLiName(name))
        dispatch(setCategoryName(category))
    }

    return (
        <div className={styles.wrapper_catalog}>
            <div className={styles.container}>
                <div className={styles.categories_block}>
                    <input type="text" placeholder='Поиск' className={styles.search} />
                    <div>
                        <div onClick={() => setMobile(!mobile)} className={styles.dropDown}>
                            <h4>Электромобили</h4>
                            <img className={mobile ? styles.arrow : null} src={dropDown} alt="drop-down" />
                        </div>
                        {
                            mobile ?
                                <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
                                    <li onClick={() => showActiveLi('electro', 'all')} className={categoryName == 'electro' && liName == 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
                                    <li onClick={() => showActiveLi('electro', 'in_stock')} className={categoryName == 'electro' && liName == 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
                                    <li onClick={() => showActiveLi('electro', 'on_order')} className={categoryName == 'electro' && liName == 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div>
                        <div onClick={() => setScuter(!scuter)} className={styles.dropDown}>
                            <h4>Электробайки</h4>
                            <img className={scuter ? styles.arrow : null} src={dropDown} alt="drop-down" />
                        </div>
                        {
                            scuter ?
                                <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
                                    <li onClick={() => showActiveLi('scuter', 'all')} className={categoryName == 'scuter' && liName == 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
                                    <li onClick={() => showActiveLi('scuter', 'in_stock')} className={categoryName == 'scuter' && liName == 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
                                    <li onClick={() => showActiveLi('scuter', 'on_order')} className={categoryName == 'scuter' && liName == 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div>
                        <div onClick={() => setTransport(!transport)} className={styles.dropDown}>
                            <h4>Электротранспорт</h4>
                            <img className={transport ? styles.arrow : null} src={dropDown} alt="drop-down" />
                        </div>
                        {
                            transport ?
                                <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
                                    <li onClick={() => showActiveLi('transport', 'all')} className={categoryName == 'transport' && liName == 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
                                    <li onClick={() => showActiveLi('transport', 'in_stock')} className={categoryName == 'transport' && liName == 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
                                    <li onClick={() => showActiveLi('transport', 'on_order')} className={categoryName == 'transport' && liName == 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
                                </div>
                                :
                                null
                        }
                    </div>

                </div>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;