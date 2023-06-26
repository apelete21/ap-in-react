import React, { useEffect, useState } from "react";
import MenuNav from "../components/MenuNav";
import { MenuButtonDark } from "../components/MenuButton";
import { icons } from "../service/icons";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { articleReq } from "../api/requests/articles";
import { useQuery } from "../components/query";
import ArticlePage from "../components/article/articlePage";
import PodCastPage from "../components/podcast/podcastPage";

export default function News() {
  const { title } = useParams();
  const query = useQuery();
  const [post, setPost] = useState(null);
  const [error, seterror] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        if (isLoading) {
          const { data, ok } = await articleReq(title);
          if (ok) {
            setPost(data.article);
          } else {
            seterror(true);
          }
        }
      }, 500);
      setisLoading(false);
    })();
  }, [title, post]);

  if (!isLoading && post !== null) {
    if (query.get("c") !== "podcast") {
      return (
        <>
          <ArticlePage props={post} />
        </>
      );
    } else {
      return (<>
        <PodCastPage props={post} />
      </>)
    }
  } else {
    return (
      <>
        <Helmet>
          <title>{`${error ? "Not found!" : "Loading"}`}</title>
        </Helmet>
        <header>
          <div class="fluid-wrapper bg_white">
            <MenuNav logoImage={icons.lgDark} linkView="darklink" />
          </div>
          <MenuButtonDark />
        </header>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <b>{error ? "Not found!" : "Loading"}</b>
        </div>
      </>
    );
  }
}
