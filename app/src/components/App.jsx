import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import RegisterSitter from './RegisterSitter.jsx';

function App() {
  const [ showRegister, setShowRegister ] = useState(false);
  const [ showBook, setShowBook ] = useState(false);
  const [ sitters, setSitters ] = useState([]);

  const getSitters = () => {
    axios.get('/sitters')
      .then((results) => {
        setSitters(results.data);
      })
  }

  const addSitter = (sitter) => {
    axios.post('/sitters', sitter)
      .then(getSitters);
  }

  useEffect(getSitters, []);

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
      <RegisterSitter showRegister={showRegister} setShowRegister={setShowRegister} show={showRegister} addSitter={addSitter} />
      <Header showForm={showRegisterForm} />
      <SitterList sitters={sitters} showBook={showBook} showBookForm={showBookForm} setShowBook={setShowBook} />
    </div>
  );
}

export default App;
