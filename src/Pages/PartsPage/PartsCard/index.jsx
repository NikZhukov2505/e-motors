import React from 'react';
import styles from '../Parts.module.css'
import { WavyLink } from 'react-wavy-transitions';
import stock from '../../../assets/inStock.png'

const PartsCard = ({ item }) => {
    // console.log(item);
    return (
        <div className={`${styles.card} animate__animated animate__fadeInUp`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-parts/${item?.id}`}>
                <div className={styles.item_foto_block}>
                    <img src={item?.image} alt="motors" />
                    {item?.in_stock ? <img title='В наличии' id={styles.stock} src={stock} alt='inStock' /> : null}
                </div>
            </WavyLink>
            <h2>{item.name}</h2>
            <div className={styles.price_block}>
                <h3>{item?.price}</h3>
                <WavyLink duration={700} color={'#000'} to={`/detail-parts/${item?.id}`}>Подробнее</WavyLink>
            </div>
        </div>
    );
};

export default PartsCard;