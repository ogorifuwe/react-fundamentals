import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console(position),
      err => console.log(err)
    );

    return <div><h4>Latitude: </h4></div>;
  }
}

export default App;
