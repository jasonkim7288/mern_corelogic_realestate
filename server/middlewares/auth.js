module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAutenticated()) {
      return next();
    } else {
      res.redirect('/');
    }
  },
  ensureGuest: (req, res, next) => {
    if (req.isAutenticated()) {
      res.redirect('/dashboard');
    } else {
      return next();
    }
  }
}