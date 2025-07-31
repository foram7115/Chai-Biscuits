import { Routes , Route} from 'react-router-dom'
import Login from './Componenets/Login'
import Verify from './Componenets/Verify'
import Welcome from './Componenets/Welcome'
<<<<<<< HEAD
import Header from './Componenets/Header'
import Address from './Componenets/Address'
import ContactUs from './Componenets/ContactUs'
import TermsAndConditions from './Componenets/TermAndConditions'
import TrackOrder from './Componenets/TrackOrder'
import OrderHistory from './Componenets/OrderHistory'
=======
import Home from './Componenets/Home'
>>>>>>> d1bbe2f565997decc142d8146724e2ee6ce7cc4f

function App() {

  return (
    <>
      <Header/>
      <OrderHistory/>
      <TrackOrder/>
      <ContactUs/>
      <TermsAndConditions/>
      <Address/>
       <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      
=======
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/verify" element={<Verify />} />
      <Route exact path="/home" element={<Home />} />
>>>>>>> d1bbe2f565997decc142d8146724e2ee6ce7cc4f
    </Routes>
    </>
  )
}

export default App
