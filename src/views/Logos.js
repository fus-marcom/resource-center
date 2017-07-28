import React, { Component } from 'react'
import { GenericCard } from './../components/GenericCard'
import { CardTitle } from 'material-ui/Card'

class Logos extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col m6'>
          <GenericCard
            headerTitle='Rohit Bhati'
            headerAvatar='http://via.placeholder.com/100x200'
            mediaImgSrc='http://via.placeholder.com/120x100'
            overlay={
              <CardTitle
                title='Nice job'
                subtitle='Congratulations on this great Achievement'
              />
            }
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
