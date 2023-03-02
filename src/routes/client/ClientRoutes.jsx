import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/client/Home'
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
import News from '../../pages/client/News'
import ApplyToJob from '../../pages/client/ApplyToJob'
import { ClientAppContextProvider } from '../../Contexts/ClientAppContext'

export const ClientRoutes = () => {

  const location = useLocation()

  return (
    <ClientAppContextProvider>
      {location.pathname.search("/admin") === 0 ?
        null :
        <>
          <Head />
          <Menu />
        </>
      }
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
        <Route path="/jobs/apply" element={<ApplyToJob />} />
        <Route path="/subscribe" element={<Newsletter />} />
        <Route path="/news" element={<News />} />
      </Routes>
      {
        location.pathname !== "/get-in-touch" ||
          location.pathname !== "/admin" ||
          location.pathname !== "/subscribe" ?
          null :
          <Footer />
      }
    </ClientAppContextProvider>
  )
}
