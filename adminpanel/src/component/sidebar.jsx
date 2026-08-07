import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="bg-green-900 min-h-screen  pl-[4vw]">
            <img src={assets.logo} className="mt-5 w-35 hidden sm:block" alt="" />
            <img src={assets.logo_small} className="mt-5 w-35 mr-5 sm:hidden block" alt="" />
            <div className="flex flex-col gap-5 mt-10">

                <Link to='/add-song' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img src={assets.add_song} className="w-5" alt="" />
                    <p className="hidden sm:block">Add Song</p>
                </Link>


                <Link to='list-song' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img src={assets.song_icon} className="w-5" alt="" />
                    <p className="hidden sm:block">List Song</p>
                </Link>


                <Link to='add-album' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img src={assets.add_album} className="w-5" alt="" />
                    <p className="hidden sm:block">Add Album</p>
                </Link>


                <Link to='list-album' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img src={assets.album_icon} className="w-5" alt="" />
                    <p className="hidden sm:block">List Album</p>
                </Link>

            </div>
        </div>
    )
}