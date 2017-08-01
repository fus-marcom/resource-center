/* eslint-env jest */
import { visit } from './testUtils'

describe('Letterhead page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    await page.end()
  })
})
