import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

export class GenericCard extends Component {
  render () {
    const { link, className } = this.props
    const CardContent = ({
      actions,
      cardSubtitle,
      cardTitle,
      children,
      headerAvatar,
      headerSubtitle,
      headerTitle,
      mediaImgAlt,
      mediaImgSrc,
      overlay
    }) => (
      <Card
        className={`${className} card z-depth-1`}
        style={{ height: '100%' }}
      >
        {(headerTitle || headerAvatar) && (
          <CardHeader
            title={headerTitle}
            subtitle={headerSubtitle}
            avatar={headerAvatar}
          />
        )}

        {mediaImgSrc && (
          <CardMedia className='img-container' overlay={overlay}>
            <img src={mediaImgSrc} alt={mediaImgAlt} />
          </CardMedia>
        )}
        {cardTitle && (
          <CardTitle
            title={cardTitle}
            subtitle={cardSubtitle}
            style={{ paddingBottom: '0' }}
          />
        )}
        <CardText style={{ fontSize: '16px', paddingTop: '0' }}>
          {children}
        </CardText>
        {actions && (
          <CardActions className='card-actions'>{actions}</CardActions>
        )}
      </Card>
    )

    const isInternal = link && link[0] === '/'

    const jsx = link ? isInternal ? (
      <Link to={link}>
        <CardContent {...this.props} />
      </Link>
    ) : (
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <CardContent {...this.props} />
      </a>
    ) : (
      <CardContent {...this.props} />
    )

    return jsx
  }
}

export default GenericCard
