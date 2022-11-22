import { useState, useRef } from 'react';

const NewReview = ({ sitterId, postReview, setShow }) => {
  const [ name, setName ] = useState('');
  const [ recommend, setRecommend ] = useState(true);
  const [ summary, setSummary ] = useState('');
  const [ body, setBody ] = useState('');
  const recommendBtn = useRef(null);

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleRecommendedChange = e => {
    setRecommend(JSON.parse(e.target.value));
  }

  const handleSummaryChange = e => {
    setSummary(e.target.value);
  }

  const handleBodyChange = e => {
    setBody(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const review = {
      sitterId,
      name,
      recommend,
      summary,
      body
    }
    setName('');
    setRecommend(true);
    setSummary('');
    setBody('');
    recommendBtn.current.checked = true;
    setShow(false);
    postReview(review, sitterId);
  }

  return (
    <div className="new-review">
      <form className="new-review__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="new-review__input" type="text" value={name} onChange={handleNameChange} placeholder="What is your name?" required />
        </label>

        <fieldset className="new-review__input--radio-select">
          <legend>
            Do you recommend this sitter?
          </legend>
          <label className="new-review__input--radio-select">
            Yes
            <input type="radio" className="new-review__input__radio-btn" name="recommend" value="true" onChange={handleRecommendedChange} ref={recommendBtn} defaultChecked />
          </label>

          <label className="new-review__input--radio-select">
            No
            <input type="radio" className="new-review__input__radio-btn" name="recommend" value="false" onChange={handleRecommendedChange} />
          </label>
        </fieldset>

        <label>
          Summary:
          <input className="new-review__input" type="text" value={summary} onChange={handleSummaryChange} maxLength="50" placeholder="Sum up your review in a few words" required />
        </label>

        <label>
          Body:
          <textarea className="new-review__input" value={body} onChange={handleBodyChange} maxLength="1000" rows="5" placeholder="What do you have to say about this sitter?" required />
        </label>

        <button className="new-review__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewReview;