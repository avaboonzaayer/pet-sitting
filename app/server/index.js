const express = require('express');
const bp = require('body-parser');
const controllers = require('./controllers.js');

const app = express();
const PORT = 8080;

app.use(bp.json());

app.get('/sitters/:sort', controllers.getSitters);
app.post('/sitters', controllers.addSitter);
app.delete('/sitters/:_id/remove', controllers.removeSitter);
app.get('/sitter/:_id', controllers.getSitter);

app.get('/requests/:sitterId', controllers.getBookings);
app.post('/requests', controllers.bookSitter);

app.get('/reviews/:sitterId', controllers.getReviews);
app.post('/reviews', controllers.addReview);
app.put('/increment', controllers.incrementReviewCt);
app.delete('/reviews/:_id/delete', controllers.deleteReview);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
