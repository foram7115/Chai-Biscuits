import { Routes , Route} from 'react-router-dom'
import Login from './Componenets/Login'
import Verify from './Componenets/Verify'

function App() {

  return (
    <>
       <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
    </>
  )
}

export default App
