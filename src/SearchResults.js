import React from 'react';
import cats from './img/cats.jpg';
const axios = require('axios');

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    axios.get("https://itunes.apple.com/lookup?id=909253&entity=album", {
      params: {
        ID: 909253,
        entity: "album"
      },
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(function (response) {
      this.setState({apples: "organge"});
      // this.setState({results: response.data.results});
      //
      // var results = response.data.results;
      // var thins = results.map((item) => {
      //   if(item.wrapperType == "collection")
      //     console.log(item.collectionName);
      //   return <li>{item.collectionName}</li>;
      //
      // });

      // return results;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          "there there......."

        </div>
      </div>
    );
  }
}

export default SearchResults;
