import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Hero from './components/Hero/Hero'
import Client from './components/Client/Client'
import Vaule from './components/Vaule/Vaule'
import Intro from './components/Intro/Intro'
import Book from './components/Book/Book'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Client/>
      <Vaule/>
      <Intro/>
      <Book />
    </div>
  )
}

export default App
