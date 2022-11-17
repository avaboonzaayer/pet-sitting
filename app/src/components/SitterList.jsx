import Sitter from './Sitter.jsx';

const SitterList = ({ sitters }) => {
  return (
    <div className="sitter-list">
      {sitters.map(sitter => (
        <Sitter sitter={sitter} key={sitter.name} />
      ))}
    </div>
  )
}

export default SitterList;
