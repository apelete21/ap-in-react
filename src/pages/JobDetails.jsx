import React from 'react'
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'

export default function JobDetails() {
    return (
        <div>
            <header>
                <div class="fluid-wrapper main-navigation bg_primary">
                    <MenuNav logoImage={icons.lgDark} linkView="lightlink" />
                    <MenuButtonDark />
                    <div class="offset-canva job-main-title">
                        <h1 class="section--hero__title php_job">
                            Back-end <br />
                            developper PHP
                        </h1>

                        <div class="job_detail__banner">

                            <div class="job_level_block">
                                <div class="level_title">
                                    Seniority Level
                                </div>
                                <div class="level_year">
                                    Entry Level
                                </div>
                            </div>
                            <div class="job_time_block">
                                <div class="time_title">
                                    Employment type
                                </div>
                                <div class="job_time">
                                    Full-time
                                </div>
                            </div>

                            <div class="job_validity_block">
                                <div class="val_title">
                                    Validity
                                </div>
                                <div class="val_year">
                                    Jan 22 2022
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

            <section class="php-back-intro offset-canva">
                <div class="php_job_description">
                    <div class="role_overview_section">
                        <h2 class="overview_title">
                            Role Overview
                        </h2>
                        <div class="role_description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis a quisquam, nihil debitis, repellendus explicabo molestias voluptatem aliquam veniam quod dolore quae praesentium veritatis soluta. Hic nihil, numquam saepe vel eaque nulla sit doloribus, esse libero suscipit neque aliquam. Aliquam ea impedit, in rem id error laboriosam pariatur maiores, est provident ullam quos architecto voluptates dolorum blanditiis ut ad optio inventore eaque aliquid nam voluptatem atque. Nihil blanditiis, repudiandae obcaecati vero saepe illum neque similique, optio rerum odit facere!
                        </div>
                    </div>
                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Duties and responsabilities
                        </h2>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="job_tasks_section">
                        <h2 class="task_title">
                            Profile and requirements
                        </h2>
                        <div class="tasks_list_section">
                            <ul class="tasks_list">
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                                <li class="task_">
                                    <span class="square"></span>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="conclusion_paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tempora voluptate, culpa accusamus ducimus dolorum nesciunt incidunt, eaque laborum aliquid sunt! Vel consequatur quia iusto aliquid eius laudantium itaque eos fuga dignissimos corrupti repudiandae ipsa aut, consectetur odit quis placeat, illum nihil fugiat quod natus, blanditiis eum veritatis! Facere, officiis.
                    </div>
                    <div class="application_btn">
                        <a class="btn default-btn btn-with-arrow" href="">
                            Apply now
                            <span>
                                <img src={icons.arLight} alt="" />
                            </span>
                        </a>
                    </div>

                </div>

            </section>
        </div>
    )
}
