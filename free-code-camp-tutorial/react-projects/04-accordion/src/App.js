import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [ questions, setQuestions ] = useState(data);

  const questionItems = questions.map(question => (
    <SingleQuestion key={question.id} {...question} />
  ));

  return (
    <main>
      <div className='container'>
        <h3>FAQ related to login</h3>
        <section className='info'>
          {questionItems}
        </section>
      </div>
    </main>
  );
}

export default App;
