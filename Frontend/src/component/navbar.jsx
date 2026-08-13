import { FaDownload, FaHome,FaSearch} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/usercontext"
import { PlayerContext } from "../context/playercontext"
import { useState } from "react"
import axios from "axios"

export default function Navbar() {
  const navigate = useNavigate()
  const { userData, loggedIn, setLoggedIn, setUserData } = useContext(UserContext)
  const { songsData, playSong } = useContext(PlayerContext);

  const [search, setSearch] = useState("");
  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase())
  );

  const logout = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/user/logout")
      setLoggedIn(false)
      setUserData(null)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];

  const getColor = (name) => {
    let total = 0;

    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }

    return colors[total % colors.length];

  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-black flex items-center px-2 gap-1.5">
      <img className="w-7 h-7 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkdvpV5BwZBZVJvcSMvId2eHa74Rm6nx7qJivfDgHOA&s=10" alt="spotify logo" />
      <Link to='/' className="ml-45  bg-neutral-800 rounded-full flex items-center justify-center p-2 hover:bg-neutral-700 cursor-pointer">
        <FaHome size={18} className="text-white" />
      </Link>
      <div className="w-90 h-8  bg-neutral-800 rounded-full flex items-center p-2 hover:border border-white bg-neutral-700 cursor-pointer relative">
        <FaSearch size={18} className="text-white cursor-pointer" />
        <input
          type="text"
          placeholder="What do you want to play?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 w-full bg-transparent outline-none text-white text-xs"
        />


        {search && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 mt-2 w-full bg-neutral-800 rounded-lg p-2 z-50 overflow-hidden">

            {filteredSongs.length > 0 ? (

              filteredSongs.map((song) => (

                <div
                  key={song._id}
                  onClick={() => {
                    if (!loggedIn) {
                      navigate("/login");
                      return;
                    }

                    playSong(song);
                    setSearch("");
                  }}
                  className="flex items-center gap-3 p-2 hover:bg-neutral-700 rounded-md cursor-pointer"
                >

                  <img
                    src={song.image}
                    className="w-10 h-10 rounded-md"
                  />

                  <div>
                    <p className="text-white text-sm">
                      {song.name}
                    </p>

                    <p className="text-gray-400 text-xs">
                      {song.artist}
                    </p>
                  </div>

                </div>

              ))

            ) : (

              <p className="text-gray-400 text-sm p-3">
                No results found
              </p>

            )}

          </div>
        )}
      </div>
      <div className="ml-3 w-35 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold hover:bg-gray-200 cursor-pointer">
        Explore Premium
      </div>
      <div className="group  text-xs flex items-center p-2 gap-1.5">
        <FaDownload size={10} className="text-neutral-500 group-hover:text-white cursor-pointer transition" />
        <span className="text-neutral-500 group-hover:text-white cursor-pointer transition">
          Install App
        </span>
      </div>
      <div>
        {loggedIn ? (
          <div className="relative group">
            <div className={`w-8 h-8 rounded-full border border-blue-500 ${getColor(userData.name)} text-black flex justify-center items-center font-bold ml-5 relative group`}>
              {userData.name[0].toUpperCase()}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                  <ul className="list-none m-0 p-2 bg-gray-200 text-sm">
                    <li onClick={logout} className="py-1 px-2 hover:bg-gray-300 cursor-pointer p-10 text-xs"> Logout </li>
                  </ul>
                </div>
            </div>
          </div>
        ) : (<Link to='/login' className="w-15 h-7 text-xs bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer font-bold">Login</Link>
        )}
      </div>
    </div>
  )
}
