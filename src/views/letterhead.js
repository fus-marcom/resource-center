import map from 'lodash/map'
import React from 'react'
import { Helmet } from 'react-helmet'
import LetterheadCard from '../components/letterheadCard'
import letterheadData from '../data/letterheadData'

const Letterhead = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Letterhead | Resource Center</title>
      </Helmet>
      <div className='row flow-text'>
        <div className='col s12'>
          <h2 style={{ marginBottom: 0 }}>Letterhead</h2>
        </div>
        <div className='col s12'>
          <p>
            Father Sean Sheridan, TOR, has approved an official Franciscan
            University letter-writing style he would like all departments to
            adopt when writing University correspondence on electronic or
            printed University letterhead. Please review the sample letter and
            letter-writing instructions provided here for assistance.
          </p>
          <p>
            We have provided an electronic letterhead template for your use. For
            print correspondence, we ask that you order official University
            letterhead on quality paper stock from Victoria Bell, Print Services
            Manager, Mail and Print Services Office (<a href='mailto:vbell@franciscan.edu'>
              vbell@franciscan.edu
            </a>/<a href='tel:17402846354'>740-283-6354</a>).
          </p>
        </div>
      </div>
      <div className='row'>
        {map(letterheadData, ({ image, title, url, actionText }, key) => {
          return (
            <LetterheadCard
              key={key}
              title={title}
              actionText={actionText}
              image={image}
              url={url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Letterhead
