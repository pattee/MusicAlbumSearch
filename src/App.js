import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { albumList: '' };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(){
      const response = await axios.get("https://itunes.apple.com/lookup?id=909253&entity=album", {
        params: {
          ID: 909253,
          entity: "album"
        },
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      });

      this.setState({ albumList: response.data.results });
      console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
          <section>
            <SearchResults />
          </section>
        </header>
      </div>
    );
  }
}

export default App;
