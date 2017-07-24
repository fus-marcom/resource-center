import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'

injectTapEventPlugin()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
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
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <Route id='/'>Home View</Route>
          <Route id='/logos-posters'>Logos and Posters View</Route>
          <Route id='/logos'>Logos View</Route>
          <Route id='/posters'>Posters View</Route>
          <Route id='/letterhead'>Letterhead View</Route>
          <Route id='/share-a-story'>Share a Story View</Route>
          <Route id='/planning-guide'>Planning Guide View</Route>
          <Route id='/services'>Services View</Route>
          <Route id='/glossary'>Glossary View</Route>
          <Route id='/service-request-form'>Service Request Form View</Route>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
