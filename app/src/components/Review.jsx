import { format, parseISO } from 'date-fns';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h3 className="review__summary">
        {review.summary}
      </h3>
      <h5 className="review__recommended">
        {review.recommend ? 'I recommend this sitter' : 'I do not recommend this sitter'}
      </h5>
      <p className="review__body">
        {review.body}
      </p>
      <small className="review__user-timestamp"><i>
        {`Submitted by ${review.name} on ${format(parseISO(review.timeStamp), 'PPP')}`}
      </i></small>
    </div>
  )
}

export default Review;