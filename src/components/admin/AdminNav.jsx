import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AdminNav() {
    // const location = useLocation()
    return (
        <>
            <div className="main_nav">
                <ul className="nav_items">
                    <li><Link className="nav_link" to="/admin">Dashboard</Link></li>
                    <li><Link className="nav_link" to="/admin/quote-requests">Quote request</Link></li>
                    <li><Link className="nav_link" to="/admin/jobs">Jobs</Link></li>
                    <li><Link className="nav_link" to="/admin/newsletters">Newletters</Link></li>
                    <li><Link className="nav_link" to="/admin/blog">Blog</Link></li>
                </ul>
                
                {/* <p>{location.pathname}</p> */}

                <div className="profile_box">
                    <p>Jane Doe</p>
                    <img src="../assets/media/images/post/bigstock.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
