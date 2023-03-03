import React, { useContext } from 'react'
import { icons } from '../service/icons'
import JobBanner from "../assets/media/images/banners/jobbanner.png"
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { Link } from 'react-router-dom'
import jobdata from "../service/jobdata"
import { ClientAppContext } from '../Contexts/ClientAppContext'

export default function Carreers() {

    const { SelectingJob } = useContext(ClientAppContext)

    return (
        <div>
            <header>
                <div className="fluid-wrapper main-navigation bg_white">
                    <MenuNav logoImage={icons.lgDark} linkView="darklink" />
                    <div className="offset-canva job-main-title">
                        <h1 className="section--hero__title">
                            Want to be <br />
                            a part of the journey?
                        </h1>
                        <p className="legend-text">
                            Do what you love or discover new challenges in a place where you can take ownership, chase ideas and build the future of digitaliation with us.
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
                    <img className="job-fluid-banner" src={JobBanner} alt="Home banner" />
                </div>

                <div className="jobs_list__container">
                    <div className="list-text_section">
                        <h4 className="list_jobs_title">
                            LIST OF JOBS
                        </h4>
                        <ul className="legend_links">
                            <li className="legend_link__active">All</li>
                            <li className="legend_link">Web development</li>
                            <li className="legend_link">Digital marketing</li>
                            <li className="legend_link">Graphic Design</li>
                        </ul>
                    </div>
                    <div className="jobs_detail_section">
                        {jobdata?.map((element, i) => {
                            return (
                                <div className="job__detail" key={i}>
                                    <h1 className="job_detail__title">
                                        {element.title}
                                    </h1>
                                    <div className="job_detail__description">
                                        <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an {element.title}...</p>
                                    </div>
                                    <div className="job_time__location">
                                        <div className="job_frequence">
                                            <div className="frequence_icon">
                                                <img src={icons.bnTime} alt="" />
                                            </div>
                                            <div className="frequence">
                                                {element.time}
                                            </div>
                                        </div>
                                        <div className="job_location">
                                            <div className="location_icon">
                                                <img src={icons.glocation} alt="" />
                                            </div>
                                            <div className="location">
                                                {element.workPlace}
                                            </div>
                                        </div>
                                        <Link to={"/jobs/details"} className="more_details_link" onClick={() => SelectingJob(element)}>
                                            <div className="more_details_view">
                                                View
                                                <img src={icons.arOblik} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}
