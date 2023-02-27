import React, { createContext } from 'react'
import Loader from '../service/loader';

export const ClientAppContext = createContext()

export const ClientAppContextProvider = ({ children }) => {

    function openNav() {
        Loader()
        setTimeout(() => {
            document.getElementById("main--nav").style.width = "100%";
        }, 400);
    }

    function closeNav() {
        Loader()
        setTimeout(function () {
            document.getElementById("main--nav").style.width = "0%";
        }, 400);
    }

    return (
        <ClientAppContext.Provider
            value={{
                openNav,
                closeNav
            }}
        >
            {children}
        </ClientAppContext.Provider>
    )
}