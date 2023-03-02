import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminHead from '../../components/admin/AdminHead'
import Aside from '../../components/admin/Aside'
import AdminHome from '../../pages/admin/AdminHome'
import AdminNav from '../../components/admin/AdminNav'
import QuoteRequests from '../../pages/admin/QuoteRequests'
import Jobs from '../../pages/admin/Jobs'
import Newsletters from '../../pages/admin/Newsletters'
import Blog from '../../pages/admin/Blog'
import AddNewJob from '../../pages/admin/AddNewJob'
import ApplicationList from '../../pages/admin/ApplicationList'

function AdminRoutes() {

    const location = useLocation()

    if (location.pathname.search("admin") === 1) return (

        <>

            <AdminHead />

            <div class="main_wrapper">

                <Aside />

                <div class="main">
                    <AdminNav />

                    <Routes>
                        <Route path='/admin' element={<AdminHome />} />
                        <Route path='/admin/quote-requests' element={<QuoteRequests />} />
                        <Route path='/admin/jobs' element={<Jobs />} />
                        <Route path='/admin/jobs/new' element={<AddNewJob />} />
                        <Route path='/admin/jobs/applications' element={<ApplicationList />} />
                        <Route path='/admin/newsletters' element={<Newsletters />} />
                        <Route path='/admin/blog' element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AdminRoutes