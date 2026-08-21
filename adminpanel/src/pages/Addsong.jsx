import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { toast } from "react-toastify"

export default function AddSong() {
    const [song, setSong] = useState(false)
    const [image, setImage] = useState(false)
    const [name, setName] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("none")
    const [loading, setLoading] = useState(false)
    const [albumData, setAlbumData] = useState([])

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('artist', artist)
            formData.append('album', album)
            formData.append('image', image)
            formData.append('audio', song)

            const response = await axios.post("http://localhost:3000/song/add", formData)

            toast.success("song added sucessfully")
            setName("")
            setArtist("")
            setAlbum("none")
            setImage(false)
            setSong(false)

        } catch (error) {
            toast.error("error.response?.data?.message || Something went wrong")
        }
        setLoading(false)
    }

    const loadAlbumData = async () => {
        try {
            const response = await axios.get("https://spotify-clone-1-gy08.onrender.com/album/list")
            setAlbumData(response.data.album)
        } catch (error) {
            toast.error("error occured")
        }
    }
    useEffect(()=>{
        loadAlbumData()
    },[])

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">
            </div>
        </div>
    ) : (
        <form onSubmit={submitHandler} className="flex flex-col items-start gap-4 text-gray-600 ">
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <p className="text-sm">Upload Song</p>
                    <input onChange={(e) => setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
                    <label htmlFor="song">
                        <img src={song ? assets.upload_added : assets.upload_song} className="w-20 cursor-pointer" alt="" />
                    </label>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm">Upload Image</p>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="w-20 cursor-pointer" alt="" />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p>Song Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[250%] h-8" placeholder="Type Song Name" type="text" />
            </div>

            <div className="flex flex-col gap-2">
                <p>Song Artist</p>
                <input onChange={(e) => setArtist(e.target.value)} value={artist} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[250%] h-8" placeholder="Type Here" type="text" />
            </div>

            <div className="flex flex-col gap-2">
                <p>Album</p>
                <select onChange={(e) => setAlbum(e.target.value)} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150%] h-11">
                    <option value='none'>none</option>
                    {albumData.map((item,index)=>(<option key={index} value={item.name}>{item.name}</option>))}
                </select>
            </div>
            <button type='submit' className="text-base bg-black text-white py-3 px-12 cursor-pointer"> Add </button>
        </form>
    )
}