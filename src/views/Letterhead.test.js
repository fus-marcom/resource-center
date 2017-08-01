/* eslint-env jest */
import nightmare from 'nightmare'

const visit = path => {
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: false,
    // From the docs: Note that, even though goto normally waits
    // for all the resources on a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded.
    gotoTimeout: 4000
  }
  return nightmare(config).goto('http://localhost:3000' + path)
}

describe('Letterhead page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    await page.end()
  })
})
