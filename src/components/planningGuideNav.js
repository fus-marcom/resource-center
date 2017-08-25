import _ from 'lodash'
import React from 'react'
import { headerTitles, styles } from '../data/planningGuideServicesData'

const PlanningGuideNav = ({ activeSection, headerPositions, scrollToItem }) => {
  const { root } = styles
  return (
    <div style={root}>
      <ul>
        {_.map(headerTitles, ({ title }, key) => {
          return (
            <li
              key={key}
              className={activeSection === key && 'active'}
              onClick={() => scrollToItem(title)}
            >
              {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlanningGuideNav
