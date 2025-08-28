// ایمپورت کتابخانه‌ها و فایل‌های مورد نیاز | Import required libraries and files
import React, { useEffect, useState } from 'react';  
import './Features.css';  
import logo from './ttt.jpg';  
import logoo from './mmm.jpg';  
import logooo from './c.webp';  
import logoooo from './lll.png';  
import AOS from 'aos';  
import 'aos/dist/aos.css';  
import { useNavigate } from 'react-router-dom'; // استفاده از useNavigate برای مسیریابی | Use useNavigate for navigation

// تعریف کامپوننت Features | Define Features component
const Features = () => {  
  const [buttonLink, setButtonLink] = useState('#'); // لینک پیش‌فرض دکمه | Default button link
  const navigate = useNavigate(); // استفاده از useNavigate | Use useNavigate

  // مقداردهی اولیه AOS برای انیمیشن‌ها | Initialize AOS for animations
  useEffect(() => {  
    AOS.init({ duration: 1000 });  
  }, []);  

  // تنظیم رفتار hover و کلیک روی spanها | Setup hover and click behavior on spans
  useEffect(() => {  
    const bg = document.querySelector('.bg');  
    const span = document.querySelectorAll('.text span');  
    const text = document.querySelector('.text');  
    const line = document.querySelector('#line');  

    span.forEach(item => {  
      // هندل کردن hover روی span | Handle hover on span
      item.addEventListener('mouseover', e => {  
        const id = item.getAttribute('data-id');  
        const bgEl = bg.querySelector(`.id-${id}`);  

        bg.querySelectorAll('img').forEach(img => {  
          img.style.display = 'none';  
        });  
        bgEl.style.display = 'block';  
        bgEl.style.animation = "animate 1s ease forwards";  

        const card = item.getBoundingClientRect();  
        const cardText = text.getBoundingClientRect();  

        line.style.width = card.width + 'px';  
        line.style.left = card.left - cardText.left + "px";  
      });  

      // هندل کردن کلیک روی span برای تعیین مسیر | Handle click on span to set route
      item.addEventListener('click', () => {  
        const deviceType = item.textContent.trim();  
        switch (deviceType) {  
          case 'تبلت':  
            setButtonLink('/mobile');  
            break;  
          case 'مانیتور':  
            setButtonLink('/desktop');  
            break;  
          case 'کیس':  
            setButtonLink('/case');  
            break; 
          case 'لپتاپ':  
            setButtonLink('/laptop');  
            break;  
          default:  
            setButtonLink('#');  
        }  
      });  
    });  
  }, []);  

  // هندل کردن کلیک روی دکمه برای مسیریابی | Handle button click for navigation
  const handleButtonClick = (e) => {  
    e.preventDefault();  
    navigate(buttonLink); // استفاده از navigate برای رفتن به مسیر | Use navigate to go to route
  };  

  // خروجی کامپوننت | Component return
  return (  
    <section id='features'>  
      <div className="container">  

        {/* نمایش تصاویر پس‌زمینه بر اساس انتخاب | Background images based on selection */}
        <div className="bg">  
          <img src={logo} alt='' className="id-1" />  
          <img src={logoo} alt='' className="id-2" />  
          <img src={logooo} alt='' className="id-3" />  
          <img src={logoooo} alt='' className="id-4" />  
        </div>  

        {/* عنوان فروشگاه | Shop title */}
        <div className='shopname'>
          <a href='/shop'>   
            <h2>فروشگاه تکنو دیجیتال </h2> 
          </a>         
        </div>

        {/* منوی انتخاب دستگاه‌ها | Device selection menu */}
        <div className="text">  
          <h1>  
            <span data-id="1" onClick={handleButtonClick}>تبلت </span>  
            <span data-id="2" onClick={handleButtonClick}>مانیتور</span>  
            <span data-id="3" onClick={handleButtonClick}>کیس</span>  
            <span data-id="4" onClick={handleButtonClick}>لپتاپ</span>  
            <span id="line"></span>  
          </h1>  
        </div>  
      </div>  
    </section>  
  );  
};  

// خروجی کامپوننت | Export component
export default Features;
