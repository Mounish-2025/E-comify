import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/:category/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      <Route path="/account" element={<UserProfilePage />} />
      {/* Redirect unknown paths to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
