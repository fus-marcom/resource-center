import React from 'react'
import '../styles/video.css'

const PosterVideos = () =>
  <div className='container'>
    <div className='row'>
      {/* Guess 64px the first render, then immediately adjust
          to a proper calculated value.
          This prevents the layout from breaking should the AppBar
      ever change to anything other than 64px. */}
      <div className='col s12 flow-text'>
        <h2>Poster Video Tutorials</h2>
      </div>
      <div className='col s12'>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Powerpoint</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/A4qXONix2aQ?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Publisher</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/xFFDn5zSS5A?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Photoshop</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/Nsm56J4m984?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>InDesign</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/UePNxR_VUuY?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
      </div>
    </div>
  </div>

export default PosterVideos
