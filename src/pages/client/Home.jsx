import React from 'react'
import { icons } from '../../service/icons'
import HomeBanner from "../../assets/media/images/hero/home-banner.png"
import HomeIntro from "../../assets/media/images/home-intro.png"
import FactIllustration from "../../assets/media/images/home/facts-illustration.png"
import MenuNav from '../../components/client/MenuNav'
import { MenuButtonDark } from '../../components/client/MenuButton'

export default function Home() {
    return (
        <>
            {/* <!--===========================
              START OF  HOME HERO SECTION
       ===========================--> */}
            <header>
                <div className="fluid-wrapper main-navigation">
                    <MenuNav logoImage={icons.lgDark} linkView="darklink" />
                    <MenuButtonDark />
                    <div className="main-title offset-canva">
                        <h1 className="section--hero__title">
                            All you need <br />
                            to succeed your<span className="upper-text"> digital </span> <br />
                            transformation
                        </h1>
                    </div>
                </div>
            </header>


            {/* <!--===========================
            END OF HOME HERO SECTION
        ===========================--> */}


            {/* <!--===========================
            START OF HERO SECTION
        ===========================--> */}

            <section className="home--banner-section">
                <img className="fluid-banner" src={HomeBanner} alt="Home banner" />
            </section>

            {/* <!--===========================
            END OF HERO SECTION
        ===========================--> */}

            <section className="home--intro  offset-canva">
                <div className="section--title__box">
                    <h2 className="section--title">
                        Our ambitions is to <br />
                        transform lives with <br /> technologies
                    </h2>
                </div>
                <div className="offset--canva__lg home--intro__desc d-flex">
                    <p className="default-paragraph">
                        As you may know or not, human life is constantly changing. To better adapt and live with the times, we must also change our way of doing things. What better way to transform our lives today than through the use of technology.
                    </p>
                    <p className="default-paragraph">
                        Technologies are means for humanity to achieve evolution goals and to improve lives on earth. Over all, it is a tool to attends SDGs and sustain the developpement of africa countries.
                    </p>
                </div>

                <div className="home--intro__fact">
                    <div className="home--intro__fact--box d-flex">
                        <div className="text--box">
                            <p className="default-paragraph white-p">
                                AP’IN is especially for those who are looking for transformation in their lives in their ways and time.
                            </p>
                            <div className="btn-group">
                                <p>Let’s know your futur projects</p>
                                <a href="" className="btn default-outline light-outline">Get in touch</a>
                            </div>
                        </div>

                        <div className="text--box__bottom">
                            <img src={HomeIntro} alt="" />
                        </div>
                    </div>

                    <div className="home--intro__fact--img">

                    </div>
                </div>
            </section>

            {/* <!--  ===========================
                    START OF HOME INTRO SECTION
        =========================== --> */}

            <section className="services-section offset-canva">

                <div className="services--section__intro">
                    <div className="section--title__box">
                        <h2 className="section--title">
                            We help by providing <br />innovative services
                        </h2>
                    </div>

                    <div className="services-intro d-flex offset--canva__lg">
                        <h3> Our services</h3>
                        <div className="servives--intro__content">
                            <p className="default-paragraph">
                                We work on Improving  business processes,  developing web platform
                                and conceiving on-demand digital services.
                            </p>
                            <a href="http://">
                                <span className="play--icon"><img src={icons.playDark} alt=""
                                     /></span>
                                More about us
                            </a>
                        </div>
                    </div>
                </div>

                <div className="services--section-list">
                    <div className="service-item item-one">
                        <h2>
                            Process <br />
                            Improvement
                        </h2>
                        <p>
                            We provide digital tools  and strategies for the growth of you revenue and the efficacity of your team. We also help you with inovative problem solving tool...
                        </p>

                        <a className="underline--btn " href="what-we-do.php"> Learn more <span className="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>

                    </div>

                    <div className="service-item item-two">
                        <h2>
                            Hosting <br />
                            Solutions
                        </h2>
                        <p>
                            We help you host your solutions online and find the suitable plateform as you go
                        </p>
                        <a className="underline--btn " href="what-we-do.php"> Learn more <span className="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>
                    </div>

                    <div className="service-item item-three">
                        <h2>
                            SEO<br />
                            Result driven
                        </h2>
                        <p>
                            We help companies grow significantly using digital marketing to generate ...
                        </p>
                        <a className="underline--btn " href="what-we-do.php"> Learn more <span className="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>
                    </div>

                    <div className="service-item item-four">
                        <h2>
                            E-Commerce
                        </h2>
                        <p>
                            We provide facilitation tool that inform, support and demonstrate how your products can meet all organization's needs through content
                        </p>
                        <a className="btn default-outline " href="start-with-us.php"> learn more
                            <span className="svg--icon">
                                <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                        stroke="#000" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="service-item item-five">
                        <h2>
                            Graphic <br />
                            design
                        </h2>
                        <p>
                            We do creation of visual compositions to solve problems and communicate ideas through typography, imagery, color and form.
                        </p>
                    </div>

                    <div className="service-item item-six">
                        <h2>
                            Branding <br />
                            & packaging
                        </h2>
                        <p>
                            We help you build a concise brand personality, attract new customers and keep loyal customers
                        </p>
                    </div>
                </div>

            </section>

            <section className="our--methods dark-section">
                <div className="section-wrap top--intro offset-canva ">
                    <div className="content">
                        <p>
                            This is how we do it. Our work is to accompany you in all the steps of you transformation.
                        </p>
                    </div>
                    <div className="title">
                        <div className="section--title__box">
                            <h2 className="section--title">
                                Creative <br />Strategy and <br />Clear Focus
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="facts offset-canva">
                    <div className="fact--illustartion">
                        <div className="fact--illustartion__box">
                            <div className="top--content">
                                Our great desire is to offer you the best of digital services to improve yours today and futur project.
                            </div>
                            <div className="bottom--content">
                                <p>
                                    Creative Strategy and Clear Focus
                                </p>

                                <a className="btn default-outline light-outline" href="start-with-us.php"> Ge start <span><img
                                    className="icon-img" src={icons.arLight} alt=""
                                /></span> </a>
                            </div>
                        </div>
                        <div className="fact-img">
                            <img src={FactIllustration} alt="" />
                        </div>
                    </div>

                    <div className="fact--content">
                        <div className="fact--element">
                            <span>
                                Solutions
                            </span>
                            <h3>
                                20
                            </h3>
                            <p>
                                Innovatice solutions for the improvement of business especially those who are offering services and products.
                            </p>
                        </div>

                        <div className="fact--element bottom">
                            <span>
                                PARTNERS
                            </span>
                            <h3>
                                35
                            </h3>
                            <p>
                                All over Africa, America and Europe, we have technical and strategique partners to develop our strenghs. We learn from the biggest.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="facts--bottom">
                    <p>We make sure to deliver the best services to our customers all over th worl because they deserve to be satisfied. The digital transformation first start with human transformation. With our agile methodologies, we make sure to have your feedbacks as we are mooving forward together.</p>
                </div>
            </section>
            {/* <!--  ===========================
                    END OF HOME INTRO SECTION
        =========================== --> */}

            <section className="service--banner">
                <div className="service--banner-intro">
                    <p> Our creative team is ready today</p>
                </div>

                <div className="service--banner__footer">
                    <div className="title">
                        <h3>
                            Envolving team by you side
                        </h3>
                    </div>

                    <div className="content">
                        <p>We have young professionals experts in the digital domain to take care of your project. They are envolved with heart to produice great results to improve your solutions.</p>
                    </div>
                </div>
            </section>

            <section className="home--page__features">

                <div className="section--wrapper offset-canva">
                    <div className="statement">
                        <h6>
                            Our mindset in the same as  we are transforming the services we provide to you
                        </h6>
                        <span className="quote">
                            "
                        </span>

                        <p className="default-paragraph">
                            As we are moving forward, we learnt more inovatives tools that could be adequat for you and your company in your digital transformation: business processes, community developpement and digital services.
                        </p>



                        <h6>
                            We are you digitalization partner today and in the future.
                        </h6>
                    </div>
                    <div className="features--box">
                        <h3>
                            Our main mission is to serve you and lead you to the change
                        </h3>

                        <div className="features--list">
                            <div className="feature--item">
                                <div className="text--icon">
                                    1
                                </div>

                                <p className="default-paragraph">
                                    Conceive and create internet based platforms for internal use in companies
                                </p>
                            </div>

                            <div className="feature--item">
                                <div className="text--icon">
                                    2
                                </div>

                                <p className="default-paragraph">
                                    Improve businesses internal and external improvements
                                </p>
                            </div>

                            <div className="feature--item">
                                <div className="text--icon">
                                    3
                                </div>

                                <p className="default-paragraph">
                                    Help businesses reach word wide market with decisions making based on data
                                </p>
                            </div>

                            <div className="feature--item">
                                <div className="text--icon">
                                    4
                                </div>

                                <p className="default-paragraph">
                                    Improve your users experiences and provide quality support for your project
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="get--start__section">
                <div className="section-wrapper">
                    <div className="get--start__intro">
                        <p>
                            The transformation bigin with lives and at the perfect time.
                        </p>
                    </div>
                    <div className="get--start__text">
                        <h1 className="section--hero__title">
                            Building brands.<br />
                            Creating product. <br />
                            Transform business.
                        </h1>

                        <a className="btn outline-red-btn " href="start-with-us.php"> learn more <span>
                            <img className="icon-img"
                                src={icons.arLight} alt="" /></span> </a>
                    </div>
                </div>
            </section>
        </>
    )
}
