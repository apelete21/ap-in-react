import React from 'react'
import { Link } from 'react-router-dom';
import { icons } from '../../service/icons';

function JobCard({element}) {
      return (
        <div className="job__detail">
          <h1 className="job_detail__title">{element?.title}</h1>
          <div className="job_detail__description">
            <p>
              {element?.lowParagraph}
            </p>
          </div>
          <div className="job_time__location">
            <div className="job_frequence">
              <div className="frequence_icon">
                <img src={icons.bnTime} alt="" />
              </div>
              <div className="frequence">{element?.time}</div>
            </div>
            <div className="job_location">
              <div className="location_icon">
                <img src={icons.glocation} alt="" />
              </div>
              <div className="location">{element?.location}</div>
            </div>
            <Link
              to={`/jobs/${element?.title}`}
              className="more_details_link"
            >
              <div className="more_details_view">
                View
                <img src={icons.arOblik} alt="" />
              </div>
            </Link>
          </div>
        </div>
      );
}

export default JobCard
