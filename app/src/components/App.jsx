import { useState } from 'react';
import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import BookSitter from './BookSitter.jsx';
import RegisterSitter from './RegisterSitter.jsx';

function App() {
  const [ registerFormDisplayStatus, setRegisterFormDisplayStatus ] = useState('hidden');
  const [ sitters, setSitters ] = useState([]);

  const showRegisterForm = () => {
    setRegisterFormDisplayStatus('shown');
  }

  return (
    <div className="app">
      <BookSitter />
      <RegisterSitter displayStatus={registerFormDisplayStatus} setDisplayStatus={setRegisterFormDisplayStatus} />
      <Header showForm={showRegisterForm} setDisplayStatus={setRegisterFormDisplayStatus} />
      <SitterList sitters={sitters} />
    </div>
  );
}

export default App;
