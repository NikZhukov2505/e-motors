import React from 'react';
import styles from '../Parts.module.css'
import { WavyLink } from 'react-wavy-transitions';
import charge from '../../../assets/charge.png'

const PartsCard = () => {
    const id = 1
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-parts/${id}`}>
                <img src={charge} alt="motors" />
            </WavyLink>
            <h2>Honda M-NV (топовая комплектация)</h2>
            <div className={styles.price_block}>
                <h3>250 $</h3>
                <WavyLink duration={700} color={'#000'} to={`/detail-parts/${id}`}>Подробнее</WavyLink>
            </div>
        </div>
    );
};

export default PartsCard;