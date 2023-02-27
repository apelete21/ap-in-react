import React from 'react'

export default function Logo({ logoImage }) {
    return (
        <div className="logo">
            <a className="logo logo_fixed logo--white" href="/">
                <img src={logoImage} alt="" />
            </a>
        </div>
    )
}
