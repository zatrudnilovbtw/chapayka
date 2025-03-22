import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    const audio = new Audio("/sound.wav"); // Путь к звуку
    audio.volume = 0.01; // Громкость
    audio.play();
  };

  return (
    <header className="doom-header">
      <h1 className="header-logo">Chapayka 23</h1>
      <nav>
        <button onClick={() => scrollToSection("home")}>Главная</button>
        <button onClick={() => scrollToSection("portfolio")}>Портфолио</button>
        <button onClick={() => scrollToSection("doom")}>Зона Doom</button>
        <button onClick={() => scrollToSection("contact")}>Контакты</button>
      </nav>
    </header>
  );
};

export default Header;