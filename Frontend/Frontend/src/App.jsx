import { Routes , Route} from 'react-router-dom'
import Login from './Componenets/Login'
import Verify from './Componenets/Verify'
import Welcome from './Componenets/Welcome'
import Home from './Componenets/Home'

function App() {

  return (
    <>
       <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/verify" element={<Verify />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
