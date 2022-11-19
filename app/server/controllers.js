const db = require('./db');

module.exports = {
  getSitters: (req, res) => {
    db.Sitter.find({}, null, { sort: req.params.sort }, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  },

  addSitter: (req, res) => {
    db.Sitter.create(req.body, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  },

  removeSitter: (req, res) => {
    db.Sitter.deleteOne(req.params, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  },

  getBookings: (req, res) => {
    db.Request.find(req.params, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  },

  bookSitter: (req, res) => {
    db.Request.create(req.body, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  }
}