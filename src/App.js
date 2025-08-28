// ایمپورت کتابخانه‌های مورد نیاز | Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ایمپورت context سبد خرید | Import cart context
import { CartProvider } from './components/CartContext';

// ایمپورت کامپوننت‌های صفحات مختلف | Import page components
import Features from './components/features/Features';
import DesktopContent from './components/Products/DesktopContent';
import LaptopContent from './components/Products/LaptopContent';
import MobileContent from './components/Products/MobileContent';
import Shop from './components/Shop/Shop';
import Case from './components/Products/Case';
import Cart from './components/Cart/Cart';

// تعریف کامپوننت اصلی اپلیکیشن | Define main App component
const App = () => {
  return (
    // قرار دادن Provider برای دسترسی به سبد خرید در کل برنامه | Wrap with CartProvider for global access
    <CartProvider>
      <Router>
        <Routes>
          {/* مسیر صفحه اصلی | Home page route */}
          <Route path="/" element={<Features />} />

          {/* مسیرهای مربوط به محصولات | Product routes */}
          <Route path="/desktop" element={<DesktopContent />} />
          <Route path="/laptop" element={<LaptopContent />} />
          <Route path="/mobile" element={<MobileContent />} />
          <Route path="/case" element={<Case />} />

          {/* مسیر سبد خرید | Cart page route */}
          <Route path="/cart" element={<Cart />} />

          {/* مسیر فروشگاه | Shop page route */}
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
