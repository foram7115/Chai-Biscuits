import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login' // Import the Login component
import Dash from './Components/Dash'
import AssignedDeliveries from './Components/AssignedDeliveries'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* Redirect "/" to "/register" */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> {/* Add the new login route */}
        <Route path="/Dash" element={<Dash />} /> {/* Add the new login route */}
        <Route path="/AssignedDeliveries" element={<AssignedDeliveries />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </>
  )
}

export default App
