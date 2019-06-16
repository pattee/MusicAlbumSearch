import React from 'react';

function SearchResults(props) {
  const albumsList = props.albumList.map((item) => {
    if(item.wrapperType === "collection") {
      return (
        <div key={item.collectionId} className="card" style={{width: "15rem", margin: "1rem"}}>
          <img src={item.artworkUrl100} className="card-img-top" alt={item.collectionName} />
          <div className="card-body">
            <p className="card-text">Artist Name: {item.artistName}</p>
            <p className="card-text">Album Name: {item.collectionName}</p>
            <p className="card-text">Year Released: {item.releaseDate}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="container">
      <div className="row">
        {albumsList}
      </div>
    </div>
  );
}

export default SearchResults;
