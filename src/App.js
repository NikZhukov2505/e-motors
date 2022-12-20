import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index';
import CatalogPage from './Pages/CatalogPage/index';
import DetailPage from './Pages/DetailPage/index';
import Footer from './Components/Footer/index';
import { WavyContainer } from 'react-wavy-transitions';
import PartsPage from './Pages/PartsPage';

const App = () => {
  return (
    <>
      <Header />
      <WavyContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/detail-motors/:id' element={<DetailPage />} />
        <Route path='/parts' element={<PartsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;