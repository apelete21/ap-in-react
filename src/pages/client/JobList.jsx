import React from 'react'
import { icons } from '../../service/icons'
import JobBanner from "../../assets/media/images/banners/jobbanner.png"
import { MenuButtonLight } from '../../components/client/MenuButton'
import MenuNav from '../../components/client/MenuNav'

export default function JobList() {
    return (
        <div>
            <header>
                <div class="fluid-wrapper main-navigation bg_white">
                    <MenuNav logoImage={icons.lgDark} linkView="lightLink" />
                    <div class="offset-canva job-main-title">
                        <h1 class="section--hero__title">
                            Want to be <br />
                            a part of the journey?
                        </h1>
                        <p class="legend-text">
                            Lorem, ipsum dolor ipsum dolor <br />
                            adipisicing adipisicing elit.
                        </p>
                    </div>
                </div>
                <MenuButtonLight />
            </header>


            {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}

            <section class="job--intro  offset-canva">
                <div class="job--banner-section">
                    <img class="job-fluid-banner" src={JobBanner} alt="Home banner" />
                </div>

                <div class="jobs_list__container">
                    <div class="list-text_section">
                        <h4 class="list_jobs_title">
                            LIST OF JOBS
                        </h4>
                        <ul class="legend_links">
                            <li class="legend_link__active">All</li>
                            <li class="legend_link">Web development</li>
                            <li class="legend_link">Digital marketing</li>
                            <li class="legend_link">Graphic Design</li>
                        </ul>
                    </div>
                    <div class="jobs_detail_section">
                        <div class="job__detail">
                            <h1 class="job_detail__title">
                                User Experience <br /> Designer
                            </h1>
                            <div class="job_detail__description">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            </div>
                            <div class="job_time__location">
                                <div class="job_frequence">
                                    <div class="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div class="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div class="job_location">
                                    <div class="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div class="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div class="more_details_link">
                                    <div class="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job__detail">
                            <h1 class="job_detail__title">
                                Graphic Designer
                            </h1>
                            <div class="job_detail__description">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            </div>
                            <div class="job_time__location">
                                <div class="job_frequence">
                                    <div class="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div class="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div class="job_location">
                                    <div class="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div class="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div class="more_details_link">
                                    <div class="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job__detail">
                            <h1 class="job_detail__title">
                                Digital Analyst
                            </h1>
                            <div class="job_detail__description">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            </div>
                            <div class="job_time__location">
                                <div class="job_frequence">
                                    <div class="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div class="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div class="job_location">
                                    <div class="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div class="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div class="more_details_link">
                                    <div class="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job__detail">
                            <h1 class="job_detail__title">
                                Back-end <br /> Developper PHP
                            </h1>
                            <div class="job_detail__description">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            </div>
                            <div class="job_time__location">
                                <div class="job_frequence">
                                    <div class="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div class="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div class="job_location">
                                    <div class="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div class="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div class="more_details_link">
                                    <div class="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job__detail">
                            <h1 class="job_detail__title">
                                User Interfce <br /> Designer
                            </h1>
                            <div class="job_detail__description">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                            </div>
                            <div class="job_time__location">
                                <div class="job_frequence">
                                    <div class="frequence_icon">
                                        <img src={icons.bnTime} alt="" />
                                    </div>
                                    <div class="frequence">
                                        Full Time
                                    </div>
                                </div>
                                <div class="job_location">
                                    <div class="location_icon">
                                        <img src={icons.glocation} alt="" />
                                    </div>
                                    <div class="location">
                                        Lomé, TOGO
                                    </div>
                                </div>
                                <div class="more_details_link">
                                    <div class="more_details_view">
                                        View
                                        <img src={icons.arOblik} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
