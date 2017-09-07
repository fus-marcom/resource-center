import '../styles/App.css'
import '../styles/materialize-grid.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from '../components/fusTheme'

import SideNav from '../components/SideNav'

/* Import Views */
import Glossary from '../views/glossary'
import Home from '../views/Home'
import Letterhead from '../views/letterhead'
import Logos from '../views/Logos'
import NotFound from '../views/notFound'
import PlanningGuide from '../views/PlanningGuide'
import Posters from '../views/Posters'
import PosterVideos from '../views/posterVideos'
import ScrollIntoView from '../components/ScrollIntoView'
import ServiceRequest from '../views/ServiceRequest'
import Services from '../views/services'
import Story from '../views/story'
import Tutorial from '../views/Tutorial'

injectTapEventPlugin()

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollIntoView>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <SideNav />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route path='/logos' component={Logos} />
              <Route path='/posters' component={Posters} />
              <Route path='/letterhead' component={Letterhead} />
              <Route path='/share-a-story' component={Story} />
              <Route path='/planning-guide' component={PlanningGuide} />
              <Route path='/glossary' component={Glossary} />
              <Route path='/services' component={Services} />
              <Route path='/service-request-form' component={ServiceRequest} />
              <Route path='/tutorial' component={Tutorial} />
              <Route path='/poster-videos' component={PosterVideos} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </ScrollIntoView>
    </BrowserRouter>
  )
}

export default Routes
