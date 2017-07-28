import React, { Component } from 'react'
import { GenericCard } from './../components/GenericCard'

class Logos extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col m6'>
          <GenericCard
            headerTitle='Hello'
            headerSubtitle='I am Rohit Bhati'
            headerAvatar='http://via.placeholder.com/140x100'
            mediaOverlayTitle='Happy Coding'
            mediaOverlaySubtitle="Hope you're enjoying"
            mediaImgSrc='http://via.placeholder.com/350x150'
            mediaImgAlt='Image'
            cardTitle='Nice one'
            cardSubtitle='Looking good'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            iusto, quis dignissimos fugiat qui architecto. Numquam illum dolor
            officia qui sit possimus sint quisquam provident, a laudantium
            reiciendis asperiores perferendis!
          </GenericCard>
        </div>
      </div>
    )
  }
}

export default Logos
