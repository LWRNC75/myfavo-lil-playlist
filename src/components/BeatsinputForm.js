import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BeatsinputForm = (props) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ title: '', artist: '', genre: '', rating: 0 });

  return (
    <form className='beatsinputform' onSubmit={(e) => props.addBeats(e, values)}>
      <input className='beatsinputform__field' type='text' placeholder='Title' name='title' onChange={handleInputChange} value={values.title} />
      <input className='beatsinputform__field' type='text' placeholder='Artist' name='artist' onChange={handleInputChange} value={values.artist} />
      <select name='genre' id='' onChange={handleInputChange} value={values.genre} className='beatsinputform__field'>
        <option value='none'></option>
        <option value='Afro House'>Afro House</option>
        <option value='Bass House'>Bass House</option>
        <option value='Big Room'>Big Room</option>
        <option value='Deep Room'>Deep Room</option>
        <option value='Breaks'>Breaks</option>
        <option value='Dance'>Dance</option>
        <option value='House'>House</option>
        <option value='Tech House'>Tech House</option>
        <option value='UK Garage'>UK Garage</option>
      </select>
      <select name='rating' id='' onChange={handleInputChange} value={values.rating} className='beatsinputform__field'>
        <option value='0'></option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <button className='beatsinputform__button'>Add Song</button>
    </form>
  );
};

export default BeatsinputForm;
