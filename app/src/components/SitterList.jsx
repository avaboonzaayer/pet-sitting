import Sitter from './Sitter.jsx';

const SitterList = ({ sitters, showBook, showBookForm, setShowBook }) => {
  return (
    <div className="sitter-list">
      {sitters.map(sitter => (
        <Sitter sitter={sitter} key={sitter.name} showBook={showBook} showBookForm={showBookForm} setShowBook={setShowBook} />
      ))}
    </div>
  )
}

export default SitterList;
