import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const videoImage = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="mediaObject" src={videoImage} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videoTitle}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
