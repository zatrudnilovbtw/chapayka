import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const videos = [
    {
      id: 1,
      title: "Fortnite",
      thumbnail: "https://i.ytimg.com/vi/hZeh1ym2Nv4/hqdefault.jpg",
      url: "https://youtu.be/hZeh1ym2Nv4?si=0qaf4F7IR3XUjM4-",
      type: "fullscreen"
    },
    {
      id: 2,
      title: "Dota 2",
      thumbnail: "https://i.ytimg.com/vi/VDuYEucJc54/hqdefault.jpg",
      url: "https://youtu.be/VDuYEucJc54?si=Jl7wKFIep3R9qH9y",
      type: "fullscreen"
    },
    {
      id: 3,
      title: "Rainbow Six Siege",
      thumbnail: "https://i.ytimg.com/vi/OIqvyjTyyoc/hqdefault.jpg",
      url: "https://youtu.be/OIqvyjTyyoc?si=ncakIaGY0OeIZlK1",
      type: "fullscreen"
    },
    {
      id: 4,
      title: "Ignoring by woman",
      thumbnail: "v1.png",
      url: "https://youtube.com/shorts/kDfJ-hW5EvE",
      type: "vertical"
    },
    {
      id: 5,
      title: "Отрывок из фильма",
      thumbnail: "v2.png",
      url: "https://youtube.com/shorts/j-Em1k4hwcI",
      type: "vertical"
    },
    {
      id: 6,
      title: "Южный парк",
      thumbnail: "v3.png",
      url: "https://youtube.com/shorts/j-Em1k4hwcI",
      type: "vertical"
    },
  ];
  const tools = ["Adobe Premiere Pro", "After Effects", "Sony Vegas"];
  
  // Фильтруем видео по типу
  const fullscreenVideos = videos.filter(video => video.type === "fullscreen");
  const verticalVideos = videos.filter(video => video.type === "vertical");
  
  return (
    <div className="portfolio">
      <h2>Портфолио</h2>

      <h3 className="subheading">Полноэкранные видео</h3>
      <div className="video-gallery">
        {fullscreenVideos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </div>
        ))}
      </div>

      <h3 className="subheading">Вертикальные видео (shorts)</h3>
      <div className="video-gallery">
        {verticalVideos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </div>
        ))}
      </div>

      {/* Подраздел "Инструменты" с якорем для прокрутки */}
      <h3 className="subheading" id="tools">
        Инструменты которыми я пользуюсь:
      </h3>
      <div className="tools-list">
        {tools.map((tool, index) => (
          <p key={index}>{tool}</p>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
