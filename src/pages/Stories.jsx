import React from "react";
import { icons } from "../service/icons";
import Motion from "../components/Motion/Motion";

export default function Stories() {
  return (
    <Motion>
      <header>
        <div class="fluid-wrapper bg_white">
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
          <div class="offset-canva story-main-title">
            <h1 class="section--hero__title">
              This is <br />
              where we tell stories
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
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
            </h6>
            <div class="story_details">
              <div class="story_date">Avr, 12 2022</div>
              <div class="story_author">By John Doe</div>
            </div>
          </div>
          <div class="stories_item stories_item-img_bg">
            <div class="type_of_job">Digital Marketing</div>
            <h6 class="story_title">
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
            </h6>
            <div class="story_details">
              <div class="story_date">Avr, 12 2022</div>
              <div class="story_author">By John Doe</div>
            </div>
          </div>
          <div class="stories_item">
            <div class="type_of_job">Digital Marketing</div>
            <h6 class="story_title">
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
            </h6>
            <div class="story_details">
              <div class="story_date">Avr, 12 2022</div>
              <div class="story_author">By John Doe</div>
            </div>
          </div>
          <div class="stories_item stories_item-bg_red">
            <div class="type_of_job">Digital Marketing</div>
            <h6 class="story_title">
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
            </h6>
            <div class="story_details">
              <div class="story_date">Avr, 12 2022</div>
              <div class="story_author">By John Doe</div>
            </div>
          </div>
          <div class="stories_item">
            <div class="type_of_job">Digital Marketing</div>
            <h6 class="story_title">
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
            </h6>
            <div class="story_details">
              <div class="story_date">Avr, 12 2022</div>
              <div class="story_author">By John Doe</div>
            </div>
          </div>
          <div class="stories_item">
            <div class="type_of_job">Digital Marketing</div>
            <h6 class="story_title">
              What's the best <br /> performance fee structure <br /> for hedge
              funds?
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
  );
}
