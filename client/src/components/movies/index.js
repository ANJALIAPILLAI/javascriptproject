import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Axios from "axios";

function Index() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Axios.get('/api/movies')
          .then(result => {
            setMovies(result.data);
          })
          .catch(err => console.error(err));
      }, []);

    return (
        <div className="container">
        <header>
            <h1>All Movies</h1>
        </header>

        <div>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Author</th>
                <th></th>
                </tr>
            </thead>

            <tbody>
                {movies.map(movie => (
                <tr key={movie._id}>
                    <td>
                    <a href={`/movies/${movie._id}`}>{movie.title}</a></td>
                    <td>{movie.status}</td>
                    <td>{movie.author.firstName} {movie.author.lastName}</td>
                    <td>
                        <Link to={`/movies/${movie._id}/edit`}>edit</Link> | 
                        <Link to={`/movies/${movie._id}/destroy`}>delete</Link>
                    </td>
                
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );    
}

export default Index;