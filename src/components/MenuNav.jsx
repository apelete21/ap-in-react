import React from 'react'
import Logo from './NavComponents/Logo'
import { StartNavBtnDark, StartNavBtnLight } from './NavComponents/StartNavBtn'

export default function MenuNav({ logoImage, linkView }) {

    return (
        <div className="navbar">
            <Logo logoImage={logoImage} />
            {
                linkView === "lightlink" ? <StartNavBtnLight /> :
                    linkView === "darklink" ? <StartNavBtnDark /> :
                        null
            }
        </div>
    )
}
