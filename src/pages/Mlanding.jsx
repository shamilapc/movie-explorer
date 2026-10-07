import React, { useRef, useState } from 'react'
import Mcards from '../components/Mcards'
import { useNavigate } from 'react-router-dom'

function Mlanding() {
   const searchRef = useRef()
   const [movies, setMovies] = useState([])          
  const [hasSearched, setHasSearched] = useState(false)
  const navigate = useNavigate()
  const getMovie=async()=>{
    let data =  searchRef.current.value
     if(data){
       setHasSearched(true)
       const res = await fetch(`https://www.omdbapi.com/?s=${data}&apikey=af55e318`)
       console.log(res);
        const result = await res.json()
      console.log(result)
       if (result.Response === "True") {
      setMovies(result.Search)
    } 
    else {
      setMovies([])
    }
    setLoading(false)
     }

     
  }
const next =(id)=>{
       navigate(`/movie/${id}/movie-details`)
     }
  return (
  <div style={{ backgroundColor: '#142135', minHeight: '100vh', paddingTop: '50px' }}>
  <div className="d-flex justify-content-center ">
   <div
  className="d-flex align-items-center px-3"
  style={{
    width: 'min(90%, 500px)',
    backgroundColor: '#142135',
    border: '2px solid #e5c24b',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(229, 194, 75, 0.2)'
  }}
>
  <i className="fa-solid fa-magnifying-glass me-2" style={{ color: '#e5c24b' }} onClick={getMovie} ></i>

  <input type="text" className="form-control movie-search" placeholder="Search for movies..." ref={searchRef}
    style={{
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }}
  />
</div>
  </div>
{
hasSearched && movies.length > 0 ? (
    <div className="row">
    <Mcards movies={movies} next={next} />
   </div> 
) : 
hasSearched && movies.length === 0 ? (
     <div className="d-flex justify-content-center align-items-center flex-column" style={{ marginTop: '250px' }}>
  <div 
    className="card p-4 border-0 shadow text-light" 
    style={{ 
      backgroundColor: '#0e1b2b', 
      borderRadius: '12px',
      minWidth: '400px' 
    }}
  >
    <div className="d-flex align-items-center">
      <i className="fa-solid fa-xmark text-danger fw-bold fa-2xl me-3 "></i>
      <div className='ms-5'>
        <h5 className="mb-1 fw-bold text-light">Movie not found.</h5>
        <p className="mb-0" style={{ fontSize: '13px',color:'#67696e' }}>
          Try searching for another movie!
        </p>
      </div>
    </div>
  </div>
</div>



) : (
     <div className="d-flex justify-content-center align-items-center flex-column" style={{marginTop:'250px'}}>
       
          <h1 >Welcome to Movie Explorer!</h1>
           <h2 style={{fontWeight:'none',color:'#67696e'}}>Search your favourite films above to begin.</h2>
       
      </div> 
)}

</div>
  )
}

export default Mlanding