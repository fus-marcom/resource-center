/* eslint-env jest */
import { visit } from './testUtils'

describe('NotFound Page', () => {
  it('loads on /this-will-never-be-a-real-url', async () => {
    const page = visit('/this-will-never-be-a-real-url')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Page not found')
  })
})
