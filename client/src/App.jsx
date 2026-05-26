import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import VideoList from './pages/VideoList';
import AddVideo from './pages/AddVideo';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditVideo from './pages/EditVideo';


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video/:id" element={<EditVideo />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
