import React from 'react'
import About from './Containers/About/About'
import Footer from './Containers/Footer/Footer'
import Header from './Containers/Header/Header'
import Skills from './Containers/Skills/Skills'
import Testimonials from './Containers/Testimonials/Testimonials'
import Work from './Containers/Work/Work'
import Navbar from './Components/Navbar/Navbar'


import './App.scss';


function App() {
  return (
    <div className="app">
      <Navbar/> 
       <Header />
      <About /> 
       <Work />
      <Skills />
     <Testimonials />
      <Footer/> 
    </div>
  )
}

export default App
