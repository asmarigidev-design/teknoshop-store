// ایمپورت کتابخانه‌های مورد نیاز | Import necessary libraries
import React from 'react';
import './CustomModal.css'; // وارد کردن فایل استایل | Import CSS file

// تعریف کامپوننت CustomModal | Define CustomModal component
const CustomModal = ({ showModal, setShowModal, product, children }) => {
  // اگر مودال فعال نباشد، چیزی نمایش داده نمی‌شود | If modal is not active, return null
  if (!showModal) return null;

  // خروجی کامپوننت | Component return
  return (
    // لایه‌ی پس‌زمینه مودال | Modal overlay
    <div className="custom-modal-overlay" onClick={() => setShowModal(false)}>
      
      {/* محتوای مودال | Modal content */}
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* اگر محصول وجود داشته باشد، اطلاعات آن نمایش داده می‌شود | If product exists, show its details */}
        {product ? (
          <>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price.toLocaleString()} تومان</p>
          </>
        ) : (
          // در غیر این صورت، محتوای children نمایش داده می‌شود | Otherwise, show children content
          children
        )}

      
      </div>
    </div>
  );
};

// خروجی کامپوننت | Export component
export default CustomModal;
