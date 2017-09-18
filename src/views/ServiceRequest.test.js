/* eslint-env jest */
import { visit } from './testUtils'
import fs from 'fs'
import path from 'path'

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
    const linkSelector = '#planning-guide-checkbox a'
    const path = await page
      .click(linkSelector)
      .path()
      .end()

    expect(path).toEqual('/service-request-form')
  })

  it('does not checks the checkbox when clicking on Planning Guide', async () => {
    const page = visit('/service-request-form')
    const linkSelector = '#planning-guide-checkbox a'
    const checkboxSelector = '#planning-guide-checkbox input[type="checkbox"]'
    const checked = await page
      .click(linkSelector)
      .evaluate(sel => document.querySelector(sel).checked, checkboxSelector)
      .end()

    expect(checked).toEqual(false)
  })

  it('allows to upload files and shows the filenames', async () => {
    const page = visit('/service-request-form')
    const fileInputSelector = '.file-upload input[type="file"]'
    const filenamesSelector = '.file-upload .file-path-wrapper textarea'
    const text = await page
      .upload(fileInputSelector, ['fake file 1.txt', 'fake file 2.txt'])
      .evaluate(sel => document.querySelector(sel).value, filenamesSelector)
      .end()

    expect(text).toEqual('fake file 1.txt, fake file 2.txt')
  })

  it('creates files on the uploads folder when you submit them', async () => {
    // Create a fake file to upload
    // We can use the sync methods because this code
    // is not used in production
    const filename = 'test-upload.txt'
    const tempfile = path.resolve(filename)
    const fileContents = 'This the request that I have for you'
    fs.writeFileSync(tempfile, fileContents)

    // Visit the page, add the file and click submit
    const page = visit('/service-request-form')
    const fileInputSelector = '.file-upload input[type="file"]'
    await page
      .insert('input[name="name"]', 'abc')
      .insert('input[name="email"]', 'test@test.com')
      .insert('textarea[name="project description"]', 'abc')
      .upload(fileInputSelector, tempfile)
      .click('#planning-guide-checkbox input')
      .click('#submit-button')
      .wait(1000)
      .end()

    // Check that the uploaded file exists
    const uploadedFile = path.resolve('./uploads', filename)
    expect(fs.existsSync(uploadedFile)).toEqual(true)

    // Check that the contents of the file are correct
    // Passing the encoding to readFileSync decodes the buffer for us
    const uploadedContents = fs.readFileSync(uploadedFile, 'utf8')
    expect(uploadedContents).toEqual(fileContents)

    // Remove the temp file we created
    fs.unlinkSync(tempfile)
    // Remove the uploaded file
    fs.unlinkSync(uploadedFile)
  })
})
