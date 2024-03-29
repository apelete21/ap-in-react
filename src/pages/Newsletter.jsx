import React, { useRef, useState } from "react";
import { MenuButtonLight } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { icons } from "../service/icons";
import { Link } from "react-router-dom";
import JobBanner from "../assets/media/images/banners/jobbanner.png";
import newsRequest from "../api/requests/newsPost";
import Confirm from "../components/confirmModal/Confirm";
import Motion from "../components/Motion/Motion";
import { Helmet } from "react-helmet";

export default function Newsletter() {
  const email = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value)) {
      setIsLoading(true);
      try {
        const response = await newsRequest(email.current?.value);
        if (response.ok) {
          setIsLoading(false);
          setSuccess(true);
        } else {
          window.alert(response.message);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    } else {
      alert("Invalid content !");
    }
    setIsLoading(false);
    document?.forms[0].reset()
  };

  const backToPrevious = (e) => {
    e.preventDefault();
    window.history.back();
  };

  function exitModal() {
    setSuccess(false);
  }

  return (
    <>
      <Helmet>
        <title>Subscribe to our newsletter | AP’IN</title>
      </Helmet>
      <Motion>
        <div
          className="newsletter_bottom_image vh-100"
          style={{
            "--bgStyle": `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${JobBanner})`,
          }}
        >
          <section className="contact--wrapper">
            <header>
              <MenuNav logoImage={icons.lgLight} linkView={true} />

              <MenuButtonLight />
            </header>

            <div className="newsletter_wrapper bg-dark">
              <div className="offset-canva">
                <div className="newsletter_back-btn_container">
                  <Link
                    href={"back to previous"}
                    title="back to previous"
                    onClick={backToPrevious}
                    className="newsletter-back_btn d-flex"
                  >
                    <img src={icons.arGray} alt="" />
                    <span>Go back</span>
                  </Link>
                </div>
                <div className="newsletter_page_title">
                  <h1>Stay tuned of our latest news and actualities</h1>
                </div>
                <div className="newsletter_form__container">
                  <form
                    action=""
                    className="newsletter_form d-flex"
                    onSubmit={handleSubmit}
                  >
                    <div className="newsletter-input_container">
                      <input
                        type="email"
                        ref={email}
                        className="newsletter_form_input"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div
                      className="newsletter_submit_container"
                    // onClick={}
                    >
                      <button type="submit">
                        <img
                          src={!isLoading ? icons.alGray : icons.loader}
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Motion>
      {success && <Confirm handleExit={exitModal} />}
    </>
  );
}
