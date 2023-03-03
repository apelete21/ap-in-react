import React, { createContext, useState } from 'react'
import Loader from '../service/loader';

export const ClientAppContext = createContext()

export const ClientAppContextProvider = ({ children }) => {

    let [jobSelectedId, setJobSelectedId] = useState("default")

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

    const SelectingJob = (id) => {
        setJobSelectedId(id)
    }

    return (
        <ClientAppContext.Provider
            value={{
                openNav,
                closeNav,
                jobSelectedId,
                SelectingJob
            }}
        >
            {children}
        </ClientAppContext.Provider>
    )
}