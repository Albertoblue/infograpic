import React from 'react';
import YouTube from 'react-youtube';

function YoutubeVideo() {
  const videoId = "1k6wvy_yy_g"; // Reemplaza con el ID de tu video

  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default YoutubeVideo;
