/* eslint-env jest */
import { visit } from './testUtils'

describe('Letterhead page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).not.toContain('Page not found')
  })

  it('has 4 letterheads', async () => {
    const page = visit('/letterhead')
    const letterheadCount = await page
      .evaluate(() => document.querySelectorAll('.letterhead-card').length)
      .end()
    expect(letterheadCount).toEqual(4)
  })

  it('has 4 images', async () => {
    const page = visit('/letterhead')
    const selector = '.letterhead-card img'
    const letterheadCount = await page
      .evaluate(sel => document.querySelectorAll(sel).length, selector)
      .end()
    expect(letterheadCount).toEqual(4)
  })

  it('has at least one letterhead with a link', async () => {
    const page = visit('/letterhead')
    const buttonIsVisible = await page.visible('.letterhead-card a').end()
    expect(buttonIsVisible).toEqual(true)
  })

  it('has some text before the letterheads', async () => {
    const page = visit('/letterhead')
    const textIsVisible = await page
      .visible('.container > .row:first-child p')
      .end()
    expect(textIsVisible).toEqual(true)
  })
})
