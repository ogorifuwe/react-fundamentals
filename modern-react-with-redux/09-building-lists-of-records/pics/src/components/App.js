import { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    
    this.setState({images: response.data.results});
    
    /*.then(response => response.data.results)
      .then(data => this.setState{ images: data})
      .catch(err => console.log('There was an error', err))*/
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
