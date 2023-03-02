import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Head from '../components/Head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import GetInTouch from '../pages/GetInTouch'
import StartWithUs from '../pages/StartWithUs'
import WhatWeDo from '../pages/WhatWeDo'
import WhoWeAre from '../pages/WhoWeAre'
import Stories from '../pages/Stories'
import JobDetails from '../pages/JobDetails'
import JobList from '../pages/JobList'
import Newsletter from '../pages/Newsletter'
import News from '../pages/News'
import ApplyToJob from '../pages/ApplyToJob'
import { ClientAppContextProvider } from '../Contexts/ClientAppContext'

export default function ClientRoutes() {

  const location = useLocation()

  return (
    <ClientAppContextProvider>
      <>
        <Head />
        <Menu />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/start-with-us" element={<StartWithUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/jobs/details" element={<JobDetails />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/apply" element={<ApplyToJob />} />
        <Route path="/subscribe" element={<Newsletter />} />
        <Route path="/news" element={<News />} />
      </Routes>
      {
        location.pathname !== "/get-in-touch" ||
          location.pathname !== "/subscribe" ?
          null :
          <Footer />
      }
    </ClientAppContextProvider>
  )
}
