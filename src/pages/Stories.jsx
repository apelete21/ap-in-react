import React, { useEffect, useState } from "react";
import { icons } from "../service/icons";
import Motion from "../components/Motion/Motion";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { visitController } from "../service/visits";
import { Helmet } from "react-helmet";
import { articleReq } from "../api/requests/articles";
import { ArticleCard } from "../components/article/articleCard";

(async () => {
  const token = localStorage.getItem("blogToken");
  const { newToken } = await visitController({ page: "blog", token });
  if (newToken) return localStorage.setItem("blogToken", newToken);
})();

export default function Stories() {
  const [posts, setPosts] = useState([])
  const [error, seterror] = useState("")

useEffect(()=>{
    (async () => {
      const {data, ok} = await articleReq("")
      if (ok) {
        setPosts(data)
      } else {
        seterror(true)
      }
    })()
}, [posts])

  return (
    <>
      <Helmet>
        <title>Ours stories | AP'IN</title>
      </Helmet>
      <Motion>
        <header>
          <div className="fluid-wrapper bg_white">
            <MenuNav logoImage={icons.lgDark} linkView={"darklink"} />

            <MenuButtonDark />
            <div className="offset-canva story-main-title">
              <h1 className="section--hero__title">
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

        <section className="story--intro mb-lg offset-canva">
          <div className="stories_links">
            <ul className="links_list">
              <li className="link_list_item link_item--active"> ALL </li>
              <li className="link_list_item"> PODCAST </li>
              <li className="link_list_item"> BLOG </li>
              <li className="link_list_item"> PRESS RELEASE </li>
            </ul>
          </div>

          <div className="stories_items_container">
            {posts?.map((e, i)=>{
              return (
                <>
                  <ArticleCard element={e} />
                </>
              )
            })}
            {/* <div className="stories_item stories_item-img_bg">
              <div className="type_of_job">Digital Marketing</div>
              <a href="#" className="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </a>
              <div className="story_details">
                <div className="story_date">Avr, 12 2022</div>
                <div className="story_author">By John Doe</div>
              </div>
            </div>
            <div className="stories_item">
              <div className="type_of_job">Digital Marketing</div>
              <a href="#" className="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </a>
              <div className="story_details">
                <div className="story_date">Avr, 12 2022</div>
                <div className="story_author">By John Doe</div>
              </div>
            </div>
            <div className="stories_item stories_item-bg_red">
              <div className="type_of_job">Digital Marketing</div>
              <a href="#" className="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </a>
              <div className="story_details">
                <div className="story_date">Avr, 12 2022</div>
                <div className="story_author">By John Doe</div>
              </div>
            </div>
            <div className="stories_item">
              <div className="type_of_job">Digital Marketing</div>
              <a href="#" className="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </a>
              <div className="story_details">
                <div className="story_date">Avr, 12 2022</div>
                <div className="story_author">By John Doe</div>
              </div>
            </div>
            <div className="stories_item">
              <div className="type_of_job">Digital Marketing</div>
              <a href="#" className="story_title">
                What's the best <br /> performance fee structure <br /> for
                hedge funds?
              </a>
              <div className="story_details">
                <div className="story_date">Avr, 12 2022</div>
                <div className="story_author">By John Doe</div>
              </div>
            </div> */}
          </div>
          <div className="load_more_btn">
            <a className="btn default-outline" href="">
              Load more...
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
