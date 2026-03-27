import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Contact } from './page/Contact'
import { Service } from './page/Service'

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
