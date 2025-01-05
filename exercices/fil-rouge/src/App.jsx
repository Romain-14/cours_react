import {Routes, Route} from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="auth/login" element={<Login/>} />
        <Route path="auth/register" element={<Register/>} />
    </Routes>
    
    </>
  )
}

export default App