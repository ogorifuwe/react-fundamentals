import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, deleteTour }) => {

  const tourList = tours.map( tour => (
    <Tour
      key={ tour.id }
      { ...tour }
      deleteTour={ deleteTour }
    />
  ));

  return (
    <section>
      <div className ='title'>
        <h2> Our Tours </h2>
        <div className='underline'></div>
      </div>
      <div>
        { tourList }
      </div>
    </section>
  );
};

export default Tours;
