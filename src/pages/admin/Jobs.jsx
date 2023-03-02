import React from 'react'
import { Link } from 'react-router-dom'

export default function Jobs() {
  return (
    <>
      <div className="list-of-jobs">
        <div className="job-list-title">
          <h1>
            List of jobs
          </h1>
        </div>

        <div className="jobs-search-bar">
          <form action="#">
            <div className="quotes-search-bar">
              <div className="search-bar-icon">
                <img src="../assets/media/images/icons/search-dark.svg" alt="search icon" />
              </div>
              <input type="text" placeholder="Rechercher" />
              <button type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="jobs-available-number">
          <p>
            12 Jobs available
          </p>
        </div>

        <div className="jobs-list-container">
          <div className="job-item">
            <div className="job-item-top-bar">
              <div className="item-head-description">
                <div className="item-picture" style={{ "--item-picture": "darkviolet" }}>
                  <img src="../assets/media/images/icons/chair-icon.svg" alt="" />
                </div>
                <div className="item-title-details">
                  <div className="job-title">
                    <h1>
                      Junior UI/UX Designer
                    </h1>
                  </div>
                  <div className="enterprise-name">
                    AP’IN SARL
                  </div>
                </div>
              </div>
              <div className="publication-date">
                <span>1 week ago</span>
                <span>
                  <img src="../assets/media/images/icons/calendar.svg" alt="" />
                </span>
              </div>
            </div>

            <div className="job-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate libero et velit interdum, ac aliquetmattis.
              </p>
            </div>

            <div className="job-item-tag">
              <div>
                <span className="time-tag">
                  Full time
                </span>
                <span className="type-tag">
                  Design
                </span>
                <span className="location-tag">
                  Remote
                </span>
              </div>
              <div>
                <span className="availabity-tag">
                  Active
                </span>
              </div>
            </div>

            <div className="job-item-bottom-bar">
              <div className="job-item-statistic">
                <div className="views">
                  <div className="views-icon stat_icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74935 11.6663C8.74935 8.44342 11.3598 5.83301 14.5827 5.83301C17.8056 5.83301 20.416 8.44342 20.416 11.6663C20.416 14.8893 17.8056 17.4997 14.5827 17.4997C11.3598 17.4997 8.74935 14.8893 8.74935 11.6663ZM13.3285 28.8018L12.9056 27.708L13.3285 26.6143C14.3493 24.0622 16.1577 22.0788 18.3889 20.7372C17.1931 20.533 15.9243 20.4163 14.5827 20.4163C8.13685 20.4163 2.91602 23.0268 2.91602 26.2497V29.1663H13.5181C13.4598 29.0351 13.3868 28.9184 13.3285 28.8018ZM24.791 26.2497C23.9743 26.2497 23.3327 26.8913 23.3327 27.708C23.3327 28.5247 23.9743 29.1663 24.791 29.1663C25.6077 29.1663 26.2493 28.5247 26.2493 27.708C26.2493 26.8913 25.6077 26.2497 24.791 26.2497ZM33.541 27.708C32.1702 31.1205 28.7723 33.5413 24.791 33.5413C20.8098 33.5413 17.4118 31.1205 16.041 27.708C17.4118 24.2955 20.8098 21.8747 24.791 21.8747C28.7723 21.8747 32.1702 24.2955 33.541 27.708ZM28.4368 27.708C28.4368 26.7411 28.0527 25.8137 27.369 25.13C26.6853 24.4463 25.7579 24.0622 24.791 24.0622C23.8241 24.0622 22.8967 24.4463 22.213 25.13C21.5293 25.8137 21.1452 26.7411 21.1452 27.708C21.1452 28.6749 21.5293 29.6023 22.213 30.286C22.8967 30.9697 23.8241 31.3538 24.791 31.3538C25.7579 31.3538 26.6853 30.9697 27.369 30.286C28.0527 29.6023 28.4368 28.6749 28.4368 27.708Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="views-number">
                    <b>44</b> views
                  </div>
                </div>
                <Link className="applications" to={"/admin/jobs/applications"}>
                  <div className="applications-icon stat_icon">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8327 23.333V25.6663H3.49935C2.21602 25.6663 1.16602 24.6163 1.16602 23.333V4.66634C1.16602 3.38301 2.21602 2.33301 3.49935 2.33301H24.4993C25.7827 2.33301 26.8327 3.38301 26.8327 4.66634V14.1163L26.5993 13.883C26.016 13.2997 25.316 12.9497 24.4993 12.9497V6.99967H3.49935V23.333H12.8327ZM24.966 15.5163L26.4827 17.033C26.716 17.2663 26.716 17.733 26.4827 17.9663L25.316 19.133L22.866 16.683L24.0327 15.5163C24.1493 15.3997 24.266 15.283 24.4993 15.283C24.7327 15.283 24.8493 15.3997 24.966 15.5163ZM24.616 19.7163L17.616 26.833H15.166V24.383L22.2827 17.2663L24.616 19.7163Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="applications-number">
                    <b>21</b> applications
                  </div>
                </Link>
              </div>

              <div className="actions">
                <div className=" action action-view">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.49935 3.5625C5.54102 3.5625 2.1606 6.02458 0.791016 9.5C2.1606 12.9754 5.54102 15.4375 9.49935 15.4375C13.4577 15.4375 16.8381 12.9754 18.2077 9.5C16.8381 6.02458 13.4577 3.5625 9.49935 3.5625ZM9.49935 13.4583C7.31435 13.4583 5.54102 11.685 5.54102 9.5C5.54102 7.315 7.31435 5.54167 9.49935 5.54167C11.6844 5.54167 13.4577 7.315 13.4577 9.5C13.4577 11.685 11.6844 13.4583 9.49935 13.4583ZM9.49935 7.125C8.18518 7.125 7.12435 8.18583 7.12435 9.5C7.12435 10.8142 8.18518 11.875 9.49935 11.875C10.8135 11.875 11.8744 10.8142 11.8744 9.5C11.8744 8.18583 10.8135 7.125 9.49935 7.125Z" fill="#AAAAAA" />
                    </svg>

                  </a>
                </div>
                <div className="action action-edit">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2792 7.0653L11.9146 3.7403L13.0229 2.63197C13.3264 2.32849 13.6993 2.17676 14.1415 2.17676C14.5833 2.17676 14.9559 2.32849 15.2594 2.63197L16.3677 3.7403C16.6712 4.04377 16.8295 4.41005 16.8427 4.83913C16.8559 5.26769 16.7108 5.6337 16.4073 5.93717L15.2792 7.0653ZM3.16667 16.6247C2.94236 16.6247 2.75447 16.5487 2.603 16.3967C2.451 16.2452 2.375 16.0573 2.375 15.833V13.5965C2.375 13.491 2.39479 13.3889 2.43438 13.2902C2.47396 13.1909 2.53333 13.1018 2.6125 13.0226L10.7667 4.86842L14.1312 8.23301L5.97708 16.3872C5.89792 16.4663 5.80899 16.5257 5.71029 16.5653C5.61107 16.6049 5.50868 16.6247 5.40312 16.6247H3.16667Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
                <div className="action action-delete">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0423 3.16667H12.2715L11.4798 2.375H7.52149L6.72982 3.16667H3.95898V4.75H15.0423M4.75065 15.0417C4.75065 15.4616 4.91747 15.8643 5.2144 16.1613C5.51133 16.4582 5.91406 16.625 6.33398 16.625H12.6673C13.0872 16.625 13.49 16.4582 13.7869 16.1613C14.0838 15.8643 14.2507 15.4616 14.2507 15.0417V5.54167H4.75065V15.0417Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
          <div className="job-item">
            <div className="job-item-top-bar">
              <div className="item-head-description">
                <div className="item-picture" style={{ "--item-picture": "darkviolet" }}>
                  <img src="../assets/media/images/icons/chair-icon.svg" alt="" />
                </div>
                <div className="item-title-details">
                  <div className="job-title">
                    <h1>
                      Junior UI/UX Designer
                    </h1>
                  </div>
                  <div className="enterprise-name">
                    AP’IN SARL
                  </div>
                </div>
              </div>
              <div className="publication-date">
                <span>1 week ago</span>
                <span>
                  <img src="../assets/media/images/icons/calendar.svg" alt="" />
                </span>
              </div>
            </div>

            <div className="job-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate libero et velit interdum, ac aliquetmattis.
              </p>
            </div>

            <div className="job-item-tag">
              <div>
                <span className="time-tag">
                  Full time
                </span>
                <span className="type-tag">
                  Design
                </span>
                <span className="location-tag">
                  Remote
                </span>
              </div>
              <div>
                <span className="availabity-tag">
                  Active
                </span>
              </div>
            </div>

            <div className="job-item-bottom-bar">
              <div className="job-item-statistic">
                <div className="views">
                  <div className="views-icon stat_icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74935 11.6663C8.74935 8.44342 11.3598 5.83301 14.5827 5.83301C17.8056 5.83301 20.416 8.44342 20.416 11.6663C20.416 14.8893 17.8056 17.4997 14.5827 17.4997C11.3598 17.4997 8.74935 14.8893 8.74935 11.6663ZM13.3285 28.8018L12.9056 27.708L13.3285 26.6143C14.3493 24.0622 16.1577 22.0788 18.3889 20.7372C17.1931 20.533 15.9243 20.4163 14.5827 20.4163C8.13685 20.4163 2.91602 23.0268 2.91602 26.2497V29.1663H13.5181C13.4598 29.0351 13.3868 28.9184 13.3285 28.8018ZM24.791 26.2497C23.9743 26.2497 23.3327 26.8913 23.3327 27.708C23.3327 28.5247 23.9743 29.1663 24.791 29.1663C25.6077 29.1663 26.2493 28.5247 26.2493 27.708C26.2493 26.8913 25.6077 26.2497 24.791 26.2497ZM33.541 27.708C32.1702 31.1205 28.7723 33.5413 24.791 33.5413C20.8098 33.5413 17.4118 31.1205 16.041 27.708C17.4118 24.2955 20.8098 21.8747 24.791 21.8747C28.7723 21.8747 32.1702 24.2955 33.541 27.708ZM28.4368 27.708C28.4368 26.7411 28.0527 25.8137 27.369 25.13C26.6853 24.4463 25.7579 24.0622 24.791 24.0622C23.8241 24.0622 22.8967 24.4463 22.213 25.13C21.5293 25.8137 21.1452 26.7411 21.1452 27.708C21.1452 28.6749 21.5293 29.6023 22.213 30.286C22.8967 30.9697 23.8241 31.3538 24.791 31.3538C25.7579 31.3538 26.6853 30.9697 27.369 30.286C28.0527 29.6023 28.4368 28.6749 28.4368 27.708Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="views-number">
                    <b>44</b> views
                  </div>
                </div>
                <div className="applications">
                  <div className="applications-icon stat_icon">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8327 23.333V25.6663H3.49935C2.21602 25.6663 1.16602 24.6163 1.16602 23.333V4.66634C1.16602 3.38301 2.21602 2.33301 3.49935 2.33301H24.4993C25.7827 2.33301 26.8327 3.38301 26.8327 4.66634V14.1163L26.5993 13.883C26.016 13.2997 25.316 12.9497 24.4993 12.9497V6.99967H3.49935V23.333H12.8327ZM24.966 15.5163L26.4827 17.033C26.716 17.2663 26.716 17.733 26.4827 17.9663L25.316 19.133L22.866 16.683L24.0327 15.5163C24.1493 15.3997 24.266 15.283 24.4993 15.283C24.7327 15.283 24.8493 15.3997 24.966 15.5163ZM24.616 19.7163L17.616 26.833H15.166V24.383L22.2827 17.2663L24.616 19.7163Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="applications-number">
                    <b>21</b> applications
                  </div>
                </div>
              </div>

              <div className="actions">
                <div className=" action action-view">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.49935 3.5625C5.54102 3.5625 2.1606 6.02458 0.791016 9.5C2.1606 12.9754 5.54102 15.4375 9.49935 15.4375C13.4577 15.4375 16.8381 12.9754 18.2077 9.5C16.8381 6.02458 13.4577 3.5625 9.49935 3.5625ZM9.49935 13.4583C7.31435 13.4583 5.54102 11.685 5.54102 9.5C5.54102 7.315 7.31435 5.54167 9.49935 5.54167C11.6844 5.54167 13.4577 7.315 13.4577 9.5C13.4577 11.685 11.6844 13.4583 9.49935 13.4583ZM9.49935 7.125C8.18518 7.125 7.12435 8.18583 7.12435 9.5C7.12435 10.8142 8.18518 11.875 9.49935 11.875C10.8135 11.875 11.8744 10.8142 11.8744 9.5C11.8744 8.18583 10.8135 7.125 9.49935 7.125Z" fill="#AAAAAA" />
                    </svg>

                  </a>
                </div>
                <div className="action action-edit">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2792 7.0653L11.9146 3.7403L13.0229 2.63197C13.3264 2.32849 13.6993 2.17676 14.1415 2.17676C14.5833 2.17676 14.9559 2.32849 15.2594 2.63197L16.3677 3.7403C16.6712 4.04377 16.8295 4.41005 16.8427 4.83913C16.8559 5.26769 16.7108 5.6337 16.4073 5.93717L15.2792 7.0653ZM3.16667 16.6247C2.94236 16.6247 2.75447 16.5487 2.603 16.3967C2.451 16.2452 2.375 16.0573 2.375 15.833V13.5965C2.375 13.491 2.39479 13.3889 2.43438 13.2902C2.47396 13.1909 2.53333 13.1018 2.6125 13.0226L10.7667 4.86842L14.1312 8.23301L5.97708 16.3872C5.89792 16.4663 5.80899 16.5257 5.71029 16.5653C5.61107 16.6049 5.50868 16.6247 5.40312 16.6247H3.16667Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
                <div className="action action-delete">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0423 3.16667H12.2715L11.4798 2.375H7.52149L6.72982 3.16667H3.95898V4.75H15.0423M4.75065 15.0417C4.75065 15.4616 4.91747 15.8643 5.2144 16.1613C5.51133 16.4582 5.91406 16.625 6.33398 16.625H12.6673C13.0872 16.625 13.49 16.4582 13.7869 16.1613C14.0838 15.8643 14.2507 15.4616 14.2507 15.0417V5.54167H4.75065V15.0417Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
          <div className="job-item">
            <div className="job-item-top-bar">
              <div className="item-head-description">
                <div className="item-picture" style={{ "--item-picture": "darkviolet" }}>
                  <img src="../assets/media/images/icons/chair-icon.svg" alt="" />
                </div>
                <div className="item-title-details">
                  <div className="job-title">
                    <h1>
                      Junior UI/UX Designer
                    </h1>
                  </div>
                  <div className="enterprise-name">
                    AP’IN SARL
                  </div>
                </div>
              </div>
              <div className="publication-date">
                <span>1 week ago</span>
                <span>
                  <img src="../assets/media/images/icons/calendar.svg" alt="" />
                </span>
              </div>
            </div>

            <div className="job-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate libero et velit interdum, ac aliquetmattis.
              </p>
            </div>

            <div className="job-item-tag">
              <div>
                <span className="time-tag">
                  Full time
                </span>
                <span className="type-tag">
                  Design
                </span>
                <span className="location-tag">
                  Remote
                </span>
              </div>
              <div>
                <span className="availabity-tag">
                  Active
                </span>
              </div>
            </div>

            <div className="job-item-bottom-bar">
              <div className="job-item-statistic">
                <div className="views">
                  <div className="views-icon stat_icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.74935 11.6663C8.74935 8.44342 11.3598 5.83301 14.5827 5.83301C17.8056 5.83301 20.416 8.44342 20.416 11.6663C20.416 14.8893 17.8056 17.4997 14.5827 17.4997C11.3598 17.4997 8.74935 14.8893 8.74935 11.6663ZM13.3285 28.8018L12.9056 27.708L13.3285 26.6143C14.3493 24.0622 16.1577 22.0788 18.3889 20.7372C17.1931 20.533 15.9243 20.4163 14.5827 20.4163C8.13685 20.4163 2.91602 23.0268 2.91602 26.2497V29.1663H13.5181C13.4598 29.0351 13.3868 28.9184 13.3285 28.8018ZM24.791 26.2497C23.9743 26.2497 23.3327 26.8913 23.3327 27.708C23.3327 28.5247 23.9743 29.1663 24.791 29.1663C25.6077 29.1663 26.2493 28.5247 26.2493 27.708C26.2493 26.8913 25.6077 26.2497 24.791 26.2497ZM33.541 27.708C32.1702 31.1205 28.7723 33.5413 24.791 33.5413C20.8098 33.5413 17.4118 31.1205 16.041 27.708C17.4118 24.2955 20.8098 21.8747 24.791 21.8747C28.7723 21.8747 32.1702 24.2955 33.541 27.708ZM28.4368 27.708C28.4368 26.7411 28.0527 25.8137 27.369 25.13C26.6853 24.4463 25.7579 24.0622 24.791 24.0622C23.8241 24.0622 22.8967 24.4463 22.213 25.13C21.5293 25.8137 21.1452 26.7411 21.1452 27.708C21.1452 28.6749 21.5293 29.6023 22.213 30.286C22.8967 30.9697 23.8241 31.3538 24.791 31.3538C25.7579 31.3538 26.6853 30.9697 27.369 30.286C28.0527 29.6023 28.4368 28.6749 28.4368 27.708Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="views-number">
                    <b>44</b> views
                  </div>
                </div>
                <div className="applications">
                  <div className="applications-icon stat_icon">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8327 23.333V25.6663H3.49935C2.21602 25.6663 1.16602 24.6163 1.16602 23.333V4.66634C1.16602 3.38301 2.21602 2.33301 3.49935 2.33301H24.4993C25.7827 2.33301 26.8327 3.38301 26.8327 4.66634V14.1163L26.5993 13.883C26.016 13.2997 25.316 12.9497 24.4993 12.9497V6.99967H3.49935V23.333H12.8327ZM24.966 15.5163L26.4827 17.033C26.716 17.2663 26.716 17.733 26.4827 17.9663L25.316 19.133L22.866 16.683L24.0327 15.5163C24.1493 15.3997 24.266 15.283 24.4993 15.283C24.7327 15.283 24.8493 15.3997 24.966 15.5163ZM24.616 19.7163L17.616 26.833H15.166V24.383L22.2827 17.2663L24.616 19.7163Z" fill="#AAAAAA" />
                    </svg>
                  </div>
                  <div className="applications-number">
                    <b>21</b> applications
                  </div>
                </div>
              </div>

              <div className="actions">
                <div className=" action action-view">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.49935 3.5625C5.54102 3.5625 2.1606 6.02458 0.791016 9.5C2.1606 12.9754 5.54102 15.4375 9.49935 15.4375C13.4577 15.4375 16.8381 12.9754 18.2077 9.5C16.8381 6.02458 13.4577 3.5625 9.49935 3.5625ZM9.49935 13.4583C7.31435 13.4583 5.54102 11.685 5.54102 9.5C5.54102 7.315 7.31435 5.54167 9.49935 5.54167C11.6844 5.54167 13.4577 7.315 13.4577 9.5C13.4577 11.685 11.6844 13.4583 9.49935 13.4583ZM9.49935 7.125C8.18518 7.125 7.12435 8.18583 7.12435 9.5C7.12435 10.8142 8.18518 11.875 9.49935 11.875C10.8135 11.875 11.8744 10.8142 11.8744 9.5C11.8744 8.18583 10.8135 7.125 9.49935 7.125Z" fill="#AAAAAA" />
                    </svg>

                  </a>
                </div>
                <div className="action action-edit">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2792 7.0653L11.9146 3.7403L13.0229 2.63197C13.3264 2.32849 13.6993 2.17676 14.1415 2.17676C14.5833 2.17676 14.9559 2.32849 15.2594 2.63197L16.3677 3.7403C16.6712 4.04377 16.8295 4.41005 16.8427 4.83913C16.8559 5.26769 16.7108 5.6337 16.4073 5.93717L15.2792 7.0653ZM3.16667 16.6247C2.94236 16.6247 2.75447 16.5487 2.603 16.3967C2.451 16.2452 2.375 16.0573 2.375 15.833V13.5965C2.375 13.491 2.39479 13.3889 2.43438 13.2902C2.47396 13.1909 2.53333 13.1018 2.6125 13.0226L10.7667 4.86842L14.1312 8.23301L5.97708 16.3872C5.89792 16.4663 5.80899 16.5257 5.71029 16.5653C5.61107 16.6049 5.50868 16.6247 5.40312 16.6247H3.16667Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
                <div className="action action-delete">
                  <a href="#">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0423 3.16667H12.2715L11.4798 2.375H7.52149L6.72982 3.16667H3.95898V4.75H15.0423M4.75065 15.0417C4.75065 15.4616 4.91747 15.8643 5.2144 16.1613C5.51133 16.4582 5.91406 16.625 6.33398 16.625H12.6673C13.0872 16.625 13.49 16.4582 13.7869 16.1613C14.0838 15.8643 14.2507 15.4616 14.2507 15.0417V5.54167H4.75065V15.0417Z" fill="#AAAAAA" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          <div className="add-application-btn">
            <Link className="btn cs_btn btn_secondary" to={"/admin/jobs/new"}>
              <span className="">
                <img src="../assets/media/images/icons/feather.svg" alt="" />
              </span>
              <span>Add a new job</span>
            </Link>
          </div>

        </div>

        <div className="quote-pagination-controller">
          <div className="pagination-back-btn">
            <img src="../assets/media/images/icons/chevron_left.svg" alt="" />
          </div>
          <div className="controller-pages-number">
            <span className="selected">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>14</span>
          </div>
          <div className="pagination-forward-btn">
            <img src="../assets/media/images/icons/chevron_right.svg" alt="" />
          </div>
        </div>

      </div>

    </>
  )
}
