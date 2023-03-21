import React from 'react'
import { icons } from '../service/icons'
import ServiceHero from "../assets/media/images/hero/service-hero.png"
import GraphicDesigh from "../assets/media/images/services/graphic-design.png"
import ToolsImg from "../assets/media/images/services/tools.png"
import TabletImg from "../assets/media/images/services/tablet.png"
import ProductGif from "../assets/media/images/services/products.gif"
import MenuNav from '../components/MenuNav'
import { MenuButtonDark } from '../components/MenuButton'

export default function WhatWeDo() {
    return (
        <>
            <header>
                <MenuNav logoImage={icons.lgDark} linkView={"darklink"} />
                <div class="fluid-wrapper services-hero">

                    <div class="main-title offset-canva">
                        <h1 class="section--hero__title">
                            And there is <br />
                            what we can bring to<br />
                            your business
                        </h1>
                    </div>

                    <div class="content">
                        <p class="default-paragraph">
                            There are lot of solutions that you can adopt in your company or every day life to improve your ways of living. We help you to prioritize your needs and find the best way to resolve your challenge
                        </p>
                    </div>
                </div>
                <MenuButtonDark />
            </header>

            {/* <!--================================
             END OF  SERVICES HERO SECTION
          ==================================--> */}


            {/* <!--================================
            START OF UPSCALE SECTION SECTION
          ==================================--> */}


            <section class="upscale">
                <img src={ServiceHero} alt="" />
            </section>


            {/* <!--================================
             END OF UPSCALE SECTION SECTION
          ==================================--> */}


            <section class="sevices-list bg-dark">

                <div class="service--section__wrapper offset-canva">

                    <div class="service--wrapper">
                        <div class="service--section__title">
                            <div class="section--title__box">
                                <h2 class="section--title">
                                    Buildind your digital growth through disruptive tools
                                </h2>
                            </div>
                        </div>

                        <div class="services--details ">
                            <div class="description--title max-with_800">
                                <h3>
                                    Enable the success of micro, small and medium size african businesses by increasing their productivity and improving employee performance.
                                </h3>
                            </div>
                            <div class="service-listing">


                                <div class="services-list">
                                    <div class="service-list--title">
                                        <h4>
                                            Enable the success of micro
                                        </h4>
                                    </div>
                                    <ul>
                                        <li>Business process mapping</li>
                                        <li>Data annalysis tools</li>
                                    </ul>
                                </div>

                                <div class="services-list">
                                    <div class="service-list--title">
                                        <h4>
                                            Enable the success of micro
                                        </h4>
                                    </div>
                                    <ul>
                                        <li>Business process mapping</li>
                                        <li>Data annalysis tools</li>
                                    </ul>
                                </div>

                                <div class="services-list">
                                    <div class="service-list--title">
                                        <h4>
                                            Enable the success of micro
                                        </h4>
                                    </div>
                                    <ul>
                                        <li>Business process mapping</li>
                                        <li>Data annalysis tools</li>
                                        <li>Value stream mapping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="services-img">
                            <img src={GraphicDesigh} alt="" />
                        </div>

                        <div class="service-listing__bottom d-flex">
                            <div class="description--title">
                                <h3>
                                    Train yourself to acquire the relevent skills to take your business to the next level
                                </h3>
                            </div>

                            <div class="services-list">
                                <p class="default-paragraph white-p">
                                    We provide training services for personal growth and also for professional goals no matter your level. You can develop your digital skills to improve your own life today.
                                </p>
                            </div>
                        </div>
                        <div class="services-img">
                            <img src={ToolsImg} alt="" />
                        </div>
                    </div>

                    <div class="service--wrapper">
                        <div class="service--section__title">
                            <div class="section--title__box">
                                <h2 class="section--title">
                                    Web apps and software <br /> developpement
                                </h2>
                            </div>
                        </div>

                        <div class="services--details ">
                            <div class="service-listing d-flex">
                                <div class="description--title">
                                    <h3>
                                        To conceive the platform of your dreams, you need experts to lead you to your best.
                                    </h3>
                                </div>

                                <div class="services-list">
                                    <ul>
                                        <li>Wireframe</li>
                                        <li>Frontend development</li>
                                        <li>Backend develepment</li>
                                        <li>Data base implementation</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="services-list">
                                <ul>
                                    <li>Web site</li>
                                    <li>Web apps</li>
                                    <li>Software developpement</li>
                                </ul>
                            </div>
                            <div class="serices-img">
                                <img src={TabletImg} alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="service--wrapper">
                        <div class="service--section__title">
                            <div class="section--title__box">
                                <h2 class="section--title">
                                    Branding and packaging
                                </h2>
                            </div>
                        </div>

                        <div class="services--details ">
                            <div class="service-listing d-flex">
                                <div class="description--title">
                                    <h3>
                                        Optimize the brand you have been dreaming of
                                    </h3>
                                </div>

                                <div class="services-list">
                                    <ul>
                                        <li>Creation of brang</li>
                                        <li>Digital marketing </li>
                                        <li>Personal branding</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="services-img mb-lg">
                                <img src={ProductGif} alt="" />
                            </div>
                            <div class="service-listing d-flex">
                                <div class="description--title">
                                    <h3>
                                        We provide the best of our service for the growth of your project.
                                    </h3>
                                </div>

                                <p class="default-paragraph white-p">
                                    With regular feebacks, we adapt to the vision each service we provide to our cusomer not matter were you are located in the world.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="service--banner">
                <div class="service--banner-intro">
                    <p> Our experts are available for you today</p>
                </div>

                <div class="service--banner__footer">
                    <div class="title">
                        <h3>
                            Ready to take you project to the next level
                        </h3>
                    </div>

                    <div class="content">
                        <p>We put our strength together to provide best and excellent services worldwide. We are convinced that our clients need to be satisfied in all the aspect of our contract.</p>
                    </div>
                </div>
            </section>

            <section class="get--start__section">
                <div class="section-wrapper">
                    <div class="get--start__intro">
                        <p>
                            Let’s start something interesting
                            together
                        </p>
                    </div>
                    <div class="get--start__text">
                        <h1 class="section--hero__title">
                            Ready to bring <br />
                            your company to<br />
                            the <span class="primary-color">next level? </span>
                        </h1>

                        <a class="btn default-outline " href="start-with-us.php"> Get start <span><img class="icon-img" src={icons.arLight} alt="" /></span> </a>
                    </div>
                </div>
            </section>
        </>
    )
}
