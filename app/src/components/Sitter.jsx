import BookSitter from './BookSitter.jsx';

const Sitter = ({
  sitter,
  showBook,
  showBookForm,
  setShowBook,
  setShowReviews,
  getReviews
}) => {

  const openReviews = (e) => {
    e.stopPropagation();
    getReviews(sitter._id);
    setShowReviews(true);
  }

  return (
    <div className="sitter">
      <BookSitter sitter={sitter} show={showBook} setShow={setShowBook} />
      <img className="sitter__pfp" src={sitter.pfp} alt={sitter.name} />
      <div>
        <h3 className="sitter__name">{sitter.name}</h3>
        <h5 className="sitter__loc-and-rate">{`${sitter.loc} • $${sitter.rate}/day`}</h5>
      </div>
      <p className="sitter__abt">{sitter.abt}</p>
      <div className="sitter__btns">
        <button className="sitter__book" onClick={showBookForm}>
          Book this sitter!
        </button>

        <button className="sitter__read-reviews" onClick={openReviews}>
          {`Reviews (${sitter.rating})`}
        </button>
      </div>
    </div>
  )
}

export default Sitter;
