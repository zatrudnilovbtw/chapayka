import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const videos = [
    {
      id: 1,
      title: "Fortnite",
      thumbnail: "https://i.ytimg.com/vi/hZeh1ym2Nv4/hqdefault.jpg",
      url: "https://youtu.be/hZeh1ym2Nv4?si=0qaf4F7IR3XUjM4-",
    },
    {
      id: 2,
      title: "Dota 2",
      thumbnail: "https://i.ytimg.com/vi/VDuYEucJc54/hqdefault.jpg",
      url: "https://youtu.be/VDuYEucJc54?si=Jl7wKFIep3R9qH9y",
    },
    {
      id: 3,
      title: "Rainbow Six Siege",
      thumbnail: "https://i.ytimg.com/vi/OIqvyjTyyoc/hqdefault.jpg",
      url: "https://youtu.be/OIqvyjTyyoc?si=ncakIaGY0OeIZlK1",
    },
  ];
  const tools = ["Adobe Premiere Pro", "After Effects", "Sony Vegas"];
  return (
    <div className="portfolio">
      <h2>Портфолио</h2>

      <h3 className="subheading">Пример моих работы</h3>
      <div className="video-gallery">
        {videos.map((video) => (
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
