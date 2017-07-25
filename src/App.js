import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { theme } from 'material-ui/styles'

/* import fusTheme for custom theme and use it in theme attribute of MuiThemeProvider.
It'll change the theme of current home page from light to dark */

// import fusTheme from './fusTheme';

import SideNav from './SideNav'

/* Import Views */
import Glossary from './views/Glossary'
import Home from './views/Home'
import Letterhead from './views/Letterhead'
import Logos from './views/Logos'
import LogosPosters from './views/LogosPosters'
import PlanningGuide from './views/PlanningGuide'
import Posters from './views/Posters'
import ServiceRequest from './views/ServiceRequest'
import Services from './views/Services'
import Story from './views/Story'
import Tutorial from './views/Tutorial'
import NotFound from './views/NotFound'

injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div>
            <SideNav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/logos-posters' component={LogosPosters} />
              <Route path='/logos' component={Logos} />
              <Route path='/posters' component={Posters} />
              <Route path='/letterhead' component={Letterhead} />
              <Route path='/share-a-story' component={Story} />
              <Route path='/planning-guide' component={PlanningGuide} />
              <Route path='/services' component={Services} />
              <Route path='/glossary' component={Glossary} />
              <Route path='/service-request-form' component={ServiceRequest} />
              <Route path='/tutorial' component={Tutorial} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
