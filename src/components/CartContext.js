// ایمپورت کتابخانه‌های مورد نیاز | Import necessary libraries
import React, { createContext, useState, useEffect } from 'react';

// ایجاد context برای سبد خرید | Create context for cart
export const CartContext = createContext();

// تعریف provider برای مدیریت سبد خرید | Define provider to manage cart
export const CartProvider = ({ children }) => {
  // وضعیت سبد خرید | Cart state
  const [cart, setCart] = useState([]);

  // افزودن محصول به سبد خرید | Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      // اگر محصول قبلاً وجود داشته باشد، فقط تعداد را افزایش بده | If product exists, increase quantity
      setCart(cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // اگر محصول جدید باشد، به سبد اضافه کن با تعداد ۱ | If product is new, add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // حذف محصول از سبد خرید | Remove product from cart
  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct.quantity === 1) {
      // اگر فقط یکی باقی مانده باشد، حذف کامل شود | If only one left, remove completely
      setCart(cart.filter(item => item._id !== product._id));
    } else {
      // در غیر این صورت، فقط تعداد کاهش یابد | Otherwise, decrease quantity
      setCart(cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  // استفاده از useEffect برای نظارت بر تغییرات سبد خرید | useEffect to monitor cart changes
  useEffect(() => {
    // می‌توان برای ذخیره‌سازی محلی یا همگام‌سازی استفاده کرد | Can be used for local storage or syncing
  }, [cart]);

  // خروجی provider با مقادیر context | Return provider with context values
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
