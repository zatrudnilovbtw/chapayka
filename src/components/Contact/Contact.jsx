import React from 'react';
import './Contact.css';



const Contact = () => {
  return (
    <>
      <div className="contacts">
        <h2>Контакты</h2>
        <p>Telegram: <a href="https://t.me/VadimChaplinskiy23" target="_blank" rel="noopener noreferrer">@VadimChaplinskiy23</a></p>
        <p>Email: <a href="mailto:chapayka00@gmail.com">chapayka23@mail.ru</a></p>
        <div className='logos'>
          <a href="https://www.instagram.com/chapayka23?igsh=MTNwMWN4eXhsemMzdg%3D%3D&utm_source=qr">
            <img src="instagram.png" alt="insta" />
          </a>
          <a href="https://www.youtube.com/@chapayka23">
            <img src="youtube.png" alt="yt" />
          </a>
          <a href="https://www.tiktok.com/@chapayka23?_t=ZP-8vmLOjt4n4p&_r=1">
            <img src="tiktok.png" alt="yt" />
          </a>

        </div>
      </div>
    </>
  );
};

export default Contact;