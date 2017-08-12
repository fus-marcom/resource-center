import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

export const GenericCard = props => {
  const {
    headerTitle,
    headerSubtitle,
    headerAvatar,
    mediaImgSrc,
    mediaImgAlt,
    overlay,
    cardTitle,
    cardSubtitle,
    actions,
    children,
    classes
  } = props

  return (
    <Card className={classes}>
      {(headerTitle || headerAvatar) &&
        <CardHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          avatar={headerAvatar}
        />}
      {mediaImgSrc &&
        <CardMedia className='img-container' overlay={overlay}>
          <img src={mediaImgSrc} alt={mediaImgAlt} />
        </CardMedia>}
      {cardTitle && <CardTitle title={cardTitle} subtitle={cardSubtitle} />}
      <CardText style={{ fontSize: '16px' }}>
        {children}
      </CardText>
      {actions &&
        <CardActions className='card-actions'>
          {actions}
        </CardActions>}
    </Card>
  )
}
