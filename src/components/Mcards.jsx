import React from 'react';
import { Link } from 'react-router-dom'; // Optional if you want clicking to lead to details

function Mcards({ movies,next  }) {


  return (
    <div className="container-fluid px-5 mb-5">
      <div className="row g-3 mt-2">
        {movies.map((movie) => (
          <div className="col-lg-3 col-md-4 col-6" >
            <div
              className="card p-2 h-100"
              style={{
                backgroundColor: '#0e1b2b',
                border: 'none',
                borderRadius: '8px'
              }}
              onClick={() => next(movie.imdbID)}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                className="card-img-top"
                alt={movie.Title}
                style={{
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />

              <div className="card-body px-2 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-light mb-2 text-truncate" title={movie.Title}>
                    {movie.Title}
                  </h5>

                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-light">
                      📅 {movie.Year}
                    </span>
                    <span style={{ color: '#e5c24b' }}>
                      ⭐ Movie
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mcards