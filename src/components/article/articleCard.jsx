import moment from "moment/moment";
import { Link } from "react-router-dom";

const style = {
  color: "black"
}

export function ArticleCard({ element }) {
  return (
    <>
      <Link to={`/stories/${element?.title}`} className="stories_item" style={style}>
        <div className="type_of_job">{element?.category}</div>
        <div className="story_title">{element?.title}</div>
        <div className="story_details">
          <div className="story_date">
            {moment(element?.createdAt)?.format("ll")}
          </div>
          <div className="story_author">By {element?.author}</div>
        </div>
      </Link>
    </>
  );
}
