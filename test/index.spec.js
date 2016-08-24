/* global describe, before, it */
/* eslint import/no-extraneous-dependencies: "off" */

const chai = require('chai')
const sinon = require('sinon')
const middleware = require('../index')

chai.should()

describe('given the \'express-favicon-short-circuit\' middleware', () => {
  describe('when req.url === \'/favicon.ico\'', () => {
    const req = {}
    const res = {}
    const next = sinon.stub()
    before(() => {
      // request
      req.url = '/favicon.ico'
      // response
      res.type = sinon.stub()
      res.status = sinon.stub()
      res.end = sinon.stub()

      middleware(req, res, next)
    })

    it('then res.type called with exactly \'image/x-icon\'', () => {
      sinon.assert.calledWithExactly(res.type, 'image/x-icon')
    })

    it('then res.status called with exactly 200', () => {
      sinon.assert.calledWithExactly(res.status, 200)
    })

    it('then res.end called', () => {
      sinon.assert.called(res.end)
    })

    it('then next not called', () => {
      sinon.assert.notCalled(next)
    })
  })

  describe('when req.url !== \'/favicon.ico\'', () => {
    const req = {}
    const res = {}
    const next = sinon.stub()
    before(() => {
      // request
      req.url = '/index.html'
      // response
      res.type = sinon.stub()
      res.status = sinon.stub()
      res.end = sinon.stub()

      middleware(req, res, next)
    })

    it('then res.type not called', () => {
      sinon.assert.notCalled(res.type)
    })

    it('then res.status not called', () => {
      sinon.assert.notCalled(res.status)
    })

    it('then res.end not called', () => {
      sinon.assert.notCalled(res.end)
    })

    it('then next called', () => {
      sinon.assert.called(next)
    })
  })
})
