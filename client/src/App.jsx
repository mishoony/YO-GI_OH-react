import { Routes, Route } from 'react-router-dom'


import Footer from "./components/Footer/Footer"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import Gallery from "./components/Gallery/Gallery"
import CreateProduct from './components/Create_product/Create'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/gallery' element={<Gallery />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/products/create' element={<CreateProduct />} />

      </Routes>
      <Footer />
    </>

  )
}

export default App
