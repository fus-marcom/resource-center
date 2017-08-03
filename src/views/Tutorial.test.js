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

  const testCentered = async viewport => {
    const page = visit('/tutorial')
    const { leftSpace, rightSpace } = await page
      .viewport(viewport.width, viewport.height)
      .evaluate(() => {
        const iframeRect = document
          .querySelector('iframe')
          .getBoundingClientRect()
        const viewportWidth = window.innerWidth // Not incluiding scrollbar
        const leftSpace = iframeRect.left
        const rightSpace = viewportWidth - iframeRect.right
        return { leftSpace, rightSpace }
      })
      .end()

    const difference = Math.abs(leftSpace - rightSpace)
    return expect(difference).toBeLessThanOrEqual(1) // Allow up to 1px of difference
  }

  it('has an iframe centered in a big viewport', () =>
    testCentered({ width: 1920, height: 1080 }))

  it('has an iframe centered in a small viewport', () =>
    testCentered({ width: 320, height: 570 }))
})
