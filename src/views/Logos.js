import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { GenericCard } from './../components/GenericCard'
import FlatButton from 'material-ui/FlatButton'
import '../styles/logos.css'
import { logos } from '../data/logoData.js'

class Logos extends Component {
  state = {
    activeTab: 'all',
    data: logos,
    type: 'all'
  }

  render () {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      alumni: 'Alumni',
      athletics: 'Athletics',
      austrian: 'Austrian',
      conference: 'Conference',
      franciscan: 'Franciscan',
      grad: 'Grad School',
      iheart: 'IHeart',
      online: 'Online',
      pilgrimages: 'Pilgrimages',
      press: 'Press',
      seal: 'Seal',
      yom: 'Year of Mercy'
    }

    const massonryComp = (
      <Masonry>
        {this.state.data
          .filter(logo => activeTab === 'all' || activeTab === logo.category)
          .map((logo, i) =>
            <div className='col s12 m6 l4 xl3' key={i}>
              <GenericCard
                mediaImgSrc={
                  'https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/' +
                  logo.thumbnailUrl
                }
                actions={
                  <div>
                    <FlatButton label='JPG' />
                    <FlatButton label='PSD' />
                  </div>
                }
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
