import React, { useEffect, useState } from 'react';
import styles from './Parts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setPartsLiName, setPartsName } from './../../redux/reducers/motorsReducer';
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import PartsCard from './PartsCard';

const PartsPage = () => {
    const [stations, setStations] = useState(false)
    const [parts, setParts] = useState(false)
    const { partsName, partsLiName } = useSelector(state => state.motors)
    const dispatch = useDispatch()

    useEffect(() => {
        if (partsName == 'parts') {
            setParts(true)
        } else {
            setStations(true)
        }
    }, [partsName])

    const showActivePartsLi = (category, name) => {
        dispatch(setPartsName(category))
        dispatch(setPartsLiName(name))
    }

    return (
        <div className={styles.parts_wrapper}>
            <div className={styles.container}>
                <div className={styles.categories_block}>
                    <input type="text" placeholder='Поиск' className={styles.search} />
                    <div>
                        <div onClick={() => setStations(!stations)} className={styles.dropDown}>
                            <h4>Электростанции</h4>
                            <img className={stations ? styles.arrow : null} src={dropDown} alt="drop-down" />
                        </div>
                        {
                            stations ?
                                <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
                                    <li onClick={() => showActivePartsLi('stations', 'all')} className={partsName == 'stations' && partsLiName == 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
                                    <li onClick={() => showActivePartsLi('stations', 'in_stock')} className={partsName == 'stations' && partsLiName == 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
                                    <li onClick={() => showActivePartsLi('stations', 'on_order')} className={partsName == 'stations' && partsLiName == 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div>
                        <div onClick={() => setParts(!parts)} className={styles.dropDown}>
                            <h4>Запчасти</h4>
                            <img className={parts ? styles.arrow : null} src={dropDown} alt="drop-down" />
                        </div>
                        {
                            parts ?
                                <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
                                    <li onClick={() => showActivePartsLi('parts', 'all')} className={partsName == 'parts' && partsLiName == 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
                                    <li onClick={() => showActivePartsLi('parts', 'in_stock')} className={partsName == 'parts' && partsLiName == 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
                                    <li onClick={() => showActivePartsLi('parts', 'on_order')} className={partsName == 'parts' && partsLiName == 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <div className={styles.cards}>
                    <PartsCard />
                    <PartsCard />
                    <PartsCard />
                </div>
            </div>
        </div>
    );
};


export default PartsPage;