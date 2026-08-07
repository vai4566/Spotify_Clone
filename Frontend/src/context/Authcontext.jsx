import { createContext, useState } from "react";
import axios from "axios"
export const AuthContext = createContext();

export default function AuthProvider({children}) {
        console.log("Auth Provider Loaded");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const register = async(name,email,password)=>{

        const res = await axios.post("/user/register",{
            name,
            email,
            password
        });

        setUser(res.data.user);
    }


    const login = async(email,password)=>{

        const res = await axios.post("/user/login",{
            email,
            password
        });

        setUser(res.data.user);
    }


    const logout = async()=>{

        await axios.post("/user/logout");

        setUser(null);
    }


    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            register,
            login,
            logout,
            isLoggedIn, 
            setIsLoggedIn,
            email,
            setEmail,
            password,
            setPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}