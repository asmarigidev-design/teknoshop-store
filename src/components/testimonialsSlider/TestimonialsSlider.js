// ایمپورت کتابخانه‌ها و داده‌ها | Import libraries and data
import React, { useState } from 'react';
import './TestimonialsSlider.css';
import { DATAPRODUCT, DATAPRODUCTT, DATAPRODUCTTT, DATAPRODUCTTTT } from './data'; 

// تعریف کامپوننت TestimonialsSlider | Define TestimonialsSlider component
const TestimonialsSlider = ({ productId }) => {
  let product;

  // انتخاب محصول بر اساس بازه‌ی شناسه | Select product based on ID range
  if (productId >= 1 && productId <= 8) {
    product = DATAPRODUCT.find(p => p._id === productId.toString());
  } else if (productId >= 9 && productId <= 16) {
    product = DATAPRODUCTT.find(p => p._id === productId.toString());
  } else if (productId >= 17 && productId <= 24) {
    product = DATAPRODUCTTT.find(p => p._id === productId.toString());
  } else if (productId >= 25 && productId <= 32) {
    product = DATAPRODUCTTTT.find(p => p._id === productId.toString());
  }

  // دریافت نظرات مشتریان محصول | Get product testimonials
  const slides = product ? product.testimonials : [];

  // وضعیت اسلاید فعال | Active slide state
  const [activeSlide, setActiveSlide] = useState(0);

  // هندل کردن کلیک روی اندیکاتور | Handle indicator click
  const handleIndicatorClick = (id) => {
    setActiveSlide(id);
  };

  // خروجی کامپوننت | Component return
  return (
    <div className="container">
      <div className="testimonials">

        {/* نمایش اسلایدها | Display slides */}
        <div className="slider">
          {slides.map((slide, index) => (
            <div key={slide.clientName} className={`slide ${index === activeSlide ? 'active' : ''}`}>
              <div className="client-info">
                <h3>{slide.clientName}</h3>
              </div>
              <h3>{slide.content}</h3>
            </div>
          ))}
        </div>

        {/* اندیکاتورهای اسلایدر | Slider indicators */}
        <div className="slider-indicator">
          {slides.map((slide, index) => (
            <img
              key={slide.clientName}
              src={slide.clientImage}
              alt={`Client ${slide.clientName}`}
              data-id={index}
              className={activeSlide === index ? 'active' : ''}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// خروجی کامپوننت | Export component
export default TestimonialsSlider;
