import React from 'react'
import { Link } from 'react-router-dom'

export function StartNavBtnLight() {
    return (
        <div className="get--start">
            <Link className="btn default-outline light-outline" to={"/start-with-us"}>
                start with us
            </Link>
        </div>
    )
}

export function StartNavBtnDark() {
    return (
        <div className="get--start">
            <Link className="btn default-outline" to={"/start-with-us"}>
                start with us
            </Link>
        </div>
    )
}
