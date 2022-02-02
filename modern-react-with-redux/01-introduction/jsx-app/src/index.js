// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  const buttonText = { text: 'click'}; //'Click Me!';

  return (
    <div>
      <label
        className="label"
        htmlFor="name"
      >
        Enter Name:
      </label>
      <input
        id="name"
        type="text"
      />
      <button
        style={{ backgroundColor: 'blue', color: 'white' }}
      >
        {buttonText.text}
      </button>
    </div>
  )
};

// render the react component
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
