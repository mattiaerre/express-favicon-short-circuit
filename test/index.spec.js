const middleware = require('../index');

describe('given the \'express-favicon-short-circuit\' middleware', () => {
  describe('when req.url === \'/favicon.ico\'', () => {
    const req = {};
    const res = {};
    const next = jest.fn();

    beforeAll(() => {
      // request
      req.url = '/favicon.ico';
      // response
      res.type = jest.fn();
      res.status = jest.fn();
      res.end = jest.fn();

      middleware(req, res, next);
    });

    it('then res.type called with exactly \'image/x-icon\'', () => {
      expect(res.type).toHaveBeenCalledWith('image/x-icon');
    });

    it('then res.status called with exactly 301', () => {
      expect(res.status).toHaveBeenCalledWith(301);
    });

    it('then res.end called', () => {
      expect(res.end).toHaveBeenCalled();
    });

    it('then next not called', () => {
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('when req.url !== \'/favicon.ico\'', () => {
    const req = {};
    const res = {};
    const next = jest.fn();

    beforeAll(() => {
      // request
      req.url = '/index.html';
      // response
      res.type = jest.fn();
      res.status = jest.fn();
      res.end = jest.fn();

      middleware(req, res, next);
    });

    it('then res.type not called', () => {
      expect(res.type).not.toHaveBeenCalled();
    });

    it('then res.status not called', () => {
      expect(res.status).not.toHaveBeenCalled();
    });

    it('then res.end not called', () => {
      expect(res.end).not.toHaveBeenCalled();
    });

    it('then next called', () => {
      expect(next).toHaveBeenCalled();
    });
  });
});
