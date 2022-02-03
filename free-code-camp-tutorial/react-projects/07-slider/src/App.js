import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  const [ users ] = useState(data);
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const maxIndex = users.length - 1;
    if (index < 0) setIndex(maxIndex);
    else if (index > maxIndex)
      setIndex(0); 
  }, [index, users]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1);

      return () => {
        clearInterval(slider);
      };
    }, 5000);
  });

  const userList = users.map((user, idx) => {
    const { id, image, name, title, quote } = user;
    let position =  index === idx ? 'activeSlide' : 'nextSlide';
    if (idx === index-1 || (index === 0 && idx === users.length-1)) {
      position = 'lastSlide';
    }

    return (
      <article className={position} key={id}>
        <img
          className='person-img'
          src={image}
          alt={name}
        />
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon' />
      </article>
    );
  }); 

  return (
    <section className='section'>
      
      <div className='title'>
         <h2>
          <span>/</span>Reviews
        </h2> 
      </div>

      <div className='section-center'>
        {userList}
        <button
          className='prev'
          onClick={() => setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setIndex(index+1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
