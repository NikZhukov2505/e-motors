import React, { useEffect, useState } from 'react';
import styles from './Parts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import PartsCard from './PartsCard';
import ListFilter from './../CatalogPage/ListFilter/index';
import { setPartsCategoriesId, setPartsLiName, setPartsName, setPartsStock } from '../../redux/motorsSlice';
import { getProductsParts } from './../../redux/motorsSlice';


const PartsPage = () => {
    const { partsName, partsLiName, partsCategories, productParts, partsStock, partsCategoriesId } = useSelector(state => state?.motors)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsParts({ partsStock, partsCategoriesId }))
    }, [partsCategoriesId, partsStock])

    const showActivePartsLi = (category, name, inStock) => {
        dispatch(setPartsLiName(name))
        dispatch(setPartsName(category.name))
        dispatch(setPartsCategoriesId({ id: category.id }))
        dispatch(setPartsStock({ inStock }))
    }

    return (
        <div className={styles.parts_wrapper}>
            <div className={styles.container}>
                <div className={styles.categories_block}>
                    <input type="text" placeholder='Поиск' className={styles.search} />
                    <div>
                        {
                            partsCategories &&
                            partsCategories.map(c => (
                                <div key={c.id}>
                                    <div onClick={() => showActivePartsLi(c, 'all', '')} className={styles.dropDown}>
                                        <h4>{c.name}</h4>
                                        <img className={partsName == c.name ? styles.arrow : null} src={dropDown} alt="drop-down" />
                                    </div>
                                    {
                                        partsName === c.name ?
                                            <ListFilter showActiveLi={showActivePartsLi} categoryName={partsName} liNameCategory={partsLiName} category={c} />
                                            :
                                            null
                                    }
                                </div>
                            ))
                        }


                    </div>

                </div>
                <div className={styles.cards}>
                    {
                        productParts.length > 0 ?
                            productParts?.map(e => (
                                <PartsCard key={e.id} item={e} />
                            ))

                            :
                            <h1>Товаров нет!</h1>
                    }
                </div>
            </div>
        </div>
    );
};


export default PartsPage;