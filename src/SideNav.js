import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

/*
  Add you nav links here..
    isExact: if true it will be an exact path
    linkTo: the path you want to go
    text: title of the nav item
*/

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/logos', text: 'Logos' },
  { isExact: false, linkTo: '/posters', text: 'Posters' },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead' },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story' },
  {
    isExact: false,
    linkTo: '/service-request-form',
    text: 'Service Request Form'
  },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' }
]

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
        <AppBar
          title='Title'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map((link, i) => {
            return (
              <NavLink
                activeClassName='active'
                exact={link.isExact}
                to={link.linkTo}
                key={i}
              >
                <MenuItem
                  onTouchTap={this.handleClose}
                  primaryText={link.text}
                />
              </NavLink>
            )
          })}
        </Drawer>
      </div>
    )
  }
}

export default SideNav
