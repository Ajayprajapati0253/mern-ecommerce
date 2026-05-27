import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import VideoList from "./pages/VideoList";
import AddVideo from "./pages/AddVideo";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EditVideo from "./pages/EditVideo";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-video"
          element={
            <ProtectedRoute>
              <AddVideo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/videos"
          element={
            <ProtectedRoute>
              <VideoList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-video/:id"
          element={
            <ProtectedRoute>
              <EditVideo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
