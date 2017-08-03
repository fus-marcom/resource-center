const express = require('express')
const path = require('path')
const formidable = require('formidable')
const app = express()
const fs = require('fs')

const uploadDir = path.join(__dirname, 'uploads')

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/uploads', function (req, res) {
  var form = new formidable.IncomingForm()

  form.parse(req)

  form.on('fileBegin', function (name, file) {
    file.path = `${uploadDir}/${file.name}`
  })

  form.on('file', function (name, file) {
    console.log('Uploaded ' + file.name)
  })

  res.json({ success: true, status: 'Form successfully﻿ submitted' })
})

app.listen(9000, () => console.log('Now serving on http://localhost:9000'))
