import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/usercontext";
import { useContext } from "react";

export default function Login() {
    const navigate = useNavigate()

    const { setLoggedIn, setUserData } = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        };
        try {
            const response = await axios.post("http://localhost:3000/user/login", user)
            console.log("USER:", response.data.user);
            console.log("USER KEYS:", Object.keys(response.data.user));
            setEmail("")
            setPassword("")
            toast.success("User login Successfully")
            navigate('/')
            setLoggedIn(true)
            setUserData(response.data.user)
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">

            <form onSubmit={submitHandler} className="w-96 bg-neutral-900 p-8 rounded-xl flex flex-col gap-5">

                <h1 className="text-3xl text-white font-bold text-center">
                    Login
                </h1>

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
                    Login
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Don't have an account?
                    <span
                        onClick={() => navigate("/register")}
                        className="text-white ml-1 cursor-pointer hover:underline">
                        Register
                    </span>
                </p>

            </form>

        </div>
    );
}