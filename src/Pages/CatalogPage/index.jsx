import React from 'react';
import { useState } from 'react';
import styles from './CatalogPage.module.css'
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryName, setLiName } from './../../redux/reducers/motorsReducer';
import Card from './Card';
import ListFilter from './ListFilter';

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
                                <ListFilter showActiveLi={showActiveLi} categoryName={categoryName} liNameCategory={liName} category={'electro'} />
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
                                <ListFilter showActiveLi={showActiveLi} categoryName={categoryName} liNameCategory={liName} category={'scuter'} />
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
                                <ListFilter showActiveLi={showActiveLi} categoryName={categoryName} liNameCategory={liName} category={'transport'} />
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