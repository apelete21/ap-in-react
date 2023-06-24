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
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState("");

  const [itemActive, setItemActive] = useState("");

  const itemType = (value) => {
    if (value !== "ALL") {
      return value?.toLowerCase()?.trim()?.replace(" ", "-");
    } else {
      return "";
    }
  };

const filterFunction = (e) => {
  if (itemActive === "all" || itemActive === "") {
    return e;
  } else if (e?.category?.startsWith(itemActive)) return e;
};

  const setActiveItem = (e) => {
    e.preventDefault();
    setItemActive(itemType(e?.target?.innerText));
  };

  useEffect(() => {
    (async () => {
      const { data, ok } = await articleReq("");
      if (ok) {
        setPosts(data);
      } else {
        seterror(true);
      }
    })();
  }, []);

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
              <li
                className={`link_list_item ${
                  (itemActive === "all" || itemActive === "") &&
                  "link_item--active"
                }`}
                onClick={setActiveItem}
              >
                ALL
              </li>
              <li
                className={`link_list_item ${
                  itemActive === "podcast" && "link_item--active"
                }`}
                onClick={setActiveItem}
              >
                PODCAST
              </li>
              <li
                className={`link_list_item ${
                  itemActive === "blog" && "link_item--active"
                }`}
                onClick={setActiveItem}
              >
                BLOG
              </li>
              <li
                className={`link_list_item ${
                  itemActive === "press-release" && "link_item--active"
                }`}
                onClick={setActiveItem}
              >
                PRESS RELEASE
              </li>
            </ul>
          </div>

          <div className="stories_items_container">
            {posts?.filter(filterFunction).length !== 0 ? (
              posts?.filter(filterFunction)?.map((e, i) => {
                return (
                  <>
                    <ArticleCard element={e} key={i} />
                  </>
                );
              })
            ) : (
              <p>No posts for this category !</p>
            )}
          </div>
          {posts?.filter(filterFunction).length !== 0 && (
            <div className="load_more_btn">
              <a className="btn default-outline" href="">
                Load more...
                <span>
                  <img src="" alt="" />
                </span>
              </a>
            </div>
          )}
        </section>
      </Motion>
    </>
  );
}
