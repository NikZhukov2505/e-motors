import React from 'react';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../Components/Catalog';
import SwiperAbout from '../../Components/SwiperAbout';
import SwiperTop from '../../Components/SwiperTop';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Главная | Emotors.kg</title>
                <meta name='description' content='emotors.kg - Электромобили в Бишкеке, элетромобили под заказ, электромобили электробайки и электросамокаты, новые и б/у электромобили' />
            </Helmet>
            <main>
                <SwiperTop />
                <Catalog />
                <SwiperAbout />
            </main>
        </>
    );
};

export default Home;