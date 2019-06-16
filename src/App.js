import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { albumList: [], errorMessage: false };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(artist){
      const responseArtist = await axios.get(`https://itunes.apple.com/search?term=${artist}`, {
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      }).catch(error => {
          console.log(error);
      });

      if(responseArtist.data.results.length != 0) {
        const responseAlbum = await axios.get(`https://itunes.apple.com/lookup?id=${responseArtist.data.results[0].artistId}&entity=album`, {
          params: {
            ID: responseArtist.data.results[0].artistId,
            entity: "album"
          },
          headers: {'X-Requested-With': 'XMLHttpRequest'}
        }).catch(error => {
            console.log(error);;
        });

        this.setState({ albumList: responseAlbum.data.results });
      }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
          <section>
            <SearchResults albumList={this.state.albumList} />
          </section>
        </header>
      </div>
    );
  }
}

export default App;
