import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/client/Home'
// import OneYear from '../../pages/client/OneYear'
import "../../assets/style/main.css"
import Head from '../../components/client/Head'
import Menu from '../../components/client/Menu'
import Footer from '../../components/client/Footer'
import GetInTouch from '../../pages/client/GetInTouch'
import StartWithUs from '../../pages/client/StartWithUs'
import WhatWeDo from '../../pages/client/WhatWeDo'
import WhoWeAre from '../../pages/client/WhoWeAre'
import Stories from '../../pages/client/Stories'
import JobDetails from '../../pages/client/JobDetails'
import JobList from '../../pages/client/JobList'
import Newsletter from '../../pages/client/Newsletter'

export const ClientRoutes = () => {

  const location = useLocation()

  return (
    <>
      <Head />
      <Menu />
      <Routes>
        {/* <Route path="/oneyear" element={<OneYear />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/start-with-us" element={<StartWithUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/jobs/details" element={<JobDetails />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/subscribe-to-newsletters" element={<Newsletter />} />
      </Routes>
      {
        location.pathname !== "/get-in-touch" &&
        location.pathname !== "/subscribe-to-newsletters"
        && 
        <Footer />
      }
    </>
  )
}
