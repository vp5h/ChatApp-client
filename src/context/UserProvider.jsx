import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [ person, setPerson ] = useState({});
    const [ allusers, setAllusers] = useState({})
     
    return (
        <UserContext.Provider value={{ person, setPerson, allusers, setAllusers }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;