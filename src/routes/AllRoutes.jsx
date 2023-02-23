import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AdminRoutes from './admin/AdminRoutes'
import { ClientRoutes } from './client/ClientRoutes'

function AllRoutes() {
    return (
        <BrowserRouter>
            <AdminRoutes />
            <ClientRoutes />
        </BrowserRouter>
    )
}

export default AllRoutes