import _ from 'lodash'
import React from 'react'
import LetterheadCard from '../components/letterheadCard'
import { letterheadData } from '../data/letterheadData'
import { Helmet } from 'react-helmet'

const Letterhead = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Letterhead | Resource Center</title>
      </Helmet>
      <div className='row'>
        <div className='col s12'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className='row'>
        {_.map(letterheadData, ({ image }, key) => {
          return (
            <LetterheadCard
              key={key}
              title='Card title'
              action='Action1'
              image={image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Letterhead
