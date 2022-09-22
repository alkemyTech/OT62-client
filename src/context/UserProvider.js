import React, { useState, useEffect, useContext } from "react";
import profileAPI from '../shared/APICalls';

const userContext = React.createContext();
const userToggleContext = React.createContext();
const loadingContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function useLoadingContext() {
    return useContext(loadingContext);
}

export function UserProvider ({children }) {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                sessionStorage.getItem('token')
                const userData = await profileAPI.get('/auth/me')
                setUser(userData.data.data.user)
            } catch (error) {
                setUser(null)
            }
        }
        getProfile()
    }, [])

    return (
        <userContext.Provider value={user} >
            <userToggleContext.Provider value={setUser}>
                { children }
            </userToggleContext.Provider>
        </userContext.Provider>
    )
}

export default userContext;