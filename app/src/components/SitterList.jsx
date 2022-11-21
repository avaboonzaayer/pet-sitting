import Sitter from './Sitter.jsx';

const SitterList = ({
  sitters,
  showBook,
  showBookForm,
  setShowBook,
  setShowReviews,
  getReviews
}) => {
  return (
    <div className="sitter-list">
      {sitters.map(sitter => (
        <Sitter
          sitter={sitter}
          key={sitter.name}
          showBook={showBook}
          showBookForm={showBookForm}
          setShowBook={setShowBook}
          setShowReviews={setShowReviews}
          getReviews={getReviews}
        />
      ))}
    </div>
  )
}

export default SitterList;
