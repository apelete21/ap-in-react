import React from 'react'
import NavLink from '../NavLink'

export default function Logo({ logoImage }) {
    return (
        <div className="logo">
            <NavLink className="logo logo_fixed logo--white" href="/">
                <img src={logoImage} alt="" />
            </NavLink>
        </div>
    )
}
