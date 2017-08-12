/* eslint-env jest */
import url from 'url'
import fetch from 'node-fetch'

require('dotenv').config()
const BASE_URL = url.format({
  protocol: process.env.PROTOCOL || 'http',
  hostname: process.env.HOST || 'localhost',
  port: process.env.SERVER_PORT || 9000
})

async function post (data, customHeaders) {
  const res = await fetch(url.resolve(BASE_URL, '/uploads'), {
    headers: Object.assign(
      {},
      {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      customHeaders
    ),
    method: 'post',
    body: data
  })

  return res.json()
}

describe('Server', () => {
  // TODO: make tests asserting it should fail if some
  // fields should not pass validation
  it('parses successfully a request with name and email', async () => {
    const response = await post('name=someone&email=someone@example.com')

    expect(response).toBeDefined()
    expect(response.success).toBe(true)
  })

  it("responds with an error if the request doesn't make sense", async () => {
    const response = await post('this=is&not=json', {
      'Content-Type': 'application/json'
    })

    expect(response).toBeDefined()
    expect(response.success).toBe(false)
  })
})
