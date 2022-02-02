import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [ jobs, setJobs ] = useState([]);
  const [ index, setIndex ] = useState(0);

  const getJobs = async () => {
    try {
      const response = await fetch(url);
      const retrievedJobs = await response.json();
      if (response.status >= 200 && response.status <= 299) {
        setJobs(retrievedJobs);
        setIsLoading(false);
      } else {
          throw new Error(response.statusText);
      }
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { id, order, title, dates, duties, company } = jobs[index]; 
  
  const jobButtons = jobs.map((job, idx) => (
    <button
      className={`job-btn ${index == idx && 'active-btn'}`}
      key={`${index}-${job.id}`}
      onClick={() => setIndex(idx)}
    >
      {job.company}
    </button>
  )); 

  const dutyList = duties.map((duty, index) => (
    <div
      className='job-desc'
      key={`${index}-${id}`}
    >
      <FaAngleDoubleRight className='job-icon' />
      <p>{duty}</p>
    </div>
  ));

  return (
    <section className='section'>
      <div className='title'> 
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>

        <div className='btn-container'>
          {jobButtons}
        </div>    

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {dutyList}
        </article>
      </div>
    </section>  
  );
}

export default App
