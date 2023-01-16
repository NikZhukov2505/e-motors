import React from 'react';
import { useEffect } from 'react';
import styles from './DetailPage.module.css'
import SwiperDetail from './SwiperDetail/index';
import Description from './Description/index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProductAuto } from './../../redux/motorsSlice';
import Feature from '../../Components/Feature';


const DetailPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { detailAuto } = useSelector(state => state.motors)
    // console.log(detailAuto);

    useEffect(() => {
        dispatch(getDetailProductAuto(id))
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.box_character}>
                <div className={styles.box_character_img}>
                    <SwiperDetail imageList={detailAuto.images} image={detailAuto.image} />
                </div>
                <div className={styles.box_character_title}>
                    <div className={styles.title_character}>
                        <h2>{detailAuto.name}</h2>
                    </div>
                    <div className={styles.title_character}>
                        <h3 className={styles.feature}>Характеристики</h3>
                        <Feature name={'Запас хода:'} description={detailAuto.power_reserve} />
                        <div className={styles.block_feature}>
                            <p className={styles.title}>Наличие:</p>
                            <span className={styles.title_name}>{detailAuto.in_stock ? 'В наличии' : 'Под заказ'}</span>
                        </div>
                        <Feature name={'Крутящий момент Н·м:'} description={detailAuto.torque} />
                        <Feature name={'Макс. скорость км/ч:'} description={detailAuto.max_speed} />
                        <Feature name={'Тип кузова электромобиля:'} description={detailAuto.type_body} />
                        <Feature name={'Тип привода:'} description={detailAuto.type_drive} />
                        <Feature name={'Пробег:'} description={detailAuto.mileage} />
                        <Feature name={'Год выпуска:'} description={detailAuto.year_issue} />
                    </div>
                    <div className={styles.price_block}>
                        <p className={styles.price_text}>Цена:</p>
                        <h2 className={styles.price}>{detailAuto.price}</h2>
                    </div>
                    <div className={styles.title_character}>
                        <button>заказать</button>
                    </div>
                </div>
            </div>
            <Description description={detailAuto.description} />
        </div>
    );
};

export default DetailPage;