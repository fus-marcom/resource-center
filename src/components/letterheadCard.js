import React from 'react'
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { logEvent } from '../utils/analytics'

const LetterheadCard = ({ image, title, url, actionText }) => {
  return (
    <div
      className='col s12 m6 letterhead-card'
      style={{ paddingBottom: '0.75rem' }}
    >
      <Card>
        <CardMedia>
          <img src={image} alt={title} />
        </CardMedia>
        <CardTitle title={title} />
        <CardActions>
          <FlatButton
            label={actionText}
            href={url}
            onClick={() => logEvent('Letterhead Download', title)}
          />
        </CardActions>
      </Card>
    </div>
  )
}

export default LetterheadCard
