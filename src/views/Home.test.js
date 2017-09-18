/* eslint-env jest */
import { visit } from './testUtils'

describe('Home Page', () => {
  it('loads on /', async () => {
    const page = visit('/')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).not.toContain('Page not found')
  })

  it('contains "Resource Center"', async () => {
    const page = visit('/')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Resource Center')
  })

  it('shows 6 cards', async () => {
    const page = visit('/')
    const selector = '.container .col.s12.m4'
    const cardCount = await page
      .wait(selector)
      .evaluate(sel => document.querySelectorAll(sel).length, selector)
      .end()

    expect(cardCount).toEqual(9)
  })
})
