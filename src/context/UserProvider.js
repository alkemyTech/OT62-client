import React, { useState, useEffect, useContext } from "react";
import profileAPI from '../shared/APICalls';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserProvider ({children }) {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if(token) {
            const getProfile = async () => {
                const userData = await profileAPI.get('/auth/me')
                setUser(userData.data.data.user)
            }
        getProfile()
        }
    }, [])

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={setUser}>
                { children }
            </userToggleContext.Provider>
        </userContext.Provider>
    )
}

export default userContext;