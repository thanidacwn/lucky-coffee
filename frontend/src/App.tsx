import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/menu" element={<Sidebar />}/>
        <Route path="/order" element={<Sidebar />}/>
        <Route path="/promotions" element={<Sidebar />}/>
        <Route path="/data" element={<Sidebar />}/>
        <Route path="/logout" element={<Sidebar />}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App