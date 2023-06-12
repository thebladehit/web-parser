import React, { useState } from 'react';

const Form = ({ setCode }) => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCode('Loading...');
    try {
      const response = await fetch('/parse', {
        method: 'GET',
        headers: {
          'Parseurl': formData,
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log('here');
        setCode(data.data);
      } else {
        setCode(data.err);
      }
    } catch (err) {
      console.log(err);
    }
    setFormData('');
  };

  const [formData, setFormData] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Get Page Html</button>
    </form>
  );
};

export default Form;