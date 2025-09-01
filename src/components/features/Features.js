import React, { useEffect, useState } from 'react';
import './Features.css';
import logo from './ttt.jpg';
import logoo from './mmm.jpg';
import logooo from './c.webp';
import logoooo from './lll.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const [buttonLink, setButtonLink] = useState('#');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const bg = document.querySelector('.bg');
    const span = document.querySelectorAll('.text span');
    const text = document.querySelector('.text');
    const line = document.querySelector('#line');

    const isMobile = window.innerWidth <= 768;

    span.forEach(item => {
      let clickCount = 0;

      const showHoverEffect = () => {
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
      };

      const handleNavigation = () => {
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
      };

      if (isMobile) {
        item.addEventListener('click', () => {
          clickCount++;

          if (clickCount === 1) {
            showHoverEffect();
            setTimeout(() => clickCount = 0, 600); // ریست بعد از 600ms
          } else if (clickCount === 2) {
            handleNavigation();
            clickCount = 0;
          }
        });
      } else {
        item.addEventListener('mouseover', showHoverEffect);
        item.addEventListener('click', handleNavigation);
      }
    });
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate(buttonLink);
  };

  return (
    <section id='features'>
      <div className="container">
        <div className="bg">
          <img src={logo} alt='' className="id-1" />
          <img src={logoo} alt='' className="id-2" />
          <img src={logooo} alt='' className="id-3" />
          <img src={logoooo} alt='' className="id-4" />
        </div>

        <div className='shopname'>
          <a href='/shop'>
            <h2>فروشگاه تکنو دیجیتال </h2>
          </a>
        </div>

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

export default Features;
