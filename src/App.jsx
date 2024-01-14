

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/footer/Footer'
import men_banner from '/images/10.jpg'
import women_banner from '/images/16.jpg'
import kid_banner from '/images/1.jpg'
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/> } />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/> }/>

        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
