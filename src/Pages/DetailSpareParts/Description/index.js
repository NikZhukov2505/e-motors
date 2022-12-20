import React from 'react';
import styles from './Description.module.css'


const DetailSpareParts = () => {
    return (
        <div className={styles.wrapper_description}>
            <div className={styles.box_description}>
                <h2>Описание</h2>
            </div>
            <div className={styles.wrapper_text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt doloribus quis, molestiae molestias corrupti natus reprehenderit aspernatur vel quae eos alias distinctio iusto possimus ratione culpa cupiditate! Tenetur, pariatur. Nihil, vel quo esse ut hic quisquam dolor dolorem reprehenderit dignissimos ab iusto labore sit ratione, officiis, deserunt aliquid unde?</p>
            </div>
        </div>
    );
};

export default DetailSpareParts;