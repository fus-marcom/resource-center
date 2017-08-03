const express = require('express')
const path = require('path')
const formidable = require('formidable')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/uploads', function (req, res) {
  var form = new formidable.IncomingForm()

  form.parse(req)

  form.on('fileBegin', function (name, file) {
    file.path = `${__dirname}'/uploads/'${file.name}`
  })

  form.on('file', function (name, file) {
    console.log('Uploaded ' + file.name)
  })

  res.json({ success: true, status: 'Form successfully﻿ submitted' })
})

app.listen(9000, () => console.log('Now serving on http://localhost:9000'))
