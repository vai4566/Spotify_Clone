import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa"
export default function ListSong() {
    const [data, setData] = useState([])
    const fetchSongs = async () => {
        try {
            const response = await axios.get("http://localhost:3000/song/list")
            setData(response.data.songs)
        } catch (error) {
            toast.error("error occured")
        }
    }

    const removeSong = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/song/remove/${id}`)
            toast.success("Song is Deleted")
            await fetchSongs()
        } catch (error) {
            toast.error("error occured")
        }
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    return (
        <div>
            <p>All Songs List</p>
            <br />
            <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100 ">
                <b>Image</b>
                <b>Name</b>
                <b>Album</b>
                <b>Duration</b>
                <b>Action</b>
            </div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5" >
                        <img className="w-12" src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.album}</p>
                        <p>{item.duration}</p>
                        <p onClick={() => removeSong(item._id)} className="cursor-pointer">
                            <FaTrash className="text-red-600 text-lg hover:text-red-800" /></p>
                    </div>
                )
            })}
        </div>
    )
}