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
        <div style={{ width: '100%' }} className='flow-text'>
          <h3>Powerpoint</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Powerpoint</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Powerpoint</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
              width='853'
              height='480'
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              title='tutorial-video'
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <h3 className='flow-text'>Powerpoint</h3>
          <div className='video-container z-depth-1'>
            <iframe
              src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
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
