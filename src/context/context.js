import React, { useContext, useState } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [clients, setClients] = useState([]);


    return (
        <AppContext.Provider
            value={{
                clients,
                
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// custom hook 
export const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppContext, AppProvider };