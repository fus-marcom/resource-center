// eslint-disable-next-line
/* global onMouseOver onMouseOut */
/* eslint no-undef: "error" */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash/debounce'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

export class GenericCard extends Component {
  state = { depth: 1 }

  // From https://stackoverflow.com/a/37112044/4718107
  // debounce the function to 30 frames per second
  onMouseOver = debounce(() => {
    // don't mark the component as dirty by calling setState
    // if the value isn't going to change
    this.state.depth === 2 || this.setState({ depth: 2 })
  }, 32)

  onMouseOut = debounce(() => {
    this.state.depth === 1 || this.setState({ depth: 1 })
  }, 32)

  render () {
    const { link, className } = this.props
    /* Removed from Paper below:
      onMouseOver={hoverable && this.onMouseOver}
      onMouseOut={hoverable && this.onMouseOut}
    */
    const CardContent = ({
      actions,
      cardSubtitle,
      cardTitle,
      children,
      headerAvatar,
      headerSubtitle,
      headerTitle,
      hoverable,
      mediaImgAlt,
      mediaImgSrc,
      overlay,
      zDepth
    }) =>
      <Card
        className={`${className} card z-depth-1`}
        style={{ height: '100%' }}
      >
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
        {cardTitle &&
          <CardTitle
            title={cardTitle}
            subtitle={cardSubtitle}
            style={{ paddingBottom: '0' }}
          />}
        <CardText style={{ fontSize: '16px', paddingTop: '0' }}>
          {children}
        </CardText>
        {actions &&
          <CardActions className='card-actions'>
            {actions}
          </CardActions>}
      </Card>

    const isInternal = link && link[0] === '/'

    const jsx = link
      ? isInternal
        ? <Link to={link}>
          <CardContent {...this.props} zDepth={this.state.depth} />
        </Link>
        : <a href={link} target='_blank'>
          <CardContent {...this.props} zDepth={this.state.depth} />
        </a>
      : <CardContent {...this.props} zDepth={this.state.depth} />

    return jsx
  }
}

export default GenericCard
