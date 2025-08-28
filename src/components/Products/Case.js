// ایمپورت کتابخانه‌های مورد نیاز | Import necessary libraries
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

// ایمپورت فایل‌های CSS | Import CSS files
import './MobileContent.css';
import './Products.css';

// ایمپورت داده‌ها و کامپوننت‌های دیگر | Import data and other components
import { DATAPRODUCTTTT } from '../testimonialsSlider/data';
import TestimonialsSlider from '../testimonialsSlider/TestimonialsSlider'; 
import OriginalModal from '../OriginalModal/OriginalModal'; 
import CustomModal from '../CustomModal/CustomModal';

// ایمپورت آیکون‌ها | Import icons
import { FaShoppingCart, FaHome, FaStore } from 'react-icons/fa'; 

// تعریف کامپوننت Case | Define Case component
const Case = () => {  
  // استفاده از context برای مدیریت سبد خرید | Use context for cart management
  const { cart, addToCart } = useContext(CartContext);

  // مدیریت وضعیت مودال‌ها و انتخاب محصول | Manage modal states and selected product
  const [showProductModal, setShowProductModal] = useState(false);
  const [showTestimonialsModal, setShowTestimonialsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState({});
  const [currentProductId, setCurrentProductId] = useState(null);

  // وقتی روی محصول کلیک می‌شود | When a product is clicked
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  // وقتی موس روی تصویر می‌رود | When mouse enters image
  const handleImageMouseEnter = (productId, imageIndex) => {
    setHoveredImageIndex((prev) => ({ ...prev, [productId]: imageIndex }));
  };

  // وقتی موس از تصویر خارج می‌شود | When mouse leaves image
  const handleImageMouseLeave = (productId) => {
    setHoveredImageIndex((prev) => ({ ...prev, [productId]: 0 }));
  };

  // وقتی روی نظرات مشتریان کلیک می‌شود | When testimonials are clicked
  const handleTestimonialsClick = (productId) => {
    setSelectedProduct(null);
    setShowTestimonialsModal(true);
    setCurrentProductId(productId);
  };

  // خروجی کامپوننت | Component return
  return (
    <div>
      {/* منوی بالای صفحه شامل لینک‌ها | Top menu with links */}
      <div className='basket'>
        <Link to="/">
          <FaHome className="basket-icon" />
        </Link>
        <Link to="/shop">  
          <FaStore className="basket-icon" />
        </Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="basket-icon" />
          {cart.length > 0 && <span className="basket-count">{cart.length}</span>}
        </Link>
      </div>

      {/* نمایش محصولات | Display products */}
      <div className="products">
        {DATAPRODUCTTTT.map(product => (
          <div className="card" key={product._id}>
            <div className="specifications">
              <img
                src={product.images[hoveredImageIndex[product._id] || 0]}
                alt={product.title}
                onMouseEnter={() => handleImageMouseEnter(product._id, 1)}
                onMouseLeave={() => handleImageMouseLeave(product._id)}
              />
            </div>
                  {/*role attribute tells assistive tech what the element does—for example, role="button" makes a <div> act like a button // ویژگی role به ابزارهای کمکی می‌گه عنصر چه نقشی داره؛ مثلاً role="button" باعث می‌شه <div> مثل دکمه رفتار کنه
*/}
            <div className="box">
              <h3>
             <div className="specifications" onClick={() => handleProductClick(product)} role="button" tabIndex={0}>
{product.title}</div>
              </h3>
              <h5 onClick={() => handleTestimonialsClick(product._id)}>نظرات مشتریان</h5>
              <h4>{product.price.toLocaleString()} تومان</h4>
              <button onClick={() => addToCart(product)}>افزودن به سبد خرید</button>
            </div>
          </div>
        ))}
      </div>

      {/* مودال نمایش محصول | Product modal */}
      {selectedProduct && (
        <OriginalModal showModal={showProductModal} setShowModal={setShowProductModal} product={selectedProduct} />
      )}

      {/* مودال نظرات مشتریان | Testimonials modal */}
      {showTestimonialsModal && currentProductId && (
        <CustomModal showModal={showTestimonialsModal} setShowModal={setShowTestimonialsModal}>
          <TestimonialsSlider productId={currentProductId} />  
        </CustomModal>
      )}
    </div>
  );
};

// خروجی کامپوننت | Export component
export default Case;
