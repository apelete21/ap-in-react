import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOneJob } from "../api/requests/jobsRequests";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { icons } from "../service/icons";
import HTMLReactParser from "html-react-parser";

export default function JobDetails() {
  const { title } = useParams();
  const [job, setJob] = useState([]);
  const [details, setDetails] = useState("")
  const [error, setError] = useState("");

  useEffect(() => {
    const getJob = async () => {
      const response = await getOneJob(title);
      if (response.ok) {
        setJob(response?.data);
        setDetails(response.data?.details)
      } else {
        setError(response?.message);
      }
    };
    getJob();
  }, [title]);

  return (
    <>
      <header>
        <div className="fluid-wrapper main-navigation bg_primary">
          <MenuNav logoImage={icons.lgLight} linkView="lightlink" />
          <MenuButtonDark />
          <div className="offset-canva job-main-title">
            <h1 className="section--hero__title php_job">{job?.title}</h1>

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
          <div className="job_tasks_section">
            <h2 className="task_title">Submission Guideline:</h2>
            <div className="tasks_list_section">
              <p className="p-18">
                We invite you to send your application (with subject line: NoV
                N°100/2023 by march, 2023 at the latest by e-mail to the
                following address:
                <a href="mailto:hello@appealofinnovation.com">
                  hello@appealofinnovation.com
                </a>
                ,{" "}
                <a href="mailto:appealofinnovation@gmail.com">
                  appealofinnovation@gmail.com
                </a>{" "}
                . The application file in this mandatory format must include a
                cover letter and a CV in French or English with 3 references to
                contact, all in one document (in WORD or PDF file). The
                application must be named by the applicant's name. Female
                applicants are strongly encouraged to apply. Only short-listed
                candidates will be contacted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
