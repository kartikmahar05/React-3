import React from 'react'
// import Material from './Material'
import Header from './Header'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (    
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Gallery" element={<Gallery/>}/>

  </Routes>
</BrowserRouter>

  )
}

export default App