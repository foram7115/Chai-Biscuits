import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import AssignedDeliveries from './Components/AssignedDeliveries'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Dash from './Components/Dash'
import Login from './Components/Login'
import OrderHistory from './Components/OrderHistory'
import Otp from './Components/Otp'
import Register from './Components/Register'
import TermAndConditions from './Components/TermAndConditions'
import Welcome from './Components/Welcome'

function App() {
  return (
    <>
      {/* Header stays on top for all pages */}
      <Header />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/AssignedDeliveries" element={<AssignedDeliveries />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/TermAndConditions" element={<TermAndConditions />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
