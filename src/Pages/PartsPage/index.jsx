import React, { useEffect, useState } from 'react';
import styles from './Parts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setPartsLiName, setPartsName } from './../../redux/reducers/motorsReducer';
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import PartsCard from './PartsCard';
import ListFilter from './../CatalogPage/ListFilter/index';


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
                                <ListFilter showActiveLi={showActivePartsLi} categoryName={partsName} liNameCategory={partsLiName} category={'stations'} />
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
                                <ListFilter showActiveLi={showActivePartsLi} categoryName={partsName} liNameCategory={partsLiName} category={'parts'} />
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