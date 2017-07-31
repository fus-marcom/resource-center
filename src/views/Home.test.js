/* eslint-env jest */
import nightmare from 'nightmare'

describe('Home Page', () => {
  it('contains "Resource Center"', async () => {
    const page = nightmare().goto('http://localhost:3000/')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Resource Center')
  })
})
