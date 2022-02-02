import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [ index, setIndex ] = useState(0);
  const { name, job, image, text } = people[index];

  const prevReviewer = () => {
    setIndex(index => {
      let currentIndex = index - 1;
      let validatedIndex = checkIndexOutOfBounds(currentIndex);
      return validatedIndex;
    });
  }

  const nextReviewer = () => {
    setIndex(index => {
      let currentIndex = index + 1;
      let validatedIndex = checkIndexOutOfBounds(currentIndex);
      return validatedIndex;
    });
  }

  const randomReviewer = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      ++randomIndex;
    }
    setIndex(index => {
      let validatedIndex = checkIndexOutOfBounds(randomIndex);
      return validatedIndex;
    });
  }

  const checkIndexOutOfBounds = (number) => {
    if (number < 0) {
      number = people.length - 1;
    } else if (number > people.length - 1 ) {
        number = 0;
    }

    return number;
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img
          className='person-img'
          src={image}
          alt={name}
        />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span> 
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={prevReviewer}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={nextReviewer}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className='random-btn'
        onClick={randomReviewer}
      >
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
