import { createContext, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [loggedIn, setLoggedIn] = useState(false);

    const [userData, setUserData] = useState(null)

    const getUserData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user/list")
            setUserData(response.data.userData)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <UserContext.Provider
            value={{
                loggedIn,
                setLoggedIn,
                userData,
                setUserData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}