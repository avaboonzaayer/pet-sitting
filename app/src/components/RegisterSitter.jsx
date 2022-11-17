import { useState } from 'react';

const RegisterSitter = ({ displayStatus, setDisplayStatus }) => {
  const [ name, setName ] = useState('');
  const [ loc, setLoc ] = useState('');
  const [ abt, setAbt ] = useState('');
  const [ rate, setRate ] = useState('');
  const [ pfp, setPfp ] = useState('http://res.cloudinary.com/dcwyyjadj/image/upload/v1668705469/rl5eid17vf4g0qwtdvl6.jpg');

  // eslint-disable-next-line no-undef
  const uploadWidget = cloudinary.createUploadWidget({
    cloudName: 'dcwyyjadj',
    uploadPreset: 'watch-my-pet',
    maxFiles: 1,
  }, (err, res) => {
    if (!err && res && res.event === 'success') {
      setPfp(res.info.url);
    }
  })

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleLocChange = (event) => {
    setLoc(event.target.value);
  }

  const handleAbtChange = (event) => {
    setAbt(event.target.value);
  }

  const handleRateChange = (event) => {
    setRate(event.target.value);
  }

  const handleUploadPhoto = () => {
    uploadWidget.open();
  }

  const closeForm = () => {
    setName('');
    setLoc('');
    setRate('');
    setAbt('');
    setPfp('http://res.cloudinary.com/dcwyyjadj/image/upload/v1668705469/rl5eid17vf4g0qwtdvl6.jpg');
    setDisplayStatus('hidden');
  }

  const handleSubmit = () => {
    const result = {
      name, loc, abt, rate, pfp
    }
    console.log(result);
    closeForm();
  }

  return (
    <div className={`register-sitter ${displayStatus}`}>
      <i className="fa-solid fa-xmark register-sitter__close" onClick={closeForm} />
      <h3 className="register-sitter__header">Start Pet Sitting!</h3>
      <form className="register-sitter__form">
        <label>
          Name:
          <input className="register-sitter__input" type="text" value={name} onChange={handleNameChange} placeholder="My name is..." required />
        </label>

        <label>
          Location:
          <input className="register-sitter__input" type="text" value={loc} onChange={handleLocChange} placeholder="I live in..." required />
        </label>

        <label>
          About yourself:
          <textarea className="register-sitter__input" value={abt} onChange={handleAbtChange} placeholder="Tell us about yourself!" rows="4" required />
        </label>

        <label>
          Rates:
          <div className="register-sitter__rate-container">
            <input className="register-sitter__input register-sitter__input--rates" type="number" value={rate} onChange={handleRateChange} min="1" max="999" required />
          </div>
        </label>

        <label>
          Picture:
          <span className="register-sitter__upload-photo register-sitter__input" onClick={handleUploadPhoto}>
            Choose a profile picture
          </span>
        </label>
        <img className="register-sitter__pfp" src={pfp} alt="" />

        <button className="register-sitter__submit" type="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterSitter;
