import React from 'react'

export default function Logo({ logoImage }) {
    return (
        <div class="logo">
            <a class="logo logo_fixed logo--white" href="/">
                <img src={logoImage} alt="" />
            </a>
        </div>
    )
}
