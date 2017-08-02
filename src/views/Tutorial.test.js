/* eslint-env jest */

import { visit } from './testUtils'

describe('Tutorial page', () => {
  it('loads in /tutorial', async () => {
    const page = visit('/tutorial')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).not.toContain('Page not found')
  })

  it('has a youtube video', async () => {
    const page = visit('/tutorial')
    const videoSelector = 'iframe[src*="youtube.com"]'
    const hasVideo = await page.exists(videoSelector).end()

    expect(hasVideo).toEqual(true)
  })

  it('mentions contacting Jesse', async () => {
    const page = visit('/tutorial')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('please contact Jesse Weigel')
  })
})
