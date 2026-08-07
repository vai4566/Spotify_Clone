import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/user";
import Displayhome from "./component/displayhome";
import Album from "./component/album";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Displayhome />} />
        <Route path="album/:id" element={<Album />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;