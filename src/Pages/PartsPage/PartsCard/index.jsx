import React from 'react';
import styles from '../Parts.module.css'
import { WavyLink } from 'react-wavy-transitions';
import charge from '../../../assets/charge.png'

const PartsCard = () => {
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-parts/${1}`}>
                <img src={charge} alt="motors" />
            </WavyLink>
            <h2>Honda M-NV (топовая комплектация)</h2>
            <div className={styles.price_block}>
                <h3>250 $</h3>
                <WavyLink duration={700} color={'#000'} to={`/detail-parts/${1}`}>Подробнее</WavyLink>
            </div>
        </div>
    );
};

export default PartsCard;