import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/menu" element={<h1>Menu</h1>}/>
        <Route path="/order" element={<h1>Order</h1>}/>
        <Route path="/promotions" element={<h1>Promotions</h1>}/>
        <Route path="/data" element={<h1>Data</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App