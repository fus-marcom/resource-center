import React, { Component } from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Drawer from 'material-ui/Drawer'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import SideBarItem from './SideBarItem'

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

const styleSheet = createStyleSheet('SideNav', {
  list: {
    width: 250,
    flex: 'initial'
  },
  listFull: {
    width: 'auto',
    flex: 'initial'
  }
})

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: {
        left: false
      }
    }
  }

  toggleDrawer = (side, open) => {
    const drawerState = {}
    drawerState[side] = open
    this.setState({ open: drawerState })
  }

  handleLeftOpen = () => this.toggleDrawer('left', true)
  handleLeftClose = () => this.toggleDrawer('left', false)

  render () {
    return (
      <div>
        <ButtonAppBar />

        <Drawer
          open={this.state.open.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem
                isExact={link.isExact}
                linkTo={link.linkTo}
                primaryText={link.text}
                handleClose={this.handleLeftClose}
                key={i}
              />
            )
          })}
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SideNav)
