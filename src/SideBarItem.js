import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class SideBarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <NavLink
        activeClassName="active"
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <ListItem
          hoverColor="red"
          primaryText={this.props.primaryText}
          onTouchTap={this.props.handleClose}
          hoverColor='#eee'
        />
      </NavLink>
    )
  }
}

export default SideBarItem
