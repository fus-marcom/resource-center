import React from 'react'
import { Helmet } from 'react-helmet'

const Glossary = () =>
  <div>
    <Helmet>
      <title>Glossary | Resource Center</title>
    </Helmet>
    <div className='container'>
      <div className='row flow-text'>
        <h2 style={{ marginBottom: 0 }}>Common MarCom Terms</h2>
        <div className='col s12'>
          <dl>
            <dt>Banner Ad</dt>
            <dd>
              An image-based advertisement that appears online and is intended
              to drive traffic to a specific webpage
            </dd>
          </dl>
          <dl>
            <dt>Blog</dt>
            <dd>
              A webpage that is updated frequently and is written in an informal
              or conversational style
            </dd>
          </dl>
          <dl>
            <dt>Direct Mail</dt>
            <dd>
              Printed material, such as a postcard, letter, or brochure that is
              addressed to someone and mailed directly to their residence or
              workplace
            </dd>
          </dl>
          <dl>
            <dt>Email Blast</dt>
            <dd>
              Promotional message that is emailed to a large population, defined
              as the target market, to bring awareness of a specific event,
              product, or service that encourages an action by the recipient
            </dd>
          </dl>
          <dl>
            <dt>IMC Campaign</dt>
            <dd>
              Integrated marketing communications campaign where several
              marketing materials are created with a consistent theme and brand
              messaging and then delivered by marketing mix channels (social
              media, print publications, radio/TV, direct mail, email blast,
              etc.) to a target audience within a time frame
            </dd>
          </dl>
          <dl>
            <dt>Marketing Mix</dt>
            <dd>
              Several types of advertising media such as billboards, direct
              mail, email, print, radio, social media, television, or website
              that are utilized to deliver a marketing message to the target
              audience
            </dd>
          </dl>
          <dl>
            <dt>New Media or Non-Traditional Media</dt>
            <dd>
              Includes digital media such as online videos, banner ads, mobile
              applications, gamification, podcasts, social media platforms such
              as, Facebook, Twitter, Instagram, etc
            </dd>
          </dl>
          <dl>
            <dt>Press Release</dt>
            <dd>
              A news story sent to traditional news and online media outlets, as
              well as to email lists and other targeted audiences to increase
              awareness about an event, promotion, or matter of importance
            </dd>
          </dl>
          <dl>
            <dt>Radio Ad</dt>
            <dd>
              An advertisement that airs on the radio targeted toward a specific
              market, usually in the form of a 15-second, 30-second, or
              60-second message
            </dd>
          </dl>
          <dl>
            <dt>Social Media Platform</dt>
            <dd>
              A web-based communication tool that provides users the means to
              build, mix and promote community engagement, conversation and
              share user-generated material on platforms such as Facebook,
              Twitter, and YouTube
            </dd>
          </dl>
          <dl>
            <dt>Social Media Post</dt>
            <dd>
              Information uploaded at no cost to social media outlets such as
              Facebook, Twitter, YouTube, etc., intended to reach a certain
              target audience. Updates and additional information are posted
              periodically and usually requires an account
            </dd>
          </dl>
          <dl>
            <dt>Social Media Ad</dt>
            <dd>
              An image-based paid advertisement created to be displayed on a
              social media site
            </dd>
          </dl>
          <dl>
            <dt>Podcast</dt>
            <dd>
              Information in the form of an audio file that is recorded and can
              be accessed and downloaded from the Internet; these usually come
              in multiple installments and users can subscribe to the podcast
              service
            </dd>
          </dl>
          <dl>
            <dt>Television Ad</dt>
            <dd>
              A planned advertisement, usually 15 seconds, 30 seconds, or 60
              seconds long, shown on TV in between regularly scheduled
              television programs and can be targeted toward various target
              markets
            </dd>
          </dl>
          <dl>
            <dt>Traditional Media</dt>
            <dd>
              This includes television, print, radio, and any other traditional
              forms of marketing medium that are not considered “online,”
              “social,” or “new” media
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

export default Glossary
