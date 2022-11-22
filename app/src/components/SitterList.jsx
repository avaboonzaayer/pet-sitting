import Sitter from './Sitter.jsx';

const SitterList = ({
  sitters,
  showBook,
  showBookForm,
  setShowBook,
  setShowReviews,
  getReviews,
  getSitterInfo
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
          getSitterInfo={getSitterInfo}
        />
      ))}
    </div>
  )
}

export default SitterList;
