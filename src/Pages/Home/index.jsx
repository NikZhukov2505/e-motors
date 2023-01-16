import React from 'react';
import Catalog from '../../Components/Catalog';
import SwiperAbout from '../../Components/SwiperAbout';
import SwiperTop from '../../Components/SwiperTop';
import styles from './Home.module.css'


const Home = () => {
    return (
        <main>
            <SwiperTop />
            <Catalog />
            <SwiperAbout />
        </main>
    );
};

export default Home;