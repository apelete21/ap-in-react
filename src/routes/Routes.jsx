import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Head from "../components/Head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GetInTouch from "../pages/GetInTouch";
import StartWithUs from "../pages/StartWithUs";
import WhatWeDo from "../pages/WhatWeDo";
import WhoWeAre from "../pages/WhoWeAre";
import Stories from "../pages/Stories";
import JobDetails from "../pages/JobDetails";
import Newsletter from "../pages/Newsletter";
import News from "../pages/News";
import ApplyToJob from "../pages/ApplyToJob";
import Careers from "../pages/Careers";
import { ClientAppContextProvider } from "../Contexts/ClientAppContext";
import { AnimatePresence } from "framer-motion";
import { visitController } from "../service/visits";

(async () => {
  const token = localStorage.getItem("appToken");
  const { newToken } = await visitController({ page: "app", token });
  if (newToken) return localStorage.setItem("appToken", newToken);
})();

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ClientAppContextProvider>
        <>
          <Head />
          <Menu />
        </>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/start-with-us" element={<StartWithUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/careers/:title" element={<JobDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:title/apply" element={<ApplyToJob />} />
          <Route path="/subscribe" element={<Newsletter />} />
          <Route path="/news" element={<News />} />
        </Routes>
        {location.pathname !== "/get-in-touch" &&
        location.pathname !== "/subscribe" ? (
          <Footer />
        ) : null}
      </ClientAppContextProvider>
    </AnimatePresence>
  );
}
