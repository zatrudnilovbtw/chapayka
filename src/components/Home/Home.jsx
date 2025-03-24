import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="chapa">Chapayka 23 | Видеомонтажер</h1>
      <div className="profile-container">
        <div className="statss">
          <p>Скорость монтажа: 90%</p>
          <p>Креативность: 100%</p>
          <p>Качество монтажа: 101%</p>
          <p>Коммуникабельность: 99%</p>
        </div>
        <img src="/avatar.jpg" alt="avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Home;
