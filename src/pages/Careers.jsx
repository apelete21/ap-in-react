import React, { useEffect, useState } from "react";
import { icons } from "../service/icons";
import JobBanner from "../assets/media/images/banners/jobbanner.png";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import JobCard from "../components/job/JobCard";
import { getAllJobs } from "../api/requests/jobsRequests";
import Motion from "../components/Motion/Motion";
import { visitController } from "../service/visits";
import { Helmet } from "react-helmet";
import { LoadingComp } from "../components/loader";

(async () => {
  const token = localStorage.getItem("jobToken");
  const { newToken } = await visitController({ page: "job", token });
  if (newToken) return localStorage.setItem("jobToken", newToken);
})();

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getJobs = async () => {
      const response = await getAllJobs();
      if (response.ok) {
        setJobs(response?.data);
      } else {
        setError(response?.data.message);
      }
      setIsLoading(false);
    };
    if (isLoading) getJobs();
  }, [jobs, isLoading]);

  return (
    <>
      <Helmet>
        <title>Join the Team | AP’IN</title>
      </Helmet>
      <Motion>
        <header>
          <div className="fluid-wrapper main-navigation bg_white">
            <MenuNav logoImage={icons.lgDark} linkView="darklink" />
            <div className="offset-canva job-main-title">
              <h1 className="section--hero__title">
                Want to be <br />a part of the journey?
              </h1>
              <p className="legend-text">
                Do what you love or discover new challenges in a place where you
                can take ownership, chase ideas and build the future of
                digitaliation with us.
              </p>
            </div>
          </div>
          <MenuButtonDark />
        </header>

        {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}

        <section className="job--intro  offset-canva">
          <div className="job--banner-section">
            <img
              className="job-fluid-banner"
              src={JobBanner}
              alt="Home banner"
            />
          </div>

          <div className="jobs_list__container">
            <div className="list-text_section">
              {/* <h4 className="list_jobs_title">LIST OF JOBS</h4> */}
              {/* <ul className="legend_links">
              <li className="legend_link__active">All</li>
              <li className="legend_link">Web development</li>
              <li className="legend_link">Digital marketing</li>
              <li className="legend_link">Graphic Design</li>
            </ul> */}
            </div>
            {!isLoading ? (
              <div className="jobs_detail_section">
                {jobs?.map((element, i) => {
                  return <JobCard element={element} key={i} />;
                })}
                {error ?? error?.message}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <LoadingComp scale={.5} />
              </div>
            )}
          </div>
        </section>
      </Motion>
    </>
  );
}
