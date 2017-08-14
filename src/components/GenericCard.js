import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
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
  constructor (props) {
    super(props)
    this.state = { depth: 1 }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }

  // From https://stackoverflow.com/a/37112044/4718107
  onMouseOver () {
    this.setState({ depth: 2 })
  }
  onMouseOut () {
    this.setState({ depth: 1 })
  }

  render () {
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
      classes,
      hoverable,
      link
    } = this.props

    const CardContent = (
      <Card className={classes} style={{ boxShadow: 'none' }}>
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
    return (
      <Paper
        zDepth={this.state.depth}
        onMouseOver={hoverable && this.onMouseOver}
        onMouseOut={hoverable && this.onMouseOut}
      >
        {link
          ? <Link to={link} isExact='true'>
            {' '}{CardContent}{' '}
          </Link>
          : CardContent}
      </Paper>
    )
  }
}

export default GenericCard
