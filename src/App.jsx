import { useState } from 'react'
import { Route,Routes } from "react-router-dom";

import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Parcours from './pages/Parcours';
import Network from './pages/Network';
import Layout from './components/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/projets" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/parcours" element={<Parcours/>} />
          <Route path="/Reseaux" element={<Network/>} />
          <Route path="*" element={<Home/>} />

        </Route>

      </Routes>
    </>
  )
}

export default App
