
import { Route, Routes } from 'react-router-dom'

import Header from './Pages/Header'
import Footer from './Pages/Footer'

import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  return (
    <>        
        <Header/>

        <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login />}/>

        </Routes>

        <Footer />
    </>
  )
}

export default App