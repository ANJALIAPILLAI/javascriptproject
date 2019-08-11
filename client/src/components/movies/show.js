import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => {
        console.log(result);
        setMovie(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <br/>
      <a className="btn btn-success" href={`/movies`}>Back to the lst</a>
      <hr/>
      <header>
        <h1>{movie && movie.title}</h1>
      </header>
      <hr/>
      <div>
        {movie && movie.content}
      </div>
    </div>
  );
}

export default Show;