import { createContext, useState } from 'react';

export const GroupContext = createContext(null);

const GroupProvider = ({children}) => {

    const [  selectedgroup, setSelectedgroup ] = useState({});
    const [  allgroups, setAllgroups, ] = useState({});
    
    return (
        <GroupContext.Provider value={{ selectedgroup, setSelectedgroup, allgroups, setAllgroups, }}>
            {children}
        </GroupContext.Provider>
    )
}

export default GroupProvider;