import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import RegisterSitter from './RegisterSitter.jsx';
import Reviews from './Reviews.jsx';

function App() {
  const [ showRegister, setShowRegister ] = useState(false);
  const [ showBook, setShowBook ] = useState(false);
  const [ showReviews, setShowReviews ] = useState(false);
  const [ sitters, setSitters ] = useState([]);
  const [ sort, setSort ] = useState('rating');
  const [ reviews, setReviews ] = useState([]);
  const [ sitterUnderReview, setSitterUnderReview ] = useState('');
  const [ showReviewForm, setShowReviewForm ] = useState(false);

  const getSitters = () => {
    axios.get(`/sitters/${sort}`)
      .then((results) => {
        setSitters(results.data);
      })
  }

  const addSitter = (sitter) => {
    axios.post('/sitters', sitter)
      .then(getSitters);
  }

  const getReviews = (id) => {
    axios.get(`reviews/${id}`)
      .then((results) => {
        setReviews(results.data);
        setSitterUnderReview(id);
      })
  }

  const showRegisterForm = (e) => {
    e.stopPropagation();
    setShowBook(false);
    setShowRegister(true);
    setShowReviews(false);
    setShowReviewForm(false);
  }

  const showBookForm = (e) => {
    e.stopPropagation();
    setShowBook(true);
    setShowRegister(false);
    setShowReviews(false);
    setShowReviewForm(false);
  }

  const closeAllModals = () => {
    setShowRegister(false);
    setShowBook(false);
    setShowReviews(false);
    setShowReviewForm(false);
  }

  useEffect(getSitters, [ sort ]);

  return (
    <div className="app" onClick={closeAllModals}>
      <RegisterSitter showRegister={showRegister} setShowRegister={setShowRegister} show={showRegister} addSitter={addSitter} />
      <Reviews show={showReviews} setShow={setShowReviews} reviews={reviews} id={sitterUnderReview} showReviewForm={showReviewForm} setShowReviewForm={setShowReviewForm} />
      <Header showForm={showRegisterForm} setSort={setSort} />
      <SitterList
        sitters={sitters}
        showBook={showBook}
        showBookForm={showBookForm}
        setShowBook={setShowBook}
        setShowReviews={setShowReviews}
        getReviews={getReviews}
      />
    </div>
  );
}

export default App;
