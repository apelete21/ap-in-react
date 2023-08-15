import React from "react";
import { Helmet } from "react-helmet";
import MenuNav from "../MenuNav";
import { MenuButtonDark } from "../MenuButton";
import { icons } from "../../service/icons";
import OthersImg1 from "../../assets/media/images/news/others_news_bg1.png";
import OthersImg2 from "../../assets/media/images/news/others_news_bg2.png";
import HTMLReactParser from "html-react-parser";
import moment from "moment";
import Motion from "../Motion/Motion";
import { imgUrl } from "../../api/requests/articles";

export default function ArticlePage({props}) {
  return (
    <>
      <Helmet>
        <title>{`${props?.title}`} | News</title>
      </Helmet>
      <Motion>
        <header>
          <div class="fluid-wrapper bg_white">
            <MenuNav logoImage={icons.lgDark} linkView="darklink" />
            <div class="offset-canva story-main-title">
              <h2 class="section--hero__title">{props?.title}</h2>
              <div class="news_details">
                <div class="author_details">
                  <div class="author_title">Author:</div>
                  <div class="author_name">{props?.author?.fullName}</div>
                </div>
                <div class="date_details">
                  <div class="date_title">Date:</div>
                  <div class="date_name">
                    {moment(props?.createdAt).format("ll")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MenuButtonDark />
        </header>

        {/* <!--===========================
            END OF HOME HERO SECTION
        ===========================--> */}

        <section class="news-banner">
          <img src={`${imgUrl}/${props?.bannerImg}`} alt="" />
        </section>

        {/* <!--===========================
            START OF HERO SECTION
        ===========================--> */}

        <section class="news--intro  offset-canva">
          <div class="news--intro_section dflex">
            <div class="news-share--links">
              <h6 class="news-share--title">Share:</h6>
              <div class="news-share--socials">
                <a class="share-to-facebook dflex" href="">
                  <div class="to-facebook-icon">
                    <img src={icons.fbDarkThin} alt="" />
                  </div>
                  <div class="icon-text">Facebook</div>
                </a>
                <a class="share-to-whatsapp dflex" href="">
                  <div class="to-whatsapp-icon">
                    <img src={icons.whDarkThin} alt="" />
                  </div>
                  <div class="icon-text">Whatsapp</div>
                </a>
                <a class="share-to-telegram dflex" href="">
                  <div class="to-telegram-icon">
                    <img src={icons.tgDarkThin} alt="" />
                  </div>
                  <div class="icon-text">Telegram</div>
                </a>
              </div>
            </div>
            {HTMLReactParser(`${props?.details}`)}
          </div>

          <div class="share-links">
            <div class="news-share--title">Share the props</div>
            <div class="share--icons-link">
              <a class="social-svg__icon" href="">
                <img src={icons.fbDark} alt="" />
              </a>

              <a class="social-svg__icon" href="">
                <img src={icons.inDark} alt="" />
              </a>

              <a class="social-svg__icon" href="">
                <img src={icons.itDark} alt="" />
              </a>

              <a class="social-svg__icon" href="">
                <img src={icons.ytDark} alt="" />
              </a>
            </div>
          </div>

          <hr class="separator--line" />

          <div class="others-news d-flex">
            <div
              class="others-news-item dflex"
              style={{
                "--bg-img": `linear-gradient(to left, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${OthersImg1})`,
              }}
            >
              <div class="other_news_details d-flex">
                <div class="others_news_details__title">
                  <h5>Without a shadow of a doubt, we receive</h5>
                </div>
                <div class="other_news_author-links_section d-flex">
                  <div class="other_news_author d-flex">
                    <div class="others_news_author_picture">
                      <img src={icons.prIcon} alt="author profile" />
                    </div>
                    <div class="others_news_author_name">
                      <span class="by">By</span>
                      <span class="auth_name">John Doe</span>
                    </div>
                  </div>
                  <a href="#" class="other_news_link d-flex">
                    <span>Read more</span>
                    <svg
                      width="29"
                      height="15"
                      viewBox="0 0 29 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8853 1L27.4312 7.5M27.4312 7.5L21.8853 14M27.4312 7.5H0.981659"
                        stroke="white"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="others-news-item dflex"
              style={{
                "--bg-img": `linear-gradient(to left, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${OthersImg2})`,
              }}
            >
              <div class="other_news_details d-flex">
                <div class="others_news_details__title">
                  <h5>Without a shadow of a doubt, we receive</h5>
                </div>
                <div class="other_news_author-links_section d-flex">
                  <div class="other_news_author d-flex">
                    <div class="others_news_author_picture">
                      <img src={icons.prIcon} alt="author profile" />
                    </div>
                    <div class="others_news_author_name">
                      <svg
                        width="29"
                        height="15"
                        viewBox="0 0 29 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.8853 1L27.4312 7.5M27.4312 7.5L21.8853 14M27.4312 7.5H0.981659"
                          stroke="white"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <a href="#" class="other_news_link d-flex">
                    <span>Read more</span>
                    <img src={icons.arLight} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Motion>
    </>
  );
}
