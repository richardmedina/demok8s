import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/header.component';
import AppRoutes from '../AppRoutes';

const Layout = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
);

export default Layout;
