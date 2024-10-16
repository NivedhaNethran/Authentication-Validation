import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './Nav'
import Sigin from './Sigin'
import Login from './Login'
import Validation from './Valid'

function App () {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/sign' element={<Sigin/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/val' element={<Validation/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App