import { assets } from "../assets/assets"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
export default function AddAlbum() {

    const [image, setImage] = useState(false)
    const [colour, setColour] = useState("#ffffff")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('image', image)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('bgcolor', colour)

            const response = await axios.post("http://localhost:3000/album/add", formData)
            console.log(response.data);

            toast.success("album added sucessfully")
            setImage(false)
            setName("")
            setDescription("")
        } catch (error) {
            toast.error("error.response?.data?.message || Something went wrong")
        }
        setLoading(false)
    }

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">
            </div>
        </div>
    ) : (
        <form onSubmit={submitHandler} className="flex flex-col items-start gap-4 text-gray-600 ">
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <p className="text-sm">Upload Image</p>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="w-20 cursor-pointer" alt="" />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm">Album Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[250%] h-8" type='text' placeholder='Type Here' />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm">Album Description</p>
                <input onChange={(e) => setDescription(e.target.value)} value={description} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[250%] h-8" type='text' placeholder='Type Here' />
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-sm">Background Colour</p>
                <input onChange={(e) => setColour(e.target.value)} value={colour} type='color' />
            </div>

            <button type='submit' className="text-base bg-black text-white py-3 px-12 cursor-pointer"> Add </button>
        </form>
    )
}