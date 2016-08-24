/* eslint import/no-extraneous-dependencies: "off" */

const express = require('express')
const debug = require('debug')('express-favicon-short-circuit')

const app = express()

app.use(require('./index'))

app.get('/', (req, res) => {
  res.send(
    `
    <h1>express-favicon-short-circuit</h1>
    <a href="/favicon.ico">/favicon.ico</a>
    `
  )
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  debug(`go to example app http://0.0.0.0:${port}/`)
})
