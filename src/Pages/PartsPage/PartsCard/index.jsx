import React from 'react';
import styles from '../Parts.module.css'
import { Link } from 'react-router-dom';

const PartsCard = ({ item }) => {
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <Link to={`/detail-parts/${item?.id}`}>
                <img src={item?.image} alt="motors" />
            </Link>
            <h2>{item.name}</h2>
            <div className={styles.price_block}>
                <h3>{item?.price}</h3>
                <Link to={`/detail-parts/${item?.id}`}>Подробнее</Link>
            </div>
        </div>
    );
};

export default PartsCard;