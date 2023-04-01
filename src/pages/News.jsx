import React from "react";
import MenuNav from "../components/MenuNav";
import { MenuButtonDark } from "../components/MenuButton";
import { icons } from "../service/icons";
import NewsBanner from "../assets/media/images/banners/news.png";
import NewsImg1 from "../assets/media/images/news/news-one.png";
import NewsImg2 from "../assets/media/images/news/news-two.png";
import OthersImg1 from "../assets/media/images/news/others_news_bg1.png";
import OthersImg2 from "../assets/media/images/news/others_news_bg2.png";
import Motion from "../components/Motion/Motion";

export default function News() {
  return (
    <Motion>
      <header>
        <div class="fluid-wrapper bg_white">
          <MenuNav logoImage={icons.lgDark} linkView="darklink" />
          <div class="offset-canva story-main-title">
            <h2 class="section--hero__title">
              When is the best time of Year to Visit Japan?
            </h2>
            <div class="news_details">
              <div class="author_details">
                <div class="author_title">Author:</div>
                <div class="author_name">Neil Gibson</div>
              </div>
              <div class="date_details">
                <div class="date_title">Date:</div>
                <div class="date_name">November 2022</div>
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
        <img src={NewsBanner} alt="" />
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
          <div class="news--text-block">
            <h3 class="text-block--title">
              The good news for travelers is that there is no single best time
              of to travel to Japan
            </h3>
            <div class="block--paragraph">
              <p class="default-paragraph">
                Japan is truly a year-round destination, and Japanese culture is
                remarkable in its profound appreciation of the changing of the
                seasons. As you’ll see when you visit, each season — and even
                sub-season! — is celebrated with seasonal foods, and often
                matsuri (festivals). Because of this, we typically recommend
                taking advantage of any chance to visit Japan.{" "}
              </p>
            </div>
            <div class="block--paragraph">
              <p className="default-paragraph">
                On the other hand, if your dates are flexible it’s worth
                thinking about which time of year you might enjoy most. After
                all, some travelers hate the cold — or the heat and humidity of
                summer — while others will do whatever it takes to avoid crowds!
                (When planning a trip to Japan, a key question to ask yourself
                is: would you rather have better weather, or fewer tourists
                around?)
              </p>
            </div>
            <div class="block--paragraph">
              Because there is so much to consider, we’ve put together this
              comprehensive guide on the best time to travel to Japan, including
              information on the seasons, weather, national holidays to look out
              for, and more.
            </div>
          </div>
        </div>

        <div class="illustration-img">
          <div class="illustration-img--container">
            <img src={NewsImg1} alt="" />
          </div>
        </div>

        <div class="news--text-block">
          <h4 class="text-block--title">Japanese Seasons 101: The Basics</h4>
          <div class="block--paragraph">
            <p className="default-paragraph">
              Looking for a succinct summary before you dive into the details?
            </p>
          </div>
          <div class="block--paragraph">
            <p className="default-paragraph">
              The best time to visit Japan is generally considered to be between
              March and May, or October and November. However, it depends on
              your interests and what you’re planning to do during your trip.
              While many travelers prefer to avoid the heat and humidity of
              summer, or cold of winter, you might be an exception if you’re
              interested in summer matsuri (festivals) or winter onsen (hot
              springs), skiing, and snowboarding.
            </p>
          </div>
          <div class="block--paragraph">
            <p class="default-paragraph">
              We delve into much more detail below, but to start here is a brief
              introduction to Japan’s seasons.
            </p>
          </div>
        </div>
        <div class="news--text-block">
          <h4 class="text-block--title">Summary of Japan’s Seasons</h4>
          <div class="block--paragraph">
            <p class="default-paragraph">
              Spring in Japan is famous for the cherry blossom season, and if
              you’re lucky — and don’t mind the crowds — you may experience
              hanami (cherry-blossom viewing) in all its glory. This romantic
              time of year is popular for honeymoons in Japan.
            </p>
          </div>
          <div class="block--paragraph">
            <p class="default-paragraph">
              Summer is arguably the most festive time of year, with colorful
              matsuri (festivals) throughout the country, the chance to hike in
              the mountains, and lovely coastal areas where you can enjoy the
              sea. Fall in Japan is another magical (and highly popular) time of
              year, with brilliant autumn colors and crisp, pleasant
              temperatures. Winter in Japan offers amazing seafood, incredible
              onsen (hot springs) experiences, not to mention some of the best
              powder in the world for skiing and snowboarding.
            </p>
          </div>
          <div class="block--paragraph">
            <p class="default-paragraph">
              And if you don’t have time to read the full article, but are
              looking for a sense of which month would be best for you, here is
              a brief overview to help you decide when to visit.
            </p>
          </div>
        </div>

        <div class="illustration-img">
          <div class="illustration-img--container dflex">
            <div class="illustration-image">
              <img src={NewsImg2} alt="" />
            </div>
            <div class="illustration-image">
              <img src={NewsImg2} alt="" />
            </div>
          </div>
          <p class="img-info">Spring in Japan lasts from about mid</p>
        </div>

        <div class="news--text-block">
          <h4 class="text-block--title">Spring in Japan</h4>
          <div class="block--paragraph">
            <p class="default-paragraph">
              Spring in Japan lasts from about mid-March to May, depending on
              the location. The weather in spring is notoriously fickle, with
              temperatures ranging from approximately 40 to 65 °F (4 to 18 °C).
              On some days you may still want your winter coat, while on other
              days you may not even need a sweater.
            </p>
          </div>
          <div class="block--paragraph">
            <p class="default-paragraph">
              Without a shadow of a doubt, we receive far more inquiries for
              travel to Japan around cherry blossom season than for any other
              time of year. In fact, it is such a popular time to visit that we
              are often forced to stop even considering new inquiries months and
              months in advance.
            </p>
          </div>
          <div class="block--paragraph">
            While the beauty of the cherry blossoms in bloom is undeniably
            alluring, whether or not flower viewing in Japan is worth the
            potential downsides is not quite as clear!
          </div>
        </div>

        <div class="share-links">
          <div class="news-share--title">Share the post</div>
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
  );
}
