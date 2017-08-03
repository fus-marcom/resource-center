/* eslint-env jest */
import { visit } from './testUtils'

describe('Service Request Page', () => {
  it('loads on /service-request-form', async () => {
    const page = visit('/service-request-form')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).not.toContain('Page not found')
  })

  it('contains the text "Please use this form to request services"', async () => {
    const page = visit('/service-request-form')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Please use this form to request services')
  })

  it('contains a bunch(10+) of input fields', async () => {
    const page = visit('/service-request-form')
    const inputFieldCount = await page
      .evaluate(() => document.getElementsByTagName('input').length)
      .end()

    expect(inputFieldCount).toBeGreaterThanOrEqual(10)
  })

  it('does not navigate away when clicking on Planning Guide (modal or new tab)', async () => {
    const page = visit('/service-request-form')
    const linkSelector = '.planning-guide-checkbox a'
    const path = await page.click(linkSelector).path().end()

    expect(path).toEqual('/service-request-form')
  })

  it('does not checks the checkbox when clicking on Planning Guide', async () => {
    const page = visit('/service-request-form')
    const linkSelector = '.planning-guide-checkbox a'
    const checkboxSelector = '.planning-guide-checkbox input[type="checkbox"]'
    const checked = await page
      .click(linkSelector)
      .evaluate(sel => document.querySelector(sel).checked, checkboxSelector)
      .end()

    expect(checked).toEqual(false)
  })

  it('allows to upload files and shows the filenames', async () => {
    let page = visit('/service-request-form')
    const fileInputSelector = '.file-upload input[type="file"]'
    const filenamesSelector =
      '.file-upload .file-path-wrapper > input[type="text"]'
    const text = await page
      .upload(fileInputSelector, ['fake file 1.txt', 'fake file 2.txt'])
      .evaluate(sel => document.querySelector(sel).value, filenamesSelector)
      .end()

    expect(text).toEqual('fake file 1.txt, fake file 2.txt')
  })
})
