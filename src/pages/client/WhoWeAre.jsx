import React from 'react'
import { icons, teams } from '../../service/icons'
import BannerLeft from "../../assets/media/images/about-us/banner-left.png"
import BannerRight from "../../assets/media/images/about-us/banner-right.png"
import WorkingBanner from "../../assets/media/images/about-us/working--banner.png"
import AboutStat from "../../assets/media/images/icons/about-stat.svg"
import Testimonials from "../../assets/media/images/testimonials/testimonials.png"

export default function WhoWeAre() {
    return (
        <div>
            <header class="about-us__header">
                <div class="navbar">
                    <div class="logo">
                        <a class="logo logo_fixed logo--white" href="index.php">
                            <img src={icons.lgDark} alt="" />
                        </a>
                    </div>

                    <div class="get--start">
                        <a class="btn default-outline" href="start-with-us.php">
                            start with us
                        </a>
                    </div>
                </div>

                <div class="fluid-wrapper about-us__hero ">

                    <div class="main-title offset-canva">
                        <h1 class="section--hero__title">
                            We are an <br />
                            outstanding agency
                        </h1>
                    </div>

                    <div class="main-description offset-canva">
                        <p class="section--hero__desc">
                            We are working on changing lives of today for a better futur. You can advantages of your strenghs and succeed your project with us on changing lives of today for
                        </p>
                    </div>


                </div>
                <div class="nav--toggler-container ">
                    <div class="nav--toggler" onclick="openNav()">
                        <span class="nav--toggler__bar"></span>
                        <span class="nav--toggler__bar"></span>
                    </div>
                </div>
            </header>

            {/* <!--===========================
            END OF HOME HERO SECTION
        ===========================--> */}

            <div class="hero--bottom-content offset-canva d-flex">

                <div class="hero-bottom-left_img">
                    <img src={BannerLeft} alt="" />
                </div>

                <div class="hero-bottom-right_img">
                    <img src={BannerRight} alt="" />
                </div>

            </div>

            <section class="about--us__intro ">

                <div class="about--intro offset-canva">
                    <div class="section--title__box">
                        <h2 class="section--title">
                            This is us <br />
                            we clear <span class="primary-color">focus</span>with <br /> results

                        </h2>
                    </div>

                    <div class="content">
                        <p class="default-">
                            Since september 2021, we have been working with companies in Africa, America and Europe to make sure their projects are mooving as they desire. By our 3 awards the same year, we build the confidence on our abilities to solve problems
                        </p>
                    </div>

                    <div class="stats">
                        <div class="stat-box">
                            <span class="stats--number__sup">
                                Companies
                            </span>
                            <h3><span class="primary-color">35</span></h3>
                        </div>

                        <div class="stat-box">
                            <span class="stats--number__sup">
                                Solutions
                            </span>
                            <h3>+35</h3>
                        </div>

                        <div class="stat-box">
                            <span class="stats--number__sup">
                                Satisfaction
                            </span>
                            <h3>97%</h3>
                        </div>
                    </div>
                </div>


            </section>

            <div class="about--fluid__banner"></div>

            <section class="our--goals offset-canva">

                <div class="about--intro">
                    <div class="section--title__box">
                        <h2 class="section--title">
                            Our ambition is <br /> to transform lives with technologies
                        </h2>
                    </div>
                </div>

                <div class="our--goals__content">
                    <p>
                        Since september 2021, we have been working with companies in Africa, America and Europe to make sure their projects are
                    </p>
                </div>


                <div class="our--goals__content-text">
                    <p>
                        the same year, we build
                    </p>
                    <p>
                        we have been working
                    </p>
                    <p>
                        Since september 2021
                    </p>
                    <p>
                        Europe to make sure
                    </p>
                    <p>
                        the same year, we build
                    </p>
                    <p>
                        with companies in
                    </p>
                </div>

                <div class="more_services--btn">
                    <a href="#">
                        More about our services
                    </a>
                </div>

                <div class="our-services--bottom-content d-flex">
                    <img src={WorkingBanner} alt="" />
                </div>

                <div class="other-about-section d-flex">
                    <div class="about--intro">
                        <div class="section--title__box">
                            <h2 class="">
                                Our ambition is <br /> to transform lives <br /> with technologies
                            </h2>
                        </div>
                    </div>

                    <div class="other-about-left-sec">
                        <div class="our--goals__content">
                            <p>
                                Since september 2021, we have been working with companies in Africa, America and Europe to make sure their projects are
                            </p>
                        </div>


                        <div class="our--goals__content-text">
                            <p>
                                the same year, we build
                            </p>
                            <p>
                                we have been working
                            </p>
                            <p>
                                Since september 2021
                            </p>
                            <p>
                                Europe to make sure
                            </p>
                            <p>
                                the same year, we build
                            </p>
                            <p>
                                with companies in
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <section class="our--clients bg-dark ">
                <div class="section-wrapper">
                    <div class="title-box">
                        <div class="section--title__box">
                            <h2 class="section--title">
                                The unique <br /> opportuinity to<br /> make small
                            </h2>
                        </div>
                    </div>

                    <div class="illustration-figure">
                        {/*  <div class="large-circle">
                                <div>
                                    <h4>200</h4>
                                    <span>Countries</span>
                                </div>
                            </div>

                            <div class="small--circle">
                                <div>
                                    <h4>06</h4>
                                    <span>Project</span>
                                </div>
                            </div> */}

                        <img src={AboutStat} alt="" />
                    </div>

                    <div class="subtitle--intro">
                        <h5>
                            Before funding, <br />
                            there is fiding
                        </h5>
                    </div>
                    <div class="intro--content">
                        <p class="default-paragraph white-p ">
                            Working with brands all over the world help us continuously improve our services to reach ecah one of you

                        </p>
                    </div>
                    <div class="blank--space__top"></div>
                    <div class="some--numbers">
                        <div class="number">
                            <h3>
                                3000
                            </h3>
                            <span>
                                Prospects in our first year
                            </span>

                            <span class="svg--icon">
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4999 1.8125C14.7403 1.8125 14.9708 1.90798 15.1407 2.07793C15.3107 2.24789 15.4062 2.4784 15.4062 2.71875V24.0936L21.1083 18.3896C21.2785 18.2195 21.5093 18.1239 21.7499 18.1239C21.9906 18.1239 22.2214 18.2195 22.3915 18.3896C22.5617 18.5598 22.6573 18.7906 22.6573 19.0313C22.6573 19.2719 22.5617 19.5027 22.3915 19.6729L15.1415 26.9229C15.0574 27.0073 14.9574 27.0742 14.8473 27.1199C14.7372 27.1656 14.6191 27.1891 14.4999 27.1891C14.3807 27.1891 14.2627 27.1656 14.1526 27.1199C14.0425 27.0742 13.9425 27.0073 13.8583 26.9229L6.6083 19.6729C6.43813 19.5027 6.34253 19.2719 6.34253 19.0313C6.34253 18.7906 6.43813 18.5598 6.6083 18.3896C6.77847 18.2195 7.00927 18.1239 7.24992 18.1239C7.49058 18.1239 7.72138 18.2195 7.89155 18.3896L13.5937 24.0936V2.71875C13.5937 2.4784 13.6892 2.24789 13.8591 2.07793C14.0291 1.90798 14.2596 1.8125 14.4999 1.8125Z" fill="white" />
                                </svg>
                            </span>
                        </div>

                        <div class="number">
                            <h3>
                                6000
                            </h3>
                            <span>
                                Participants to our training
                            </span>

                            <span class="svg--icon">
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4999 1.8125C14.7403 1.8125 14.9708 1.90798 15.1407 2.07793C15.3107 2.24789 15.4062 2.4784 15.4062 2.71875V24.0936L21.1083 18.3896C21.2785 18.2195 21.5093 18.1239 21.7499 18.1239C21.9906 18.1239 22.2214 18.2195 22.3915 18.3896C22.5617 18.5598 22.6573 18.7906 22.6573 19.0313C22.6573 19.2719 22.5617 19.5027 22.3915 19.6729L15.1415 26.9229C15.0574 27.0073 14.9574 27.0742 14.8473 27.1199C14.7372 27.1656 14.6191 27.1891 14.4999 27.1891C14.3807 27.1891 14.2627 27.1656 14.1526 27.1199C14.0425 27.0742 13.9425 27.0073 13.8583 26.9229L6.6083 19.6729C6.43813 19.5027 6.34253 19.2719 6.34253 19.0313C6.34253 18.7906 6.43813 18.5598 6.6083 18.3896C6.77847 18.2195 7.00927 18.1239 7.24992 18.1239C7.49058 18.1239 7.72138 18.2195 7.89155 18.3896L13.5937 24.0936V2.71875C13.5937 2.4784 13.6892 2.24789 13.8591 2.07793C14.0291 1.90798 14.2596 1.8125 14.4999 1.8125Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="some--numbers__last">
                        <div class="number">
                            <h3>
                                20
                            </h3>
                            <span>
                                Countries
                            </span>
                        </div>
                    </div>


                    <div class="testimonial-img">
                        <div class="testimonials-author">
                            <h4>
                                Theo Ananissoh
                            </h4>
                            <span class="post">
                                Writter based in Germany
                            </span>
                        </div>

                        <img src={Testimonials} alt="" />
                    </div>
                    <div class="blank--space__left"></div>
                    <div class="testimonials--text">
                        <p class="default-paragraph white-p">
                            <span>"</span> My project had been led by this amazing team of AP’IN. Since Germany, i can feel their professionalism and the excelence in their work. The project was in time and today i am thinking of new projects we can work on.
                        </p>
                    </div>
                    <div class="blank--space__right"></div>


                </div>
            </section>

            <section class="our--team ">
                <div class="section--wrapper">
                    <div class="team--content">
                        <div class="sup--conetent">
                            The team
                        </div>

                        <div class="team--members__container">
                            <div class="section--title__box">
                                <h2 class="section--title">
                                    We are thinking <br /> about the future
                                </h2>
                            </div>

                            <div class="team-members">
                                <div class="team--member__card">
                                    <img src={teams.feikandine} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Office manager</span>
                                        <p class="name">LARE-LAKTIEYI FeiKandine
                                        </p>
                                    </div>
                                </div>

                                <div class="team--member__card">
                                    <img src={teams.JeanPhillipe} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Head of operations</span>
                                        <p class="name">Jean-Philippe ABBEY</p>
                                    </div>
                                </div>

                                <div class="team--member__card">
                                    <img src={teams.Gladys} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Lead of online marketing </span>
                                        <p class="name">Gladys AKOMEDJI</p>
                                    </div>
                                </div>
                                <div class="team--member__card flex--align__center">
                                    <img src={teams.Arnaud} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Head of Design </span>
                                        <p class="name">Arnaud AYIWOUNOU </p>
                                    </div>
                                </div>

                                <div class="team--member__card flex--align__center">
                                    <img src={teams.Roger} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Lead of logistics</span>
                                        <p class="name">Roger AZANO</p>
                                    </div>
                                </div>
                                <div class="team--member__card flex--align__center">
                                    <img src={teams.Gladys} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Head of innovation </span>
                                        <p class="name">Jean-Philippe ABBEY</p>
                                    </div>
                                </div>

                                <div class="team--member__card flex--align__end">
                                    <img src={teams.Gladys} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Lead of online marketing</span>
                                        <p class="name">Gladys AKOMEDJI</p>
                                    </div>
                                </div>

                                <div class="team--member__card flex--align__end">
                                    <img src={teams.Gladys} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Lead of logistics</span>
                                        <p class="name">Roger AZANO</p>
                                    </div>
                                </div>

                                <div class="team--member__card flex--align__end">
                                    <img src={teams.TeamMember6} alt="" />
                                    <div class="desc">
                                        <span class="member--function"> Technical officer</span>
                                        <p class="name">Thomas bruce</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="get--start__section">
                <div class="section-wrapper">
                    <div class="get--start__intro">
                        <p>
                            The transformation bigin with lives and at the perfect time.
                        </p>
                    </div>
                    <div class="get--start__text">
                        <h1 class="section--hero__title">
                            Building brands.<br />
                            Creating product. <br />
                            Transform business.
                        </h1>

                        <a class="btn outline-red-btn " href="start-with-us.php"> learn more <span>
                            <img class={icons.arLight} alt="" /></span> </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
