import { Routes, Route } from 'react-router-dom'


import Footer from "./components/Footer/Footer"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import Gallery from "./components/Gallery/Gallery"
import CreateProduct from './components/Create_product/Create'
import { AuthProvaider } from './context/authContext'
import Logout from './components/Logout/logout'
import Ditails from './components/Ditails/Ditails'
import EditProduct from './components/Edit_product/Edit'
import AuthGuard from './components/Guards/AuthGuard'
import ErrorBoundary from './ErrorsBoundery/ErrorsBoundery'


function App() {


  return (
    
      <ErrorBoundary>
        <AuthProvaider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/gallery' element={<Gallery />} />

            <Route path='/product/:productId' element={<Ditails />} />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route element={<AuthGuard />}>
              <Route path='/products/create' element={<CreateProduct />} />

              <Route path='/product/:productId/edit' element={<EditProduct />} />

              <Route path='/logout' element={<Logout />} />

            </Route>

          </Routes>
          <Footer />
        </AuthProvaider>
      </ErrorBoundary>
    

  )
}

export default App
