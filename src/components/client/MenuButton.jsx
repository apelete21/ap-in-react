import React from 'react'

export function MenuButtonLight() {
    return (
        <div class="nav--toggler-container light-item">
            <div class="nav--toggler">
                <span class="nav--toggler__bar"></span>
                <span class="nav--toggler__bar"></span>
            </div>
        </div>
    )
}

export function MenuButtonDark() {
    return (
        <div class="nav--toggler-container light-item">
            <div class="nav--toggler">
                <span class="nav--toggler__bar bg-dark"></span>
                <span class="nav--toggler__bar bg-dark"></span>
            </div>
        </div>
    )
}
