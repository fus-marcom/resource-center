import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

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
          <div className='col s12 m6' style={{ paddingBottom: '0.75rem' }}>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6' style={{ paddingBottom: '0.75rem' }}>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6' style={{ paddingBottom: '0.75rem' }}>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>

          <div className='col s12 m6' style={{ paddingBottom: '0.75rem' }}>
            <Card>
              <CardMedia>
                <img src='https://unsplash.it/600/776/?random' alt='' />
              </CardMedia>
              <CardTitle title='Card title' />
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Letterhead
