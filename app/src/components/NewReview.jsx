import { useState } from 'react';

const NewReview = ({ id }) => {
  const [ name, setName ] = useState('');
  const [ recommend, setRecommend ] = useState(true);
  const [ summary, setSummary ] = useState('');
  const [ body, setBody ] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  }

  return (
    <div className="new-review">
      <form className="new-review__form">
        <label>
          Name:
          <input className="new-review__input" type="text" value={name} onChange={handleNameChange} placeholder="What is your name?" required />
        </label>

        <label>
          Do you recommend this sitter?
          <input className="new-review__input--radio" type="radio" />
        </label>
      </form>
    </div>
  )
}

export default NewReview;