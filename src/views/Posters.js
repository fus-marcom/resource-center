import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { Helmet } from 'react-helmet'

class Posters extends Component {
  state = {}
  render () {
    return (
      <div className='container'>
        <Helmet>
          <title>Posters | Resource Center</title>
        </Helmet>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>

          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Posters
