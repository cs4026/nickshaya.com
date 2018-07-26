import React, { Component } from 'react';

class VideoPage extends Component{
  render(){
    return(
      <div className="VideoPage">
        <div>
          <iframe src="https://player.vimeo.com/video/262777443" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <div>Co-directed with Alex Huggins</div>
        </div>
      </div>
    )
  }
}

export default VideoPage;
