const BookSitter = ({ sitter, show, setShow }) => {
  const closeForm = () => {
    setShow(false);
  }

  return show ? (
    <div className="book-sitter" onClick={e => e.stopPropagation()}>
      <i className="fa-solid fa-xmark book-sitter__close" onClick={closeForm} />
      <h5>
        {`Book ${sitter.name}`}
      </h5>

      <label>
        Name
        <input className="book-sitter__input" type="text" placeholder="What is your name?" required />
      </label>

      <label>
        Address
        <input className="book-sitter__input" type="text" placeholder="Where do you live?" required />
      </label>

      <label>
        How long will you be away?
        <div>
          <input className="book-sitter__input book-sitter__input--date" type="date" required />
          <span className="book-sitter__date-join">
            to
          </span>
          <input className="book-sitter__input book-sitter__input--date" type="date" required />
        </div>
      </label>

      <label>
        Send a message to the sitter
        <textarea className="book-sitter__input" rows="5" placeholder="Try to include details such as what pets you have, their needs, etc." required />
      </label>

      <button className="book-sitter__submit" type="button">
        Submit Booking
      </button>
    </div>
  ) : null;
}

export default BookSitter;
