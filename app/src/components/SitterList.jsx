import Sitter from './Sitter.jsx';

const SitterList = ({ sitters }) => {
  const exampleSitter = {
    name: 'Sam Boonzaayer',
    loc: 'Peoria, AZ',
    abt: 'I am making a website!',
    rate: '50',
    pfp: 'https://res.cloudinary.com/dcwyyjadj/image/upload/v1668711866/drihhkjn5nfzoukgqlrw.jpg'
  }

  return (
    <div className="sitter-list">
      {sitters.map(sitter => (
        <Sitter sitter={sitter} />
      ))}
    </div>
  )
}

export default SitterList;
