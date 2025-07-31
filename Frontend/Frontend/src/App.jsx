import { Routes , Route} from 'react-router-dom'
import Login from './Componenets/Login'
import Verify from './Componenets/Verify'
import Welcome from './Componenets/Welcome'
import Header from './Componenets/Header'
import Address from './Componenets/Address'
import ContactUs from './Componenets/ContactUs'
import TermsAndConditions from './Componenets/TermAndConditions'
import TrackOrder from './Componenets/TrackOrder'
import OrderHistory from './Componenets/OrderHistory'

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
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      
    </Routes>
    </>
  )
}

export default App
