
import './App.css'
import Mlanding from './pages/Mlanding'
import Mdetails from './pages/Mdetails'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
    <Header/>
         <Routes>
          <Route path='/' element={<Mlanding/>}/>
          <Route path='/movie/:id/movie-details' element={<Mdetails/>} />
         </Routes>
   {/*  <Footer/> */}
    </>
  )
}

export default App
