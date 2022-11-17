import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import BookSitter from './BookSitter.jsx';
import RegisterSitter from './RegisterSitter.jsx';

function App() {
  const [ registerFormDisplayStatus, setRegisterFormDisplayStatus ] = useState('hidden');
  const [ sitters, setSitters ] = useState([{
    name: 'Sam Boonzaayer',
    loc: 'Peoria, AZ',
    abt: 'I am making a website!',
    rate: '50',
    pfp: 'https://res.cloudinary.com/dcwyyjadj/image/upload/v1668711866/drihhkjn5nfzoukgqlrw.jpg',
    reviews: [],
    requests: []
  }]);

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
