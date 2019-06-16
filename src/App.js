import React from 'react';
import SearchResults from './SearchResults';
import cats from './img/cats.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Album search</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
          </div>
        </div>
        <section>
          <SearchResults />
        </section>
      </header>
    </div>
  );
}

export default App;
