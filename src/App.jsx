import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Body } from './components/body'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Contact } from './page/Contact'
import { About } from './page/about'
import { Service } from './page/Service'

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
