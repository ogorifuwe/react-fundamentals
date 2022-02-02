import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  
  componentDidUpdate() {
  }

  renderContent() {
    if (this.state.latitude)
      return <div><SeasonDisplay latitude={this.state.latitude} /></div>;

    else if (this.state.errorMessage) 
      return <div><h4>Error: {this.state.errorMessage}</h4></div>;

    return <Spinner message={'Please accept location request'} />;
  }

  render() {
    return (
      <div className='app'>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
