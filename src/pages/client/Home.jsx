import React from 'react'

export default function Home() {
    return (
        <>
            {/* <!--===========================
              START OF  HOME HERO SECTION
       ===========================--> */}
            <header>
                <div class="fluid-wrapper main-navigation">
                    <div class="navbar">
                        <div class="logo">
                            <a class="logo logo_fixed logo--white" href="index.php">
                                <img src="assets/media/images/logo/logo-dark.png" alt="" srcSet="" />
                            </a>
                        </div>

                        <div class="get--start">
                            <a class="btn default-outline" href="start-with-us.php">
                                start with us
                            </a>
                        </div>
                    </div>
                    <div class="main-title offset-canva">
                        <h1 class="section--hero__title">
                            All you need <br />
                            to succeed your<span class="upper-text"> digital </span> <br />
                            transformation
                        </h1>
                    </div>
                </div>
                <div class="nav--toggler-container">
                    <div class="nav--toggler" onclick="openNav()">
                        <span class="nav--toggler__bar"></span>
                        <span class="nav--toggler__bar"></span>
                    </div>
                </div>
            </header>


            {/* <!--===========================
            END OF HOME HERO SECTION
        ===========================--> */}


            {/* <!--===========================
            START OF HERO SECTION
        ===========================--> */}

            <section class="home--banner-section">
                <img class="fluid-banner" src="assets/media/images/hero/home-banner.png" alt="Home banner" srcset="" />
            </section>

            {/* <!--===========================
            END OF HERO SECTION
        ===========================--> */}

            <section class="home--intro  offset-canva">
                <div class="section--title__box">
                    <h2 class="section--title">
                        Our ambitions is to <br />
                        transform lives with <br /> technologies
                    </h2>
                </div>
                <div class="offset--canva__lg home--intro__desc d-flex">
                    <p class="default-paragraph">
                        As you may know or not, human life is constantly changing. To better adapt and live with the times, we must also change our way of doing things. What better way to transform our lives today than through the use of technology.
                    </p>
                    <p class="default-paragraph">
                        Technologies are means for humanity to achieve evolution goals and to improve lives on earth. Over all, it is a tool to attends SDGs and sustain the developpement of africa countries.
                    </p>
                </div>

                <div class="home--intro__fact">
                    <div class="home--intro__fact--box d-flex">
                        <div class="text--box">
                            <p class="default-paragraph white-p">
                                AP’IN is especially for those who are looking for transformation in their lives in their ways and time.
                            </p>
                            <div class="btn-group">
                                <p>Let’s know your futur projects</p>
                                <a href="" class="btn default-outline light-outline">Get in touch</a>
                            </div>
                        </div>

                        <div class="text--box__bottom">
                            <img src="assets/media/images/home-intro.png" alt="" srcset="" />
                        </div>
                    </div>

                    <div class="home--intro__fact--img">

                    </div>
                </div>
            </section>

            {/* <!--  ===========================
                    START OF HOME INTRO SECTION
        =========================== --> */}

            <section class="services-section offset-canva">

                <div class="services--section__intro">
                    <div class="section--title__box">
                        <h2 class="section--title">
                            We help by providing <br />innovative services
                        </h2>
                    </div>

                    <div class="services-intro d-flex offset--canva__lg">
                        <h3> Our services</h3>
                        <div class="servives--intro__content">
                            <p class="default-paragraph">
                                We work on Improving  business processes,  developing web platform
                                and conceiving on-demand digital services.
                            </p>
                            <a href="http://">
                                <span class="play--icon"><img src="assets/media/images/icons/play.svg" alt=""
                                    srcset="" /></span>
                                More about us
                            </a>
                        </div>
                    </div>
                </div>

                <div class="services--section-list">
                    <div class="service-item item-one">
                        <h2>
                            Process <br />
                            Improvement
                        </h2>
                        <p>
                            We provide digital tools  and strategies for the growth of you revenue and the efficacity of your team. We also help you with inovative problem solving tool...
                        </p>

                        <a class="underline--btn " href="what-we-do.php"> Learn more <span class="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>

                    </div>

                    <div class="service-item item-two">
                        <h2>
                            Hosting <br />
                            Solutions
                        </h2>
                        <p>
                            We help you host your solutions online and find the suitable plateform as you go
                        </p>
                        <a class="underline--btn " href="what-we-do.php"> Learn more <span class="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>
                    </div>

                    <div class="service-item item-three">
                        <h2>
                            SEO<br />
                            Result driven
                        </h2>
                        <p>
                            We help companies grow significantly using digital marketing to generate ...
                        </p>
                        <a class="underline--btn " href="what-we-do.php"> Learn more <span class="svg--icon">
                            <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                    stroke="#000000" />
                            </svg>
                        </span>
                        </a>
                    </div>

                    <div class="service-item item-four">
                        <h2>
                            E-Commerce
                        </h2>
                        <p>
                            We provide facilitation tool that inform, support and demonstrate how your products can meet all organization's needs through content
                        </p>
                        <a class="btn default-outline " href="start-with-us.php"> learn more
                            <span class="svg--icon">
                                <svg width="29" height="15" viewBox="0 0 29 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8854 1L27.4312 7.5M27.4312 7.5L21.8854 14M27.4312 7.5H0.981689"
                                        stroke="#000" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div class="service-item item-five">
                        <h2>
                            Graphic <br />
                            design
                        </h2>
                        <p>
                            We do creation of visual compositions to solve problems and communicate ideas through typography, imagery, color and form.
                        </p>
                    </div>

                    <div class="service-item item-six">
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

            <section class="our--methods dark-section">
                <div class="section-wrap top--intro offset-canva ">
                    <div class="content">
                        <p>
                            This is how we do it. Our work is to accompany you in all the steps of you transformation.
                        </p>
                    </div>
                    <div class="title">
                        <div class="section--title__box">
                            <h2 class="section--title">
                                Creative <br />Strategy and <br />Clear Focus
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="facts offset-canva">
                    <div class="fact--illustartion">
                        <div class="fact--illustartion__box">
                            <div class="top--content">
                                Our great desire is to offer you the best of digital services to improve yours today and futur project.
                            </div>
                            <div class="bottom--content">
                                <p>
                                    Creative Strategy and Clear Focus
                                </p>

                                <a class="btn default-outline light-outline" href="start-with-us.php"> Ge start <span><img
                                    class="icon-img" src="assets/media/images/icons/white-right-arrow.svg" alt=""
                                /></span> </a>
                            </div>
                        </div>
                        <div class="fact-img">
                            <img src="assets/media/images/home/facts-illustration.png" alt="" />
                        </div>
                    </div>

                    <div class="fact--content">
                        <div class="fact--element">
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

                        <div class="fact--element bottom">
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

                <div class="facts--bottom">
                    <p>We make sure to deliver the best services to our customers all over th worl because they deserve to be satisfied. The digital transformation first start with human transformation. With our agile methodologies, we make sure to have your feedbacks as we are mooving forward together.</p>
                </div>
            </section>
            {/* <!--  ===========================
                    END OF HOME INTRO SECTION
        =========================== --> */}

            <section class="service--banner">
                <div class="service--banner-intro">
                    <p> Our creative team is ready today</p>
                </div>

                <div class="service--banner__footer">
                    <div class="title">
                        <h3>
                            Envolving team by you side
                        </h3>
                    </div>

                    <div class="content">
                        <p>We have young professionals experts in the digital domain to take care of your project. They are envolved with heart to produice great results to improve your solutions.</p>
                    </div>
                </div>
            </section>

            <section class="home--page__features">

                <div class="section--wrapper offset-canva">
                    <div class="statement">
                        <h6>
                            Our mindset in the same as  we are transforming the services we provide to you
                        </h6>
                        <span class="quote">
                            "
                        </span>

                        <p class="default-paragraph">
                            As we are moving forward, we learnt more inovatives tools that could be adequat for you and your company in your digital transformation: business processes, community developpement and digital services.
                        </p>



                        <h6>
                            We are you digitalization partner today and in the future.
                        </h6>
                    </div>
                    <div class="features--box">
                        <h3>
                            Our main mission is to serve you and lead you to the change
                        </h3>

                        <div class="features--list">
                            <div class="feature--item">
                                <div class="text--icon">
                                    1
                                </div>

                                <p class="default-paragraph">
                                    Conceive and create internet based platforms for internal use in companies
                                </p>
                            </div>

                            <div class="feature--item">
                                <div class="text--icon">
                                    2
                                </div>

                                <p class="default-paragraph">
                                    Improve businesses internal and external improvements
                                </p>
                            </div>

                            <div class="feature--item">
                                <div class="text--icon">
                                    3
                                </div>

                                <p class="default-paragraph">
                                    Help businesses reach word wide market with decisions making based on data
                                </p>
                            </div>

                            <div class="feature--item">
                                <div class="text--icon">
                                    4
                                </div>

                                <p class="default-paragraph">
                                    Improve your users experiences and provide quality support for your project
                                </p>
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
                            <img class="icon-img"
                                src="assets/media/images/icons/right-arrow.svg" alt="" /></span> </a>
                    </div>
                </div>
            </section>
        </>
    )
}
