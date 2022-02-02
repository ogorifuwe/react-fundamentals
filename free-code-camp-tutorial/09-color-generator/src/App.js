import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [ color, setColor ] = useState('');
  const [ error, setError ] = useState(false);
  const [ list, setList ] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
        setError(true);
      console.log(error);
    }
  }

  const handleColorChange = (e) => {
    e.preventDefault();
    let submittedColor = e.target.value;
    setColor(submittedColor);
  }

  const listOfSingleColors = list.map((color, index) => (
    <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
  ));
  return (
    <React.Fragment>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? 'error' : null}`}
            type='text'
            value={color}
            placeholder='#f15025'
            onChange={handleColorChange}
          />
          <button
            className='btn'
            type='submit'
          >
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {listOfSingleColors}
      </section>
    </React.Fragment>
  );
}

export default App
