import React from 'react';
import styles from '../CatalogPage.module.css'
import { WavyLink } from 'react-wavy-transitions';
import 'animate.css';
import stock from '../../../assets/inStock.png'

const Card = ({ item }) => {
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-motors/${item?.id}`}>
                <div className={styles.item_foto_block}>
                    <img className={styles.car_img} src={item?.image} alt="motors" />
                    {item?.in_stock ? <img title='В наличии' id={styles.stock} src={stock} alt='inStock' /> : null}
                </div>
            </WavyLink>
            <h2>{item.name}</h2>
            <div className={styles.info_block}>
                <p>Запас хода:</p>
                <span>{item?.power_reserve}</span>
            </div>
            <div className={styles.info_block}>
                <p>Емкость батареи:</p>
                <span>{item?.battery_capacity} кВт/ч</span>
            </div>
            <div className={styles.price_block}>
                <h3>{item?.price}</h3>
                <WavyLink duration={700} color={'#000'} to={`/detail-motors/${item?.id}`}>Подробнее</WavyLink>
            </div>
        </div>
    );
};

export default Card;