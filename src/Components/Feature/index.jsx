import React from 'react';
import styles from './Feature.module.css'

const Feature = ({ name, description }) => {
    return (
        <div className={styles.block_feature}>
            <p className={styles.title}>{name}</p>
            <span className={styles.title_name}>{name === 'Наличие:' && description === true ? 'В наличии' : description + ''}</span>
        </div>
    );
};

export default Feature;