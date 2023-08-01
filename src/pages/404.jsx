import React from 'react'
import { Helmet } from 'react-helmet'
import MenuNav from '../components/MenuNav'
import { MenuButtonDark } from '../components/MenuButton'
import { icons } from '../service/icons'

export default function ErrorPage() {

    const styles = {
        padding: ".5rem 2rem"
    }

    return (
        <>
            <Helmet>
                <title>Page not found | AP'IN</title>
            </Helmet>
            <div className="">
                <MenuNav logoImage={icons.lgDark} linkView="darklink" />
                <MenuButtonDark />
                <div style={{
                    background: "#fff",
                    color: "black",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        height: "fit-content",
                        display: "flex",
                    }}>
                        <span style={{
                            ...styles,
                            borderRight: "2px solid #0008"
                        }}>404</span>
                        <span style={{
                            ...styles,
                        }}>Page not found</span>
                    </div>
                </div>
            </div>
        </>
    )
}
