import Nightmare from 'nightmare'
import url from 'url'
require('nightmare-upload')(Nightmare)
global['jasmine'].DEFAULT_TIMEOUT_INTERVAL = process.env.TEST_TIMEOUT || 60000

const BASE_URL = url.format({
  protocol: process.env.PROTOCOL || 'http',
  hostname: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000
})

export const visit = path => {
  const location = url.resolve(BASE_URL, path)
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: true,
    // From the docs: Note that, even though goto normally waits
    // for all the resources on a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded.
    gotoTimeout: process.env.NIGHTMARE_GOTO_TIMEOUT || 30000,
    waitTimeout: 30000,
    loadTimeout: 30000,
    executionTimeout: 30000
  }

  const nightmare = Nightmare(config)
  return nightmare.goto(location)
}
