import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({ href, children, className, target }) {

    const GotoLink = () => {
        document.getElementById("main--nav").style.width = "0%";
    }

    return (
        <>
            <Link className={className} to={href} onClick={() => GotoLink()} target={target} rel="noreferrer">
                {children}
            </Link>
        </>
    )
}
