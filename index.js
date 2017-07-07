module.exports = (req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.type('image/x-icon');
    res.status(301);
    res.end();
    return;
  }
  next();
};
