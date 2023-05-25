import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../service/icons";

function JobCard({ element }) {
  return (
    <div className="job__detail">
      <h2 className="job_detail__title">{element?.title}</h2>
      <div className="job_detail__description">
        <p>{element?.description}</p>
      </div>
      <div className="job_time__location">
        <div className="job_frequence">
          <div className="frequence_icon">
            <img src={icons.bnTime} alt="" />
          </div>
          <div className="frequence">{element?.worktime}</div>
        </div>
        <div className="job_location">
          <div className="location_icon">
            <img src={icons.glocation} alt="" />
          </div>
          <div className="location">{element?.location}</div>
        </div>
        <Link
          to={`/careers/${element?.title}`}
          className="more_details_link d-flex"
        >
          View more
          <div
            className="more_details_view"
            style={{
              transform: "rotate(180deg)",
              marginLeft: 10,
            }}
          >
            <img src={icons.arGray} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
