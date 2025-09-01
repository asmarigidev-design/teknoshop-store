// ایمپورت کتابخانه‌ها و context | Import libraries and context
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

// ایمپورت فایل استایل | Import CSS file
import './Cart.css'; // وارد کردن استایل‌ها | Import styles

// تعریف کامپوننت Cart | Define Cart component
const Cart = () => {
  // استفاده از context برای دسترسی به سبد خرید و توابع | Use context to access cart and functions
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // محاسبه مجموع قیمت کل | Calculate total price
  const totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  // خروجی کامپوننت | Component return
  return (
    <div className="cart-container">

      {/* بررسی خالی بودن سبد خرید | Check if cart is empty */}
      {cart.length === 0 ? (
        <p>  </p>
      ) : (
        <div>
          {/* نمایش آیتم‌های سبد خرید | Display cart items */}
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.images[0]} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.price.toLocaleString()} تومان</p>
                <p className='tedad'>تعداد: {product.quantity}</p>

                {/* دکمه افزایش تعداد | Increase quantity button */}
 <button onClick={() => addToCart(product)}>+</button>

{/* دکمه کاهش تعداد و هشدار حذف */}
<button className="remove-btn" onClick={() => {
  if (product.quantity === 1) {
    const confirmBox = document.getElementById('confirm-delete');
    if (confirmBox) {
      confirmBox.style.display = 'block';
    }
  } else {
    removeFromCart(product);
  }
}}>
  -
</button>

{/* کادر تأیید حذف */}
<div id="confirm-delete" className="confirm-box">
  <p>آیا از حذف مطمئن هستید؟</p>
  <button className="confirm-btn" onClick={() => {
    removeFromCart(product);
    document.getElementById('confirm-delete').style.display = 'none';
  }}>
    بله
  </button>
</div>


              </div>
            </div>
          ))}

          {/* نمایش مجموع قیمت | Display total price */}
          <h3 className="total-price">مجموع قیمت: {totalPrice.toLocaleString()} تومان</h3>
        </div>
      )}

      {/* پیام در صورت خالی بودن سبد خرید | Message if cart is empty */}
      {cart.length === 0 && <p className="cart-alert">سبد خرید خالی است.</p>}
    </div>
  );
};

// خروجی کامپوننت | Export component
export default Cart;
