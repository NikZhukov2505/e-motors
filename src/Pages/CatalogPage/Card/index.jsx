import React from 'react';
import styles from '../CatalogPage.module.css'
import motors from '../../../assets/motors.png'
import { WavyLink } from 'react-wavy-transitions';
import 'animate.css';

const Card = () => {
    return (
        <div className={`${styles.card} animate__animated animate__fadeInRight`}>
            <WavyLink duration={700} color={'#000'} to={`/detail-motors/${1}`}>
                <img src={motors} alt="motors" />
            </WavyLink>
            <h2>Honda M-NV (топовая комплектация)</h2>
            <div className={styles.info_block}>
                <p>Запас хода:</p>
                <span>480 км</span>
            </div>
            <div className={styles.info_block}>
                <p>Емкость батареи:</p>
                <span>61 кВт/ч</span>
            </div>
            <div className={styles.price_block}>
                <h3>47 371 $</h3>
                <WavyLink duration={700} color={'#000'} to={`/detail-motors/${1}`}>Подробнее</WavyLink>
            </div>
        </div>
    );
};

export default Card;