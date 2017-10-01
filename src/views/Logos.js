import map from 'lodash/map'
import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Helmet } from 'react-helmet'
import { logos, tabs } from '../data/logoData.js'
import MasonryComp from '../components/masonryComp'
import '../styles/logos.css'
import { logPageView } from '../utils/analytics'
import { Tabs, Tab } from 'material-ui/Tabs'

class Logos extends Component {
  state = {
    activeTab: 'franciscan',
    data: logos,
    type: 'all'
  }

  componentDidMount = () => {
    logPageView()
  }

  handleChange = (event, index, value) => this.setState({ activeTab: value })

  handleTabChange = value => {
    this.setState({
      activeTab: value
    })
  }

  render () {
    const { activeTab } = this.state

    return (
      <div>
        <Helmet>
          <title>Logos | Resource Center</title>
        </Helmet>

        <Tabs
          value={activeTab}
          onChange={this.handleTabChange}
          className='hide-on-med-and-down'
        >
          {map(tabs, (tab, tabKey) => (
            <Tab label={tabs[tabKey]} value={tabKey} key={tabKey + 'tab'} />
          ))}
        </Tabs>

        <div className='row'>
          <div
            className='col s12 hide-on-large-only'
            style={{ textAlign: 'center' }}
          >
            <SelectField
              floatingLabelText='Logo Type'
              value={this.state.activeTab}
              onChange={this.handleChange}
              style={{ textAlign: 'left', width: '100%' }}
            >
              {map(tabs, (tab, tabKey) => (
                <MenuItem
                  value={tabKey}
                  primaryText={tabs[tabKey]}
                  key={tabKey}
                />
              ))}
            </SelectField>
          </div>
        </div>

        {/* For each tab, we generate a row */}
        {map(tabs, (tab, tabKey) => (
          <div className='row' style={{ marginBottom: 0 }} key={tabKey}>
            {/* We render masonry comp only if we are in current active tab key */}
            {activeTab === tabKey && (
              <MasonryComp
                data={this.state.data}
                activeTab={this.state.activeTab}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default Logos
