import _ from 'lodash'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './sideBarItem'
import { List } from 'material-ui/List'
import links from '../data/linksData'

class SideNav extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
        <AppBar
          title={
            <img
              src={require('./../img/fus-log.svg')}
              alt='Franciscan University Logo'
            />
          }
          className='app-bar'
          iconElementRight={
            <h1 className='hide-on-small-only'>Resource Center</h1>
          }
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
          style={{ backgroundColor: '#fff', color: '#21412a' }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            {_.map(links, ({ isExact, linkTo, text }, key) => {
              return (
                <SideBarItem
                  isExact={isExact}
                  linkTo={linkTo}
                  primaryText={text}
                  onClick={this.handleClose}
                  key={key}
                />
              )
            })}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default SideNav
