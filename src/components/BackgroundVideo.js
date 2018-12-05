import React, { Component } from 'react';
import VideoCover from 'react-video-cover';

class BackgroundVideo extends Component {
  render() {
    const videoOptions = {
      src: 'https://s3.us-east-2.amazonaws.com/horror-movie-mashup/horror_movie_background.m4v',
      ref: videoRef => {
        this.videoRef = videoRef;
      },
      autoPlay: true,
      loop: true,
      className: "fullscreen-bg__video",
    };
    return (
      <div style={{
        width: '1280px',
        height: '720px',
        overflow: 'hidden',
      }}>
        <VideoCover
          videoOptions={videoOptions}
        />
      </div>
    );
  }
}

export default BackgroundVideo;
