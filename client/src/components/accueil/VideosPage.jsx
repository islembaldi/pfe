import React from "react";
import "./style.css";

function VideosPage() {
  return (
    <div>
      <h2>Vidéos</h2>
      <div className="video-container">
        <div className="video-wrapper">
          <h3>Titre de la vidéo 1</h3>
          <video controls>
            <source src="viedo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrapper">
          <h3>Titre de la vidéo 2</h3>
          <video controls>
            <source src="video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrapper">
          <h3>Titre de la vidéo 3</h3>
          <video controls>
            <source src="video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrapper">
          <h3>Titre de la vidéo 4</h3>
          <video controls>
            <source src="video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideosPage;
