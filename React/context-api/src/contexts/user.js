import { useState, createContext } from "react";
export const UserContext = createContext({});
function UserProvider({Children}) {
    const [username, setUsername] = useState('Luiz');
    return (
        <UserContext.Provider value={{username}}>
            {Children}
        </UserContext.Provider>
    )
}
export default UserProvider;