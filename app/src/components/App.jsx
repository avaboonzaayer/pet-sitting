import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import RegisterSitter from './RegisterSitter.jsx';

function App() {
  const [ showRegister, setShowRegister ] = useState(false);
  const [ showBook, setShowBook ] = useState(false);
  const [ sitters, setSitters ] = useState([{
    name: 'Sam Boonzaayer',
    loc: 'Peoria, AZ',
    abt: 'I am making a website!',
    rate: '50',
    pfp: 'https://res.cloudinary.com/dcwyyjadj/image/upload/v1668711866/drihhkjn5nfzoukgqlrw.jpg',
    reviews: [],
    requests: []
  }]);

  const showRegisterForm = (e) => {
    e.stopPropagation();
    setShowBook(false);
    setShowRegister(true);
  }

  const showBookForm = (e) => {
    e.stopPropagation();
    setShowBook(true);
    setShowRegister(false);
  }

  const closeAllModals = () => {
    setShowRegister(false);
    setShowBook(false);
  }

  return (
    <div className="app" onClick={closeAllModals}>
      <RegisterSitter showRegister={showRegister} setShowRegister={setShowRegister} show={showRegister} />
      <Header showForm={showRegisterForm} />
      <SitterList sitters={sitters} showBook={showBook} showBookForm={showBookForm} setShowBook={setShowBook} />
    </div>
  );
}

export default App;
