import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ tours, setTours ] = useState([]);

  const getTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const retrievedTours = await response.json();
      if (response.status >= 200 && response.status <= 299) {
        setIsLoading(false);
        setTours(retrievedTours);
      } else {
          throw new Error(response.statusText);
      }
    } catch (error) {
        setIsLoading(false);
        console.log(`There was an error: ${error}`);
    }
  }

  const deleteTour = (id) => {
    const modifiedTours = tours.filter(tour  => tour.id !== id);
    setTours(modifiedTours);
  };

  useEffect( () => { getTours() }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>No Tours Left</h2>
            <button
              className='btn'
              onClick={getTours}
            >
              Refresh
            </button>
          </div>
        </main>
      );
  }

  return (
     <main>
      <Tours
        tours={tours}
        deleteTour={deleteTour}
      />
    </main> 
  );
}

export default App
