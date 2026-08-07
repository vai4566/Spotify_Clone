import { FaDownload, FaHome, FaSearch } from "react-icons/fa"
import{ Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-black flex items-center px-2 gap-1.5">
            <img className="w-7 h-7 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkdvpV5BwZBZVJvcSMvId2eHa74Rm6nx7qJivfDgHOA&s=10" alt="spotify logo" />
            <Link to='/' className="ml-45  bg-neutral-800 rounded-full flex items-center justify-center p-2 hover:bg-neutral-700 cursor-pointer">
                <FaHome size={18} className="text-white" />
            </Link>
            <div className="w-90 h-8  bg-neutral-800 rounded-full flex items-center p-2 hover:bg-neutral-700 cursor-pointer">
                <FaSearch size={18} className="text-white cursor-pointer" />
                <p className="ml-1 text-xs text-gray-300 font-light">what do you want to play?</p>
            </div>
            <div className="ml-3 w-35 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold hover:bg-gray-200 cursor-pointer">
                Explore Premium
            </div>
            <div className="group  text-xs flex items-center p-2 gap-1.5">
                <FaDownload size={10} className="text-neutral-500 group-hover:text-white cursor-pointer transition"/>
                <span className="text-neutral-500 group-hover:text-white cursor-pointer transition"> 
                   Install App 
                </span>
            </div>
            <div>
                <Link to='/login' className="w-15 h-7 text-xs bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer font-bold">Login</Link>
            </div>
            </div>
    )
}