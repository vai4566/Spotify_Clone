import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Displayhome from "./component/displayhome";
import Album from "./component/album";
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Displayhome />} />
        <Route path="album/:id" element={<Album />} />
      </Route>
      <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;