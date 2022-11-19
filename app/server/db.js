const { Schema, model, connect } = require('mongoose');

connect('mongodb://localhost:27017/petsitting');

const sitterSchema = new Schema({
  name: String,
  loc: String,
  abt: String,
  rate: Number,
  pfp: String,
  requests: [ Object ],
  reviews: [ Object ]
})

const requestSchema = new Schema({
  sitterId: String,
  name: String,
  address: String,
  leaveDate: String,
  returnDate: String,
  msg: String
})

const Sitter = model('Sitter', sitterSchema);
const Request = model('Request', requestSchema);

module.exports = {
  Sitter: Sitter,
  Request: Request
}
