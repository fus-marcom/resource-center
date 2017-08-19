import React from 'react'
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const LetterheadCard = props => {
  return (
    <div
      className='col s12 m6 letterhead-card'
      style={{ paddingBottom: '0.75rem' }}
    >
      <Card>
        <CardMedia>
          <img src={props.image} alt={props.title} />
        </CardMedia>
        <CardTitle title={props.title} />
        <CardActions>
          <FlatButton label={props.action} />
        </CardActions>
      </Card>
    </div>
  )
}

export default LetterheadCard
