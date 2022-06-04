import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Sidebar } from "./components/sidebar"
import { NewArrivals } from './pages/NewArrivls'
import { Furniture } from './pages/Furniture'
import { Lighting } from './pages/Lighting'
import { Navbar } from './components/navbar'
import { Routes, Route, Link } from "react-router-dom";
import { Productdetails } from "./components/productdetails"
import { Register } from './pages/Register'
import { Login } from './pages/Login'
// import { Cart} from './components/cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/new_arrival" element={<NewArrivals />} />
        <Route path="/farniture" element={<Furniture />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/" element={<NewArrivals />} />
        <Route path="/new_arrival/:id" element={<Productdetails />} />
        <Route path="/farniture/:id" element={<Productdetails />} />
        <Route path="/lighting/:id" element={<Productdetails/>} />
      </Routes>
    </div>
  )
}

export default App
