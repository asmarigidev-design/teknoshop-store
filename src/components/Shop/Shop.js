// ایمپورت کتابخانه‌ها و فایل‌های مورد نیاز | Import required libraries and files
import React from 'react';  
import './Shop.css'; // فایل CSS ماژول | Import CSS module
import { FaHome } from 'react-icons/fa'; // وارد کردن آیکون | Import icon
import { Link } from 'react-router-dom'; // لینک‌دهی داخلی | Internal routing

// تعریف کامپوننت Shop | Define Shop component
const Shop = () => {  
  // خروجی کامپوننت | Component return
  return (  
    <div className="shop-background"> {/* استفاده از دایو برای اعمال استایل‌های خاص | Wrapper with background styling */}  
      <div className="shop-container">  

        {/* هدر فروشگاه | Shop header */}
        <header className="shop-header">  
          {/* قرار دادن آیکون در بالای عنوان | Display icon above title */}  
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>  
            <a href='/'> <FaHome size={40} color="#d9534f" /> </a>
          </div>  

          {/* عنوان فروشگاه | Shop title */}
          <h1>فروشگاه آنلاین تکنو دیجیتال</h1>  

          {/* توضیحات فروشگاه | Shop description */}
          <p>  
            در تکنو دیجیتال, ما به شما بهترین و باکیفیت‌ترین محصولات دنیای تکنولوژی را ارائه می‌دهیم.   
            فروشگاه ما شامل مجموعه‌ای گسترده از مانیتورها، لپ‌تاپ‌ها، کیس‌ها و تبلت‌های کامپیوتری است که به تمامی نیازهای شما پاسخ می‌دهند.  
          </p>  
        </header>  

        {/* بخش معرفی محصولات | Product categories section */}
        <section className="shop-info">  
          <h2>محصولات ما</h2>  
          <ul>  
            <li>
              <Link to="/desktop">
                <strong>مانیتورها:</strong> انواع مانیتورهای LED، LCD با کیفیت تصویر فوق‌العاده و طراحی‌های مدرن.
              </Link>
            </li>  
            <li>
              <Link to="/laptop">
                <strong>لپ‌تاپ‌ها:</strong> لپ‌تاپ‌های مناسب برای کارهای روزمره، گیمینگ و حرفه‌ای با مشخصات متنوع.
              </Link>
            </li>  
            <li>
              <Link to="/case">
                <strong>کیس‌ها:</strong> کیس‌های مدرن و متنوع برای کامپیوتر، با امکان انتخاب قطعات مناسب.
              </Link>
            </li>  
            <li>
              <Link to="/mobile">
                <strong>تبلت‌ها:</strong> تبلت‌های با کاربری آسان و مناسب برای مطالعه، سرگرمی و کار.
              </Link>
            </li>  
          </ul>  
        </section>

        {/* بخش ویژگی‌های فروشگاه | Shop features section */}
        <section className="shop-features">  
          <h2>ویژگی‌ها</h2>  
          <ul>  
            <li>خدمات مشاوره رایگان برای انتخاب بهترین محصول.</li>  
            <li>ارسال سریع و مطمئن در کل کشور.</li>  
            <li>گارانتی و خدمات پس از فروش عالی.</li>  
            <li>تخفیف‌ها و پیشنهادات ویژه برای مشتریان وفادار.</li>  
          </ul>  
        </section>  

        {/* بخش تجربه خرید | Shopping experience section */}
        <section className="shop-experience">  
          <h2>خریدی مطمئن</h2>  
          <p>  
            ما در تکنو دیجیتال, به شما تجربه خریدی مطمئن و لذت‌بخش را ارائه می‌دهیم.   
            تمامی محصولات ما با ضمانت کیفیت ارائه می‌شوند و تیم پشتیبانی ما آماده پاسخگویی به سوالات و مشکلات شماست.   
            از طریق وب‌سایت ما به راحتی می‌توانید به اطلاعات محصولات دسترسی پیدا کنید و خرید خود را انجام دهید.  
          </p>  
        </section>  

        {/* فوتر فروشگاه | Shop footer */}
        <footer className="footer">  
          <p>برای دریافت اطلاعات بیشتر و دیدن محصولات، به وب‌سایت ما مراجعه کنید</p>  
        </footer>  
      </div>  
    </div>  
  );  
};  

// خروجی کامپوننت | Export component
export default Shop;
