import React from 'react'
import { Route, Routes } from 'react-router-dom'

function AdminRoutes() {
    return (
        <Routes>
            <Route path='/admin' element={ <h1>Adminroutes</h1> } />
        </Routes>
    )
}

export default AdminRoutes