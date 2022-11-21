import { useState } from 'react';
import Review from './Review.jsx';
import NewReview from './NewReview.jsx';

const Reviews = ( { show, setShow, reviews, id, showReviewForm, setShowReviewForm }) => {


  const closeReviews = () => {
    setShow(false);
    setShowReviewForm(false);
  }

  const openNewReview = () => {
    setShowReviewForm(true);
  }

  const reviewList = reviews.length ? (
    <ul className="reviews__list">
      {reviews.map(review => (
        <Review key={review._id} review={review} />
      ))}
    </ul>
  ) : (
    <h3 className="reviews__empty">
      This sitter doesn't have any reviews.
    </h3>
  )

  const addReview = showReviewForm ? (
    <NewReview id={id} />
  ) : (
    <button className="reviews__add-review" onClick={openNewReview}>
      Add Review
    </button>
  )

  return show ? (
    <div className="reviews" onClick ={ e => e.stopPropagation() }>
      <i className="fa-solid fa-xmark review__close" onClick={closeReviews} />
      {reviewList}
      {addReview}
    </div>
  ) : null;
}

export default Reviews;
