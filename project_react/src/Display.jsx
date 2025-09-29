import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx';

const Display = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default Display
