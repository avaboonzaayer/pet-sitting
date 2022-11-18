import BookSitter from './BookSitter.jsx';

const Sitter = ({ sitter, showBook, showBookForm, setShowBook }) => {

  return (
    <div className="sitter">
      <BookSitter sitter={sitter} show={showBook} setShow={setShowBook} />
      <img className="sitter__pfp" src={sitter.pfp} alt={sitter.name} />
      <h3 className="sitter__name">{sitter.name}</h3>
      <h5 className="sitter__loc-and-rate">{`${sitter.loc} • $${sitter.rate}/day`}</h5>
      <p className="sitter__abt">{sitter.abt}</p>
      <button className="sitter__book" onClick={showBookForm}>
        Book this sitter!
      </button>
    </div>
  )
}

export default Sitter;
