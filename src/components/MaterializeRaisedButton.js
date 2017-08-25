import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class MaterializeRaisedButton extends Component {
  // We need to track the hovering ourselves because we cannot
  // control the styles of material-ui's RaisedButton only when
  // it is hovered. We override the styles all the time
  state = { hovered: false }

  render () {
    const overlayStyle = {
      // This style was just copied straight from inspecting
      // materialize's site with the chrome devtools
      transition: 'all .3s ease-out'
    }

    if (this.state.hovered) {
      // Materialize lightens the color using scss's lighten by 5%
      // https://github.com/Dogfalo/materialize/blob/master/sass/components/_variables.scss#L73
      // Here we do it by setting the overlay to be white
      // with 10% opacity (5% seems to not do very much)
      overlayStyle.backgroundColor = 'rgba(255,255,255, 0.10)'
      // This style was extracted using devtools as well
      overlayStyle.boxShadow =
        '0 3px 3px 0 rgba(0,0,0,0.14),' +
        '0 1px 7px 0 rgba(0,0,0,0.12),' +
        '0 3px 1px -1px rgba(0,0,0,0.2)'
    }

    // We pass all the props we receive straight to the underlying
    // component with {...this.props}
    return (
      <RaisedButton
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        overlayStyle={overlayStyle}
        {...this.props}
      />
    )
  }
}

export default MaterializeRaisedButton
