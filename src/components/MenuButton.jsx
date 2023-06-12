import React, { useContext } from 'react'
import { ClientAppContext } from '../Contexts/ClientAppContext'

export function MenuButtonLight() {
    const { openNav } = useContext(ClientAppContext)
    return (
        <div className="nav--toggler-container light-item" onClick={openNav}>
            <div className="nav--toggler">
                <span className="nav--toggler__bar"></span>
                <span className="nav--toggler__bar"></span>
            </div>
        </div>
    )
}

export function MenuButtonDark() {
    const { openNav } = useContext(ClientAppContext)
    return (
        <div className="nav--toggler-container light-item">
            <div className="nav--toggler" onClick={openNav}>
                <span className="nav--toggler__bar bg-dark"></span>
                <span className="nav--toggler__bar bg-dark"></span>
            </div>
        </div>
    )
}

export function CloseMenuButton() {
    const { closeNav } = useContext(ClientAppContext)
    return (
        <div className="close-nav--toggler-container light-item" >
            <div className="nav--toggler"  onClick={closeNav}>
                <span className="nav--toggler__bar"></span>
                <span className="nav--toggler__bar"></span>
            </div>
        </div>
    )
}
