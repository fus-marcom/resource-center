import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

class SideBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  render () {
    return (
      <NavLink
        activeClassName='active'
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <MenuItem
          primaryText={this.props.primaryText}
          onTouchTap={this.props.handleClose}
          hoverColor='#eee'
        />
      </NavLink>
    )
  }
}

export default SideBarItem
