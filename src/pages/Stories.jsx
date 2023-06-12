import React from "react";
import { icons } from "../service/icons";
import Motion from "../components/Motion/Motion";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { visitController } from "../service/visits";
import { Helmet } from "react-helmet";

(async () => {
  const token = localStorage.getItem("blogToken");
  const { newToken } = await visitController({ page: "blog", token });
  if (newToken) return localStorage.setItem("blogToken", newToken);
})();

export default function Stories() {
  return (
    <>
      <Helmet>
        <title>Ours stories | AP’IN</title>
      </Helmet>
      <Motion>
        <header>
          <div class="fluid-wrapper bg_white">
            <MenuNav logoImage={icons.lgDark} linkView={"darklink"} />

            <MenuButtonDark />
            <div class="offset-canva story-main-title">
              <h1 class="section--hero__title">
                This is <br />
                where we tell stories
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

        <section class="story--intro mb-lg offset-canva">
          <div class="stories_links">
            <ul class="links_list">
              <li class="link_list_item link_item--active"> ALL </li>
              <li class="link_list_item"> PODCAST </li>
              <li class="link_list_item"> BLOG </li>
              <li class="link_list_item"> PRESS RELEASE </li>
            </ul>
          </div>

          <div class="stories_items_container">
            <div class="stories_item">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
            <div class="stories_item stories_item-img_bg">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
            <div class="stories_item">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
            <div class="stories_item stories_item-bg_red">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
            <div class="stories_item">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
            <div class="stories_item">
              <div class="type_of_job">Digital Marketing</div>
              <h6 class="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </h6>
              <div class="story_details">
                <div class="story_date">Avr, 12 2022</div>
                <div class="story_author">By John Doe</div>
              </div>
            </div>
          </div>
          <div class="load_more_btn">
            <a class="btn default-outline" href="">
              Load more
              <span>
                <img src="" alt="" />
              </span>
            </a>
          </div>
        </section>
      </Motion>
    </>
  );
}
