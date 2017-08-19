import React from 'react'
import { Helmet } from 'react-helmet'
import { glossaryData } from '../data/glossaryData'

const Glossary = () => {
  return (
    <div>
      <Helmet>
        <title>Glossary | Resource Center</title>
      </Helmet>
      <div className='container'>
        <div className='row flow-text'>
          <h2 style={{ marginBottom: 0 }}>Common MarCom Terms</h2>
          <div className='col s12'>
            {glossaryData.map((glossary, key) => {
              return (
                <dl key={key}>
                  <dt>
                    {glossary.title}
                  </dt>
                  <dd>
                    {glossary.description}
                  </dd>
                </dl>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Glossary
