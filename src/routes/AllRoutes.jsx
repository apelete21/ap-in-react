import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AdminRoutes from './admin/AdminRoutes'
import { ClientRoutes } from './client/ClientRoutes'
// import "../assets/style/main.css"
import  "../assets/style/dashboard.css"

function AllRoutes() {
    return (
        <BrowserRouter>
            <AdminRoutes />
            <ClientRoutes />
        </BrowserRouter>
    )
}

export default AllRoutes