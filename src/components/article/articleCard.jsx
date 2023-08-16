import moment from "moment/moment";
import { Link } from "react-router-dom";
import { imgUrl } from "../../api/requests/articles";

export function ArticleCard({ element }) {
  let style = {};
  if (!element?.category?.startsWith("podcast")) {
    style = { 
      color: "white",
      backgroundImage: `linear-gradient(to top, #0005, #0005),
    url(${imgUrl}/${element?.bannerImg})`,
    };
  } else {
    style = {
      color: "white",
      backgroundColor: "var(--primary)",
    };
  }

  return (
    <>
      <Link
        to={`/stories/${element?.title}?c=${element?.category}`}
        className="stories_item"
        style={style}
      >
        <div className="type_of_job">
          {element?.category?.replace("-", " ").toUpperCase()}
        </div>
        <div className="story_title">{element?.title}</div>
        <div className="story_details">
          <div className="story_date">
            {moment(element?.createdAt)?.format("ll")}
          </div>
          <div className="story_author">{element.author.fullName && `By ${element?.author?.fullName}`}</div>
        </div>
      </Link>
    </>
  );
}
