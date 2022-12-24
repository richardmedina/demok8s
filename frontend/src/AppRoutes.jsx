import React from 'react';
import { Route, Routes } from 'react-router';
import AboutContainer from './containers/about-container/about-container.component';
import HomeContainer from './containers/home-container/home-container.component';
import ServerContainer from './containers/server-container/server-container.component';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomeContainer />} />
    <Route path="/home" element={<HomeContainer />} />
    <Route path="/about" element={<AboutContainer />} />
    <Route path="/server" element={<ServerContainer />} />
  </Routes>
)

export default AppRoutes;
