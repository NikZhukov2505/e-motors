import React, { useEffect } from 'react';
import styles from './DetailPage.module.css'
import SwiperDetailParts from './SwiperDetail/index';
import DetailSpareParts from './Description/index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProductParts } from '../../redux/motorsSlice';


const DetailPageParts = () => {
    const { parts_id } = useParams()
    const detailParts = useSelector(state => state?.motors?.detailParts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDetailProductParts(parts_id))
        window.scrollTo(0, 0)
    }, [dispatch, parts_id])

    return (
        <div className={styles.container}>
            <div className={styles.box_character}>
                <div className={styles.box_character_img}>
                    <SwiperDetailParts images={detailParts?.images || []} image={detailParts?.image} />
                </div>
                <div className={styles.box_character_title}>
                    <div className={styles.title_character}>
                        <h2>{detailParts?.name}</h2>
                    </div>
                    <div className={styles.price_block}>
                        <p className={styles.price_text}>Цена:</p>
                        <h2 className={styles.price}>{detailParts?.price}</h2>
                    </div>
                    <div className={styles.title_character}>
                        <button>заказать</button>
                    </div>
                </div>
            </div>
            <DetailSpareParts description={detailParts?.description} />
        </div>
    );
};

export default DetailPageParts;