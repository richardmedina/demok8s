import React from 'react';
import { Route, Routes } from 'react-router';
import AboutContainer from './containers/about-container/about-container.component';
import HomeContainer from './containers/home-container/home-container.component';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="/about" element={<AboutContainer />} />
  </Routes>
)

export default AppRoutes;
