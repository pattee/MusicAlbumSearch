import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { artistName: "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.artistName);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <div className="input-group mb-3">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="albumSearch" style={{fontSize: "20px", marginBottom: "1rem", marginTop: "1rem"}}>Search for Albums by Artist:</label>
                <input type="text" style={{marginBottom: "1rem"}} className="form-control" id="albumSearch" value={ this.state.term } onChange={(e) => this.setState({ artistName: e.target.value })} aria-label="Album Search by Artist" aria-describedby="inputGroup-sizing-default" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
