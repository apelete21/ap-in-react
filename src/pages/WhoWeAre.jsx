import React from "react";
import { icons, teams } from "../service/icons";
import BannerLeft from "../assets/media/images/about-us/banner-left.png";
import BannerRight from "../assets/media/images/about-us/banner-right.png";
import WorkingBanner from "../assets/media/images/about-us/working--banner.png";
import AboutStat from "../assets/media/images/icons/about-stat.svg";
import Testimonials from "../assets/media/images/testimonials/testimonials.png";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import Motion from "../components/Motion/Motion";
import { Helmet } from "react-helmet";

export default function WhoWeAre() {
  return (
    <>
      <Helmet>
        <title>Who we are | AP’IN</title>
      </Helmet>
      <Motion>
        <header className="about-us__header">
          <MenuNav logoImage={icons.lgDark} linkView="darklink" />

          <div className="fluid-wrapper about-us__hero ">
            <div className="main-title offset-canva">
              <h1 className="section--hero__title">
                We are an <br />
                outstanding agency
              </h1>
            </div>

            <div className="main-description offset-canva">
              <p className="section--hero__desc">
                We are working on changing lives of today for a better futur.
                You can advantages of your strenghs and succeed your project
                with us on changing lives of today for
              </p>
            </div>
          </div>

          <MenuButtonDark />
        </header>

        {/* <!--===========================
            END OF HOME HERO SECTION
        ===========================--> */}

        <div className="hero--bottom-content offset-canva d-flex">
          <div className="hero-bottom-left_img">
            <img src={BannerLeft} alt="" />
          </div>

          <div className="hero-bottom-right_img">
            <img src={BannerRight} alt="" />
          </div>
        </div>

        <section className="about--us__intro ">
          <div className="about--intro offset-canva">
            <div className="section--title__box">
              <h2 className="section--title">
                This is us <br />
                we clear <span className="primary-color">focus</span>with <br />{" "}
                results
              </h2>
            </div>

            <div className="content">
              <p className="default-">
                Since september 2021, we have been working with companies in
                Africa, America and Europe to make sure their projects are
                mooving as they desire. By our 3 awards the same year, we build
                the confidence on our abilities to solve problems
              </p>
            </div>

            <div className="stats">
              <div className="stat-box">
                <span className="stats--number__sup">Companies</span>
                <h3>
                  <span className="primary-color">35</span>
                </h3>
              </div>

              <div className="stat-box">
                <span className="stats--number__sup">Solutions</span>
                <h3>+35</h3>
              </div>

              <div className="stat-box">
                <span className="stats--number__sup">Satisfaction</span>
                <h3>97%</h3>
              </div>
            </div>
          </div>
        </section>

        <div className="about--fluid__banner"></div>

        <section className="our--goals offset-canva">
          <div className="about--intro">
            <div className="section--title__box">
              <h2 className="section--title">
                Our ambition is <br /> to transform lives with technologies
              </h2>
            </div>
          </div>

          <div className="our--goals__content">
            <p>
              Since september 2021, we have been working with companies in
              Africa, America and Europe to make sure their projects are
            </p>
          </div>

          <div className="our--goals__content-text">
            <p>the same year, we build</p>
            <p>we have been working</p>
            <p>Since september 2021</p>
            <p>Europe to make sure</p>
            <p>the same year, we build</p>
            <p>with companies in</p>
          </div>

          <div className="more_services--btn">
            <a href="#">More about our services</a>
          </div>

          <div className="our-services--bottom-content d-flex">
            <img src={WorkingBanner} alt="" />
          </div>

          <div className="other-about-section d-flex">
            <div className="about--intro">
              <div className="section--title__box">
                <h2 className="">
                  Our ambition is <br /> to transform lives <br /> with
                  technologies
                </h2>
              </div>
            </div>

            <div className="other-about-left-sec">
              <div className="our--goals__content">
                <p>
                  Since september 2021, we have been working with companies in
                  Africa, America and Europe to make sure their projects are
                </p>
              </div>

              <div className="our--goals__content-text">
                <p>the same year, we build</p>
                <p>we have been working</p>
                <p>Since september 2021</p>
                <p>Europe to make sure</p>
                <p>the same year, we build</p>
                <p>with companies in</p>
              </div>
            </div>
          </div>
        </section>

        <section className="our--clients bg-dark ">
          <div className="section-wrapper">
            <div className="title-box">
              <div className="section--title__box">
                <h2 className="section--title">
                  The unique <br /> opportuinity to
                  <br /> make small
                </h2>
              </div>
            </div>

            <div className="illustration-figure">
              {/*  <div className="large-circle">
                                <div>
                                    <h4>200</h4>
                                    <span>Countries</span>
                                </div>
                            </div>

                            <div className="small--circle">
                                <div>
                                    <h4>06</h4>
                                    <span>Project</span>
                                </div>
                            </div> */}

              <img src={AboutStat} alt="" />
            </div>

            <div className="subtitle--intro">
              <h5>
                Before funding, <br />
                there is fiding
              </h5>
            </div>
            <div className="intro--content">
              <p className="default-paragraph white-p ">
                Working with brands all over the world help us continuously
                improve our services to reach ecah one of you
              </p>
            </div>
            <div className="blank--space__top"></div>
            <div className="some--numbers">
              <div className="number">
                <h3>3000</h3>
                <span>Prospects in our first year</span>

                <span className="svg--icon">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4999 1.8125C14.7403 1.8125 14.9708 1.90798 15.1407 2.07793C15.3107 2.24789 15.4062 2.4784 15.4062 2.71875V24.0936L21.1083 18.3896C21.2785 18.2195 21.5093 18.1239 21.7499 18.1239C21.9906 18.1239 22.2214 18.2195 22.3915 18.3896C22.5617 18.5598 22.6573 18.7906 22.6573 19.0313C22.6573 19.2719 22.5617 19.5027 22.3915 19.6729L15.1415 26.9229C15.0574 27.0073 14.9574 27.0742 14.8473 27.1199C14.7372 27.1656 14.6191 27.1891 14.4999 27.1891C14.3807 27.1891 14.2627 27.1656 14.1526 27.1199C14.0425 27.0742 13.9425 27.0073 13.8583 26.9229L6.6083 19.6729C6.43813 19.5027 6.34253 19.2719 6.34253 19.0313C6.34253 18.7906 6.43813 18.5598 6.6083 18.3896C6.77847 18.2195 7.00927 18.1239 7.24992 18.1239C7.49058 18.1239 7.72138 18.2195 7.89155 18.3896L13.5937 24.0936V2.71875C13.5937 2.4784 13.6892 2.24789 13.8591 2.07793C14.0291 1.90798 14.2596 1.8125 14.4999 1.8125Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>

              <div className="number">
                <h3>6000</h3>
                <span>Participants to our training</span>

                <span className="svg--icon">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4999 1.8125C14.7403 1.8125 14.9708 1.90798 15.1407 2.07793C15.3107 2.24789 15.4062 2.4784 15.4062 2.71875V24.0936L21.1083 18.3896C21.2785 18.2195 21.5093 18.1239 21.7499 18.1239C21.9906 18.1239 22.2214 18.2195 22.3915 18.3896C22.5617 18.5598 22.6573 18.7906 22.6573 19.0313C22.6573 19.2719 22.5617 19.5027 22.3915 19.6729L15.1415 26.9229C15.0574 27.0073 14.9574 27.0742 14.8473 27.1199C14.7372 27.1656 14.6191 27.1891 14.4999 27.1891C14.3807 27.1891 14.2627 27.1656 14.1526 27.1199C14.0425 27.0742 13.9425 27.0073 13.8583 26.9229L6.6083 19.6729C6.43813 19.5027 6.34253 19.2719 6.34253 19.0313C6.34253 18.7906 6.43813 18.5598 6.6083 18.3896C6.77847 18.2195 7.00927 18.1239 7.24992 18.1239C7.49058 18.1239 7.72138 18.2195 7.89155 18.3896L13.5937 24.0936V2.71875C13.5937 2.4784 13.6892 2.24789 13.8591 2.07793C14.0291 1.90798 14.2596 1.8125 14.4999 1.8125Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="some--numbers__last">
              <div className="number">
                <h3>20</h3>
                <span>Countries</span>
              </div>
            </div>

            <div className="testimonial-img">
              <div className="testimonials-author">
                <h4>Theo Ananissoh</h4>
                <span className="post">Writter based in Germany</span>
              </div>

              <img src={Testimonials} alt="" />
            </div>
            <div className="blank--space__left"></div>
            <div className="testimonials--text">
              <p className="default-paragraph white-p">
                <span>"</span> My project had been led by this amazing team of
                AP’IN. Since Germany, i can feel their professionalism and the
                excelence in their work. The project was in time and today i am
                thinking of new projects we can work on.
              </p>
            </div>
            <div className="blank--space__right"></div>
          </div>
        </section>

        <section className="our--team ">
          <div className="section--wrapper">
            <div className="team--content">
              <div className="sup--conetent">The team</div>

              <div className="team--members__container">
                <div className="section--title__box">
                  <h2 className="section--title">
                    We are thinking <br /> about the future
                  </h2>
                </div>

                <div className="team-members">
                  <div className="team--member__card">
                    <img src={teams.feikandine} alt="" />
                    <div className="desc">
                      <span className="member--function"> Office manager</span>
                      <p className="name">LARE-LAKTIEYI FeiKandine</p>
                    </div>
                  </div>

                  <div className="team--member__card">
                    <img src={teams.JeanPhillipe} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Head of operations
                      </span>
                      <p className="name">Jean-Philippe ABBEY</p>
                    </div>
                  </div>

                  <div className="team--member__card">
                    <img src={teams.Gladys} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Lead of online marketing{" "}
                      </span>
                      <p className="name">Gladys AKOMEDJI</p>
                    </div>
                  </div>
                  <div className="team--member__card flex--align__center">
                    <img src={teams.Arnaud} alt="" />
                    <div className="desc">
                      <span className="member--function"> Head of Design </span>
                      <p className="name">Arnaud AYIWOUNOU </p>
                    </div>
                  </div>

                  <div className="team--member__card flex--align__center">
                    <img src={teams.Roger} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Lead of logistics
                      </span>
                      <p className="name">Roger AZANO</p>
                    </div>
                  </div>
                  <div className="team--member__card flex--align__center">
                    <img src={teams.Gladys} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Head of innovation{" "}
                      </span>
                      <p className="name">Jean-Philippe ABBEY</p>
                    </div>
                  </div>

                  <div className="team--member__card flex--align__end">
                    <img src={teams.Gladys} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Lead of online marketing
                      </span>
                      <p className="name">Gladys AKOMEDJI</p>
                    </div>
                  </div>

                  <div className="team--member__card flex--align__end">
                    <img src={teams.Gladys} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Lead of logistics
                      </span>
                      <p className="name">Roger AZANO</p>
                    </div>
                  </div>

                  <div className="team--member__card flex--align__end">
                    <img src={teams.TeamMember6} alt="" />
                    <div className="desc">
                      <span className="member--function">
                        {" "}
                        Technical officer
                      </span>
                      <p className="name">Thomas bruce</p>
                    </div>
                  </div>
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
                Building brands.
                <br />
                Creating product. <br />
                Transform business.
              </h1>

              <a className="btn outline-red-btn " href="start-with-us.php">
                {" "}
                learn more{" "}
                <span>
                  <img className={icons.arLight} alt="" />
                </span>{" "}
              </a>
            </div>
          </div>
        </section>
      </Motion>
    </>
  );
}
