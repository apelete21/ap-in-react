import React from 'react'
import { icons } from '../../service/icons'

export function LoadingComp({ scale }) {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            padding: "40px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img src={icons.loader} alt="loader" style={{
                // width: "100%",
                // height: "100%",
                transform: `scale(${scale})`
            }} />
        </div>
    )
}
