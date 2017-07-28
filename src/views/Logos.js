import React, { Component } from 'react'
import { GenericCard } from './../components/GenericCard'
import { CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Logos extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col m6'>
          <GenericCard
            headerTitle='Rohit Bhati'
            headerAvatar='http://via.placeholder.com/100x200'
            mediaImgSrc='http://via.placeholder.com/120x100'
            overlay={<CardTitle title='Good job' subtitle='Keep it up' />}
            cardTitle='Nice one'
            cardSubtitle='Looking good'
            actions={
              <div>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </div>
            }
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
