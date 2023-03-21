import React, { useContext } from 'react'
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { ClientAppContext } from '../Contexts/ClientAppContext'
import { icons } from '../service/icons'

export default function JobDetails() {

    const { jobSelectedId } = useContext(ClientAppContext)

    let data = jobSelectedId

    return (
        <>
            <header>
                <div className="fluid-wrapper main-navigation bg_primary">
                    <MenuNav logoImage={icons.lgLight} linkView="lightlink" />
                    <MenuButtonDark />
                    <div className="offset-canva job-main-title">
                        <h1 className="section--hero__title php_job">
                            {data?.title}
                        </h1>

                        <div className="job_detail__banner">

                            <div className="job_level_block">
                                <div className="level_title">
                                    Seniority Level
                                </div>
                                <div className="level_year">
                                    {data?.level}
                                </div>
                            </div>
                            <div className="job_time_block">
                                <div className="time_title">
                                    Employment type
                                </div>
                                <div className="job_time">
                                    {data?.time}
                                </div>
                            </div>

                            <div className="job_validity_block">
                                <div className="val_title">
                                    Validity
                                </div>
                                <div className="val_year">
                                    {data?.validity}
                                </div>
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
                    <div className="role_overview_section">
                        <h2 className="overview_title">
                            Background informations
                        </h2>
                        <div className="role_description">
                            <p className="p-18">
                                {data?.bgInfo}
                                <br />
                                In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager.
                            </p>
                        </div>
                    </div>
                    <div className="job_tasks_section">
                        <h2 className="task_title">
                            Duties and responsabilities
                        </h2>
                        <p className="p-18">
                            The incumbent is responsible for
                        </p>

                        <div className="tasks_list_section">
                            <ul className="tasks_list">
                                {data?.responsabilities.overview?.map((element, i) => {
                                    return (
                                        <li className="task_" key={i}>
                                            <span className="square"></span>
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>

                            <p className="p-18">
                                Within this framework, the incumbent has the following responsibilities:
                            </p>
                        </div>



                        {data?.responsabilities.details.map((element, i) => {
                            return (
                                <>
                                    <h4 className="h4">
                                        {i + 1}. {element.title}
                                    </h4>

                                    <p className="p-18">The incumbent :</p>

                                    <div className="tasks_list_section">
                                        <ul className="tasks_list">

                                            {element.roles.map((item, index) => {
                                                return (
                                                    <li className="task_" key={index}>
                                                        <span className="square"></span>
                                                        {item}
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className="job_tasks_section">
                        <h2 className="task_title">
                            Profile and Qualifications
                        </h2><div className="tasks_list_section">
                            <ul className="tasks_list">
                                {data?.profile.overview.map((element, i) => {
                                    return (
                                        <li className="task_" key={i}>
                                            <span className="square"></span>
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {data?.profile.details.map((item, i) => {
                            return (
                                <>
                                    <h4 className="h4">
                                        {item.title}
                                    </h4>
                                    <div className="tasks_list_section" key={i}>
                                        <ul className="tasks_list">
                                            {item.contents.map((element, i) => {
                                                return (
                                                    <li className="task_" key={i}>
                                                        <span className="square"></span>
                                                        {element}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className="job_tasks_section">
                        <h2 className="task_title">
                            Duration of the contract and place of employment
                        </h2><div className="tasks_list_section">
                            <ul className="tasks_list">
                                <li className="task_">
                                    <span className="square"></span>
                                    Duration of contract: {data?.contractDuration}
                                </li>
                                <li className="task_">
                                    <span className="square"></span>
                                    Place of employment : <b>{data?.workPlace}</b>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="job_tasks_section">
                        <h2 className="task_title">
                            Submission Guideline:
                        </h2><div className="tasks_list_section">
                            <p className="p-18">
                                We invite you to send your application (with subject line: NoV N°100/2023 by march, 2023 at the latest by e-mail to the following address: <a href="mailto:hello@appealofinnovation.com">hello@appealofinnovation.com</a>, <a href="mailto:appealofinnovation@gmail.com">appealofinnovation@gmail.com</a> . The application file in this mandatory format must include a cover letter and a CV in French or English with 3 references to contact, all in one document (in WORD or PDF file). The application must be named by the applicant's name. Female applicants are strongly encouraged to apply.
                                Only short-listed candidates will be contacted.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
