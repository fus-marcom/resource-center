import React, { Component } from 'react'
import LetterheadCard from '../LetterheadCard'

class Letterhead extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='row'>
          <LetterheadCard
            title='Card title'
            action='Action1'
            image='https://unsplash.it/600/776/?random=1'
          />
          <LetterheadCard
            title='Card title'
            action='Action1'
            image='https://unsplash.it/600/776/?random=2'
          />
          <LetterheadCard
            title='Card title'
            action='Action1'
            image='https://unsplash.it/600/776/?random=3'
          />
          <LetterheadCard
            title='Card title'
            action='Action1'
            image='https://unsplash.it/600/776/?random=4'
          />
        </div>
      </div>
    )
  }
}

export default Letterhead
