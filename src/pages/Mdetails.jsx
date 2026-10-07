import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Mdetails() {
  let {id}=useParams()
   const [movie, setMovie] = useState(0)  
 useEffect(()=>{
    movieDetails()
   },[id])
  const movieDetails = async ()=>{
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=af55e318`)
    const response = await res.json()
    console.log(response);
    setMovie(response)
    
  }

  return (
   <>
  <div className="py-5 text-light" style={{ backgroundColor: '#0e1b2b', minHeight: '100vh' }} >
    <div className="row m-5 g-4 align-items-center">
      
      <div className="col-lg-4 col-12 text-center">
        <img
          src={movie.Poster}
          alt="The Avengers Poster"
          className="img-fluid rounded shadow-lg"
          style={{ maxHeight: '500px' }}
        />
      </div>

      
      <div className="col-lg-8 col-12">
        <h1 className="fw-bold mb-2">{movie.Title} <span className=" fs-4" style={{color:'#67696e'}}>({movie.Year})</span></h1>
        
        <div className="mb-3">
          <span className="badge bg-secondary me-2">{movie.Rated}</span>
          <span className="badge bg-dark border border-light me-2">📅 {movie.Released}</span>
          <span className="badge bg-dark border border-light me-2">⏱️ {movie.Runtime}</span>
          <span className="badge bg-light text-dark fw-bold">⭐ {movie.imdbRating} / 10 IMDb</span>
        </div>

        <p className="text-info mb-3"><strong>Genre:</strong> {movie.Genre}</p>

        <p className="lead fs-6 mb-4" style={{ lineHeight: '1.6' }}>
          {movie.Plot}
        </p>

        <div className="row g-3 small">
          <div className="col-md-6">
            <p className="mb-1"><strong>Director:</strong> {movie.Director}</p>
            <p className="mb-1"><strong>Writer:</strong> {movie.Writer}</p>
            <p className="mb-1"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="mb-1"><strong>Language:</strong> {movie.Language}</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1"><strong>Country:</strong> {movie.Country}</p>
            <p className="mb-1"><strong>Box Office:</strong> {movie.BoxOffice}</p>
            <p className="mb-1"><strong>Awards:</strong> {movie.Awards}</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top border-secondary">
          <h6 className="text-warning mb-2">Ratings:</h6>
          <div className="d-flex flex-wrap gap-3">
            <span className="badge bg-dark border border-secondary p-2">
              IMDb: <strong>{movie.imdbRating}/10</strong>
            </span>
             {movie.Ratings?.map((rating, index) => (

                <span
                 
                  className="badge bg-dark border border-secondary p-2">
                  {rating.Source}: <strong>{rating.Value}</strong>
                </span>

              ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</>
  )
}

export default Mdetails