import { ToastContainer, toast } from "react-toastify"
import { Routes, Route } from "react-router-dom"
import AddSong from "./pages/Addsong"
import AddAlbum from "./pages/Addalbum"
import ListAlbum from "./pages/Listalbum"
import ListSong from "./pages/Listsong"
import Sidebar from "./component/sidebar"
import Navbar from "./component/navbar"

export default function App() {
  return (
    <div className="flex items-start  min-h-screen">
      <ToastContainer />
      <Sidebar />
    
      <div className="flex-1 h-screen overflow-y-scroll bg-mint-green">
         <Navbar/>
        <div className="pt-4 pl-5 sm:pt-6 sm:pl-8">
          <Routes>
            <Route path='/add-song' element={<AddSong />} />
            <Route path='/add-album' element={<AddAlbum />} />
            <Route path='/list-song' element={<ListSong />} />
            <Route path='/list-album' element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
