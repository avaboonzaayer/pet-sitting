const { Schema, model, connect } = require('mongoose');

connect('mongodb://localhost:27017/petsitting');

const sitterSchema = new Schema({
  name: String,
  loc: String,
  abt: String,
  rate: Number,
  pfp: String,
  reviews: { type: Number, default: 0 }
})

const requestSchema = new Schema({
  sitterId: String,
  name: String,
  address: String,
  leaveDate: String,
  returnDate: String,
  msg: String
})

const reviewSchema = new Schema({
  sitterId: String,
  name: String,
  recommend: Boolean,
  summary: String,
  body: String,
  timeStamp: { type: Date, default: Date.now() }
})

const Sitter = model('Sitter', sitterSchema);
const Request = model('Request', requestSchema);
const Review = model('Review', reviewSchema);

module.exports = {
  Sitter: Sitter,
  Request: Request,
  Review: Review
}
