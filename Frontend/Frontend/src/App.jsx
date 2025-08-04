import { Routes, Route } from 'react-router-dom'
import Login from './Componenets/Login'
import Verify from './Componenets/Verify'
import Welcome from './Componenets/Welcome'
import Address from './Componenets/Address'
import ContactUs from './Componenets/ContactUs'
import TermsAndConditions from './Componenets/TermAndConditions'
import TrackOrder from './Componenets/TrackOrder'
import OrderHistory from './Componenets/OrderHistory'
import Home from './Componenets/Home'
import Menu from './Componenets/Menu'
import Register from './Componenets/Register'
import Cart from './Componenets/Cart'
import Offer from './Componenets/Offer'
import Offer2 from './Componenets/Offer2'


function App() {

  return (
    <>


      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/track-order" element={<TrackOrder />} />
        <Route exact path="/order-history" element={<OrderHistory />} />
        <Route exact path="/term-conditions" element={<TermsAndConditions />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/offer2" element={<Offer2 />} />
        <Route exact path="/offer" element={<Offer />} />
      </Routes>
    </>
  )
}

export default App
