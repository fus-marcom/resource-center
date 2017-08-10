import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import '../styles/logos.css'

class Logos extends Component {
  state = {
    activeTab: 'all',
    data: [
      { type: 'audio' },
      { type: 'text' },
      { type: 'video' },
      { type: 'audio' }
    ],
    type: 'all'
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      text: 'Text',
      video: 'Video'
    }

    const massonryComp = (
      <Masonry>
        {this.state.data
          .filter(post => activeTab === 'all' || activeTab === post.type)
          .map((post, i) =>
            <div className='col s12 m6 l4 xl3' key={i}>
              <img
                src='https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/FranciscanLogo/LogoStC-thumb.jpg'
                alt='Franciscan Logo'
              />
            </div>
          )}
      </Masonry>
    )
    return (
      <div>
        <div className='row'>
          <div className='col s12'>
            <ul className='tabs'>
              {Object.keys(tabs).map(tabKey =>
                <li className='tab' key={tabKey + 'li'}>
                  <a
                    key={tabKey}
                    href={'#' + tabKey}
                    className={tabKey === activeTab && 'active'}
                    onClick={() => this.setState({ activeTab: tabKey })}
                  >
                    {tabs[tabKey]}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* For each tab, we generate a row */}
        {Object.keys(tabs).map(tabKey =>
          <div className='row' style={{ marginBottom: 0 }} key={tabKey}>
            {/* We render masonry comp only if we are in current active tab key */}
            {activeTab === tabKey && massonryComp}
          </div>
        )}
      </div>
    )
  }
}

export default Logos
