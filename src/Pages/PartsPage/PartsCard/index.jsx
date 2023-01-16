import React from 'react';
import styles from '../Parts.module.css'
import { WavyLink } from 'react-wavy-transitions';

const PartsCard = ({ item }) => {
    // console.log(item);
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-parts/${item?.id}`}>
                <img src={item?.image} alt="motors" />
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