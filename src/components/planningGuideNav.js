import map from 'lodash/map'
import React from 'react'
import { headerTitles, styles } from '../data/planningGuideServicesData'

const PlanningGuideNav = ({ activeSection, scrollToItem }) => {
  const { root } = styles
  return (
    <div className='scroll-spy' style={root}>
      <ul className='scroll-spy-nav'>
        {map(headerTitles, ({ title }, key) => {
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
