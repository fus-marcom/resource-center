import React from 'react'
import { posterVideos } from '../data/posterVideosData'
import '../styles/video.css'

const PosterVideos = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 flow-text'>
          <h2>Poster Video Tutorials</h2>
        </div>
        {posterVideos.map((video, key) => {
          return (
            <div key={key} className='col s12'>
              <div style={{ width: '100%' }}>
                <h3 className='flow-text'>
                  {video.title}
                </h3>
                <div className='video-container z-depth-1'>
                  <iframe
                    src={video.url}
                    width='853'
                    height='480'
                    frameBorder='0'
                    allowFullScreen='allowfullscreen'
                    title='tutorial-video'
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PosterVideos
