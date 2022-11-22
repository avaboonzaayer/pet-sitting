const db = require('./db');

module.exports = {
  getSitters: (req, res) => {
    db.Sitter.find({}, null, { sort: req.params.sort === 'reviews' ? { reviews: -1 } : 'rate' }, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  },

  getSitter: (req, res) => {
    db.Sitter.find(req.params, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result[0]);
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
  },

  getReviews: (req, res) => {
    db.Review.find(req.params, (err, result) => {
      if (err) res.send(err.message);
      else res.send({ sitterId: req.params.sitterId, reviews: result});
    })
  },

  addReview: (req, res) => {
    db.Review.create(req.body, (err, result) => {
      if (err) res.send(err.message);
      else {
        db.Sitter.find({ _id: req.body.sitterId }, (err, result) => {
          if (err) res.send(err.message);
          else {
            db.Sitter.updateOne({ _id: req.body.sitterId }, { reviews: result[0].reviews + 1 }, (err, result) => {
              if (err) res.send(err.message);
              else res.send(result);
            })
          }
        })
      }
    })
  },

  incrementReviewCt: (req, res) => {
    db.Sitter.find(req.body, (err, result) => {
      if (err) res.send(err.message);
      else {
        db.Sitter.updateOne(req.body, { reviews: result[0].reviews + 1 }, (err, result) => {
          if (err) res.send(err.message);
          else res.send(result);
        })
      }
    })
  },

  deleteReview: (req, res) => {
    db.Review.deleteOne(req.params, (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
    })
  }
}