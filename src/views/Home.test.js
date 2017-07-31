/* eslint-env jest */
import nightmare from 'nightmare'

const visit = path => {
  return nightmare().goto('http://localhost:3000' + path)
}

describe('Home Page', () => {
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

    expect(cardCount).toEqual(6)
  })
})
