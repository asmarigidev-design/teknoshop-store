// ایمپورت کتابخانه‌های مورد نیاز | Import necessary libraries
import React from 'react';  
import './OriginalModal.css';  // وارد کردن فایل استایل | Import CSS file
import { FaTimes } from 'react-icons/fa';  // وارد کردن آیکون بستن | Import close icon

// تعریف کامپوننت OriginalModal | Define OriginalModal component
const OriginalModal = ({ showModal, setShowModal, product }) => {  
  // اگر مودال فعال نباشد، چیزی نمایش داده نمی‌شود | If modal is not active, return null
  if (!showModal) return null;  

  // خروجی کامپوننت | Component return
  return (  
    // لایه‌ی پس‌زمینه مودال | Modal overlay
    <div className="modal-overlay" onClick={() => setShowModal(false)}>  

      {/* محتوای مودال | Modal content */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>  

        {/* دکمه بستن مودال | Close modal button */}
        <button className="close-button" onClick={() => setShowModal(false)}>  
          <FaTimes />  
        </button>  

        {/* عنوان محصول | Product title */}
        <h2>{product.title}</h2>  

        {/* تصویر محصول | Product image */}
        <img src={product.images[0]} alt={product.title} className="modal-image" />  

        {/* توضیحات محصول | Product description */}
        <p>{product.description}</p>  

        {/* اطلاعات فنی محصول | Product technical details */}
        <div className="info-circle">  
          <h3>نوع باتری:</h3>  
          <p>{product.noebat}</p>  
          <h3>شارژدهی باتری:</h3>  
          <p>{product.sharrdehi}</p>  
          <h3>حسگرها:</h3>  
          <p>{product.hesgarha}</p>  
          <h3>سایر امکانات:</h3>  
          <p>{product.sayer}</p>  
        </div>  
      </div>  
    </div>  
  );  
};  

// خروجی کامپوننت | Export component
export default OriginalModal;
