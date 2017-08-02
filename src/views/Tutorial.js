import React from 'react'
import '../styles/video.css'

const Tutorial = props =>
  <div className='container'>
    <div className='row'>
      <div
        className='col s12 valign-wrapper'
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <div>
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
          <p className='btm-margin-20'>
            If you have any problems using the MarCom Resource Center, please
            contact Jesse Weigel at{' '}
            <a href='mailto:jweigel@franciscan.edu'>
              jweigel@franciscan.edu
            </a>{' '}
            or <a href='tel:17402845305'> 740-284-5305</a>.
          </p>
        </div>
      </div>
    </div>
  </div>

export default Tutorial
