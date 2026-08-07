import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Login() {

    const {
        login,
        register,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        isLoggedin,
        setisLoggedIn
    } = useContext(AuthContext);

   // const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (isLoggedin) {
                // Login API call
                await login(email, password);

            } else {
                // Register API call
                await register(name, email, password);
            }

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="min-h-screen bg-black flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="w-96 bg-neutral-900 p-8 rounded-xl flex flex-col gap-5"
            >

                <h1 className="text-3xl text-neutral-500 font-bold text-center">
                    {isLoggedin ? "Login" : "Register"}
                </h1>


                {!isLoggedin && (
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                        type="text"
                        placeholder="Name"
                    />
                )}


                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                    type="email"
                    placeholder="Email"
                />


                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="bg-neutral-800 text-white p-3 rounded-md outline-none"
                    type="password"
                    placeholder="Password"
                />


                <button
                    type="submit"
                    className="bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-400"
                >
                    {isLogin ? "Login" : "Register"}
                </button>


                <p className="text-center text-gray-400 text-sm">

                    {isLoggedin
                        ? "Don't have an account?"
                        : "Already have an account?"
                    }


                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-white ml-1 cursor-pointer hover:underline"
                    >
                        {isLoggedin ? "Register" : "Login"}
                    </span>

                </p>


            </form>

        </div>
    );
}