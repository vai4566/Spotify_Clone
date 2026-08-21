import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function Register() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password
        };
        try {
            const response = await axios.post("https://spotify-clone-1-gy08.onrender.com/user/register", user)
            setName("")
            setEmail("")
            setPassword("")
            toast.success("User Registerd Successfully")
            navigate('/')

        } catch (error) {
            toast.error("Error Occured")
        }
    }
    return (

        <div className="min-h-screen bg-black flex items-center justify-center">

            <form onSubmit={submitHandler} className="w-96 bg-neutral-900 p-8 rounded-xl flex flex-col gap-5">

                <h1 className="text-3xl text-white font-bold text-center">
                    Register
                </h1>

                <div className="flex flex-col gap-2">
                    <p className="text-white text-sm">
                        Name
                    </p>

                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                        type="text"
                        value={name}
                        placeholder="Enter Your name"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-white text-sm">
                        Email
                    </p>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                        type="email"
                        value={email}
                        placeholder="Example@gmail.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-white text-sm">
                        Password
                    </p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                        type="password"
                        value={password}
                        placeholder="Enter Your Password"
                    />

                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-400"
                >
                    Register
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Already have an account?
                    <span
                        onClick={() => navigate("/login")}
                        className="text-white ml-1 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>

            </form>

        </div>
    );
}