import React from 'react'
import { Helmet } from 'react-helmet'

export default function ErrorPage() {

    const styles = {
        padding: ".5rem 2rem"
    }

    return (
        <>
            <Helmet>
                <title>Page not found | AP'IN</title>
            </Helmet>
            <div style={{
                background: "#0009",
                color: "#fff",
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
                        borderRight: "2px solid white"
                    }}>404</span>
                    <span style={{
                        ...styles,
                    }}>Page not found</span>
                </div>
            </div>
        </>
    )
}
