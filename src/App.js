import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap'
import Cards from './components/Cards/Cards';
import Fliters from './components/Filters/Fliters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episode from './Pages/Episode';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<CardDetails/>}/>

        <Route path='/episodes' element={<Episode/>}/> 
        <Route path='/episodes/:id' element={<CardDetails/>}/> 
        <Route path='/locations' element={<Location/>}/>
        <Route path='/locations/:id' element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}

function Home() {
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState(' ')
  let [fetchData, setFetchData] = useState([])
  // console.log(pageNumber);

  // **************filters btn states
  let [status, setStatus] =  useState(' ')
  let [species, setSpecies] =  useState(' ')
  let [gender, setGender] =  useState(' ')

  //template litarial;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`

  //Destruching
  let {info, results} = fetchData

  useEffect(() => {
    (async function(){
      let data = await fetch(api)
      .then(res => res.json())
      .catch(err => console.log(err))

      setFetchData(data)
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className='container'>
        <div className='row'>
             <Fliters setStatus={setStatus} setPageNumber={setPageNumber} setSpecies={setSpecies} setGender={setGender}/>


           <div className='col-lg-8 col-12'>
             <div className='row'>
                <Cards page='/' results={results}/>
             </div>
              
           </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
