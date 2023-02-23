import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/client/Home'
// import OneYear from '../../pages/client/OneYear'
import "../../assets/style/main.css"
import Head from '../../components/client/Head'
import Menu from '../../components/client/Menu'
import Footer from '../../components/client/Footer'

export const ClientRoutes = () => {
  return (
    <>
      <Head />
      <Menu />
      <Routes>
        {/* <Route path="/oneyear" element={<OneYear />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
