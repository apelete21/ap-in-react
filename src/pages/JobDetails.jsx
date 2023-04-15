import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOneJob } from "../api/requests/jobsRequests";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { icons } from "../service/icons";
import HTMLReactParser from "html-react-parser";
import Motion from "../components/Motion/Motion";

export default function JobDetails() {
  const { title } = useParams();
  const [job, setJob] = useState([]);
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJob = async () => {
      const response = await getOneJob(title);
      if (response.ok) {
        setJob(response?.data);
        setDetails(response.data?.details);
      } else {
        setError(response?.message);
      }
      setIsLoading(false);
    };
    if (isLoading) getJob();
  }, [title, isLoading]);

  return (
    <Motion>
      <header>
        <div className="fluid-wrapper main-navigation bg_primary">
          <MenuNav logoImage={icons.lgLight} linkView="lightlink" />
          <MenuButtonDark />
          {!isLoading ? (
            <div className="offset-canva job-main-title">
              <h2 className="section--hero__title php_job">{job?.title}</h2>

              <div className="job_detail__banner">
                <div className="job_level_block">
                  <div className="level_title">Seniority Level</div>
                  <div className="level_year">{job?.level}</div>
                </div>
                <div className="job_time_block">
                  <div className="time_title">Employment type</div>
                  <div className="job_time">{job?.time}</div>
                </div>

                <div className="job_validity_block">
                  <div className="val_title">Validity</div>
                  <div className="val_year">{job?.validity}</div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                paddingTop: "20vh",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                color: "white !important",
              }}
            >
              <h1>Loading</h1>
            </div>
          )}
        </div>
      </header>

      {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}

      {/* <!--===========================
               START OF content SECTION
        ===========================--> */}

      <section className="php-back-intro offset-canva">
        <div className="php_job_description">
          {error ?? error?.message}
          <> {HTMLReactParser(details)} </>
          <Link
            class="btn outline-red-btn"
            to={`/careers/${title}/apply`}
            title="Apply for this job"
          >
            <span>Apply for this job</span>
          </Link>
        </div>
      </section>
    </Motion>
  );
}
