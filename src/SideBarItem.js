import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

class SideBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <NavLink
        activeClassName='active'
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <MenuItem onTouchTap={this.handleClose} primaryText={this.props.text} />
      </NavLink>
    )
  }
}

export default SideBarItem
