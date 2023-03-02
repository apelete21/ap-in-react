import React from 'react'
import { icons } from '../service/icons'
import JobBanner from "../assets/media/images/banners/jobbanner.png"
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { Link } from 'react-router-dom'

export default function Carreers() {
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
                        <div className="job__detail">
                            <h1 className="job_detail__title">
                                Office manager
                            </h1>
                            <div className="job_detail__description">
                                <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager...</p>
                            </div>
                            <div className="job_time__location">
                                <div className="job_frequence">
                                    <div className="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div className="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div className="job_location">
                                    <div className="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div className="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <Link to={"/jobs/details"} className="more_details_link">
                                    <div className="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="job__detail">
                            <h1 className="job_detail__title">
                                Graphic Designer
                            </h1>
                            <div className="job_detail__description">
                                <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager...</p>
                            </div>
                            <div className="job_time__location">
                                <div className="job_frequence">
                                    <div className="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div className="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div className="job_location">
                                    <div className="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div className="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div className="more_details_link">
                                    <div className="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job__detail">
                            <h1 className="job_detail__title">
                                Digital Analyst
                            </h1>
                            <div className="job_detail__description">
                                <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager...</p>
                            </div>
                            <div className="job_time__location">
                                <div className="job_frequence">
                                    <div className="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div className="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div className="job_location">
                                    <div className="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div className="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div className="more_details_link">
                                    <div className="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job__detail">
                            <h1 className="job_detail__title">
                                Back-end <br /> Developper PHP
                            </h1>
                            <div className="job_detail__description">
                                <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager...</p>
                            </div>
                            <div className="job_time__location">
                                <div className="job_frequence">
                                    <div className="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div className="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div className="job_location">
                                    <div className="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div className="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div className="more_details_link">
                                    <div className="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job__detail">
                            <h1 className="job_detail__title">
                                User Interfce <br /> Designer
                            </h1>
                            <div className="job_detail__description">
                                <p>In order to better manage the company, the partners are looking for a new profile. The profile sought is that of an office manager...</p>
                            </div>
                            <div className="job_time__location">
                                <div className="job_frequence">
                                    <div className="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div className="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div className="job_location">
                                    <div className="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div className="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div className="more_details_link">
                                    <div className="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </section>
        </div>
    )
}
