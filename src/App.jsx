
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Footer } from './components/footer'
import { Body } from './components/body'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Contact } from './page/Contact'
import { Service } from './page/Service'
import { About } from './page/About'
import { Program} from './page/Program'

function App(){
  const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/program" element={<Program />} />
      </Routes>

      <Footer/>
      <Body/>
    </> 
  )
}


export default App
