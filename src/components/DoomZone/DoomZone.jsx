import { useRef, useState, useEffect } from "react";
import "./DoomZone.css";

const DoomZone = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [error, setError] = useState(null);
  const dosRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadJsDos = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://v8.js-dos.com/latest/js-dos.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://v8.js-dos.com/latest/js-dos.js";
      script.async = true;
      script.onload = () => {
        if (isMounted && window.Dos) {
          console.log("js-dos v8 успешно загружен");
        }
      };
      script.onerror = () => {
        setError("Не удалось загрузить js-dos API");
        console.error("Ошибка загрузки скрипта js-dos");
      };
      document.body.appendChild(script);
    };

    loadJsDos();

    return () => {
      isMounted = false;
      if (dosRef.current) {
        dosRef.current.stop();
      }
    };
  }, []);

  const startGame = async () => {
    if (!containerRef.current) {
      setError("Контейнер для игры не найден");
      return;
    }

    if (!window.Dos) {
      setError("js-dos API еще не загружен");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const dos = window.Dos(containerRef.current, {
        url: "/doom.jsdos",
        muted: true,
      });

      dosRef.current = dos;

      const ci = await dos.run();
      console.log("DOOM запущен:", ci);

      ci.mute();

      setIsLoading(false);
      setIsGameStarted(true);
    } catch (err) {
      console.error("Ошибка запуска Doom:", err);
      setError("Не удалось запустить игру: " + err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="doom-zone-wrapper doom-zone">
      <h2>DOOM ZONE</h2>
      
      <div className="doom-game-container">
        {isLoading && (
          <div className="doom-loading">
            Игра загружается...
          </div>
        )}
        {error && (
          <div className="doom-error">
            {error}
          </div>
        )}
        {!isGameStarted && !isLoading && !error && (
          <button
            className="start-button"
            onClick={startGame}
          >
            Запустить игру
          </button>
        )}
        <div ref={containerRef} className="game-canvas" />
      </div>

      {isGameStarted && (
        <button
          className="fullscreen-button"
          onClick={() => dosRef.current?.fullscreen()}
        >
          Полноэкранный режим
        </button>
      )}
    </div>
  );
};

export default DoomZone;