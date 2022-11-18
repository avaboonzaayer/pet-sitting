import { useState } from 'react';

const BookSitter = ({ sitter, show, setShow }) => {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ leaveDate, setLeaveDate ] = useState('');
  const [ returnDate, setReturnDate ] = useState('');
  const [ msg, setMsg ] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleAddressChange = e => {
    setAddress(e.target.value);
  }

  const handleLeaveDateChange = e => {
    setLeaveDate(e.target.value);
  }

  const handleReturnDateChange = e => {
    setReturnDate(e.target.value)
  }

  const handleMsgChange = e => {
    setMsg(e.target.value)
  }

  const closeForm = () => {
    setShow(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = {
      name,
      address,
      leaveDate,
      returnDate,
      msg
    }
    console.log(result);
    setShow(false);
  }

  return show ? (
    <div className="book-sitter" onClick={e => e.stopPropagation()}>
      <i className="fa-solid fa-xmark book-sitter__close" onClick={closeForm} />
      <h5>
        {`Book ${sitter.name}`}
      </h5>

      <form className="register-sitter__form" onSubmit={handleSubmit}>
        <label>
          Name
          <input className="book-sitter__input" type="text" value={name} onChange={handleNameChange} placeholder="What is your name?" required />
        </label>

        <label>
          Address
          <input className="book-sitter__input" type="text" value={address} onChange={handleAddressChange} placeholder="Where do you live?" required />
        </label>

        <label>
          How long will you be away?
          <div>
            <input className="book-sitter__input book-sitter__input--date" type="date" value={leaveDate} onChange={handleLeaveDateChange} required />
            <span className="book-sitter__date-join">
              to
            </span>
            <input className="book-sitter__input book-sitter__input--date" type="date" value={returnDate} onChange={handleReturnDateChange} required />
          </div>
        </label>

        <label>
          Send a message to the sitter
          <textarea className="book-sitter__input" rows="5" value={msg} onChange={handleMsgChange} placeholder="Try to include details such as what pets you have, their needs, etc." required />
        </label>

        <button className="book-sitter__submit" type="submit">
          Submit Booking
        </button>
      </form>
    </div>
  ) : null;
}

export default BookSitter;
