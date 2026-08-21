import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa"
export default function ListAlbum(){
   const [data, setData] = useState([])
    const fetchAlbums = async () => {
        try {
            const response = await axios.get("https://spotify-clone-1-gy08.onrender.com/album/list")
            console.log(response.data);
            setData(response.data.album)
        } catch (error) {
            toast.error("error occured")
        }
    }

    const removeAlbum = async (id) => {
         
        try {
            const response = await axios.delete(`https://spotify-clone-1-gy08.onrender.com/album/remove/${id}`)
            toast.success("Album is Deleted")
            await fetchAlbums()
        } catch (error) {
            toast.error("error occured")
        }
    }

    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <div>
            <p>All Albums List</p>
            <br />
            <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100 ">
                <b>Image</b>
                <b>Name</b>
                <b>Description</b>
                <b>Album Colour</b>
                <b>Action</b>
            </div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5" >
                        <img className="w-12" src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <input type="color" value={item.bgcolor} readOnly/>
                        <p onClick={() => removeAlbum(item._id)} className="cursor-pointer">
                            <FaTrash className="text-red-600 text-lg hover:text-red-800" /></p>
                    </div>
                )
            })}
        </div>
    )
}
