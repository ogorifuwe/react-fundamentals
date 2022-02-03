import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: ''
    };
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  /*const getLatitude  = () => {
    const position = window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ position.coords.latitude }),
      err => console.log(err)
    );
  };*/

  render() {
    if (this.state.latitude)
      return <div><h4>Latitude: {this.state.latitude}</h4></div>;

    else if (this.state.errorMessage) 
      return <div><h4>Error: {this.state.errorMessage}</h4></div>;

    return <div><h4>...loading...</h4></div>
  }
}

export default App;
