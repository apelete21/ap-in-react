import React, { useRef, useState } from "react";
import newsRequest from "../api/requests/newsPost";
import QuoteRequest from "../api/requests/quote";
import Confirm from "../components/confirmModal/Confirm";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { icons } from "../service/icons";
import Motion from "../components/Motion/Motion";

export default function StartWithUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const [agreeValue, setAgreeValue] = useState(false)

  const fullname = useRef("");
  const email = useRef("");
  const location = useRef("");
  const company_name = useRef("");
  const phone_number = useRef("");
  const service = useRef("");
  const description = useRef("");
  const discover = useRef("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      fullname: fullname.current.value,
      location: location.current.value,
      email: email.current.value,
      company_name: company_name.current.value,
      phone_number: phone_number.current.value,
      description: description.current.value,
      service: service.current.value,
      discover: discover.current.value,
    };

    setIsLoading(true);
    try {
      const response = await QuoteRequest(data);
      if(agreeValue) {
        await newsRequest(email.current?.value);
      }
      if (response.ok) {
        setIsLoading(false);
        setSuccess(true);
      } else {
        window.alert(response?.message ?? response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  function exitModal() {
    setSuccess(false);
  }

  const changeAgreeValue = (e) => {
    e.preventDefault()
    setAgreeValue(!agreeValue)
  }

  return (
    <>
      {success && (
        <>
          <Confirm handleExit={exitModal} />
        </>
      )}
      <Motion>
        <header className="get--quote__header">
          <MenuNav logoImage={icons.lgDark} linkView={"darklink"} />

          <MenuButtonDark />

          <div className="fluid-wrapper get-quote__hero ">
            <div className="main-title offset-canva">
              <h1 className="section--hero__title">
                Tell us more
                <br />
                about your business
              </h1>
              <div className="section--hero__paragraph">
                Since september 2021, we have been working with companies in
                Africa, America and Euroope to make sure their projects are
                moving as they desire
              </div>
            </div>
          </div>
        </header>
        {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}

        <div className="get--quote__form-wrapper offset-canva d-flex ">
          <div className="form">
            <form className="get-quote--form">
              <div className="form-input">
                <span className="form--input__number">01</span>
                <div className="input-group">
                  <label htmlFor="">What are you interest in</label>
                  <div className="select-wrapper">
                    <select name="service" id="format" ref={service}>
                      <option defaultValue>Choose*</option>
                      <option value="Process improvment">
                        Process improvement
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Hosting solution">Hosting solution</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Graphic design">Graphic design</option>
                      <option value="Branding and packaging">
                        Branding and packaging
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">02</span>
                <div className="input-group">
                  <label htmlFor="">How did you find out about us?</label>
                  <div className="select-wrapper">
                    <select name="service" id="format" ref={discover}>
                      <option defaultValue>Choose*</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="FaceBook">FaceBook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Research">Research</option>
                      <option value="Collegues">Collegues</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">03</span>
                <div className="input-group">
                  <label htmlFor="">What is your name</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="John Do"
                    ref={fullname}
                  />
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">04</span>
                <div className="input-group">
                  <label htmlFor="">What is your email</label>
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="john@doe.com"
                    ref={email}
                  />
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">05</span>
                <div className="input-group">
                  <label htmlFor="">Where are you locate in?</label>
                  <input
                    type="text"
                    name="city"
                    id=""
                    placeholder="Your city"
                    ref={location}
                  />
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">05</span>
                <div className="input-group">
                  <label htmlFor="">Give us your number!</label>
                  <input
                    type="number"
                    name="city"
                    id=""
                    placeholder="+00228 00 00 00 00"
                    ref={phone_number}
                  />
                </div>
              </div>

              <div className="form-input">
                <span className="form--input__number">06</span>
                <div className="input-group">
                  <label htmlFor="">
                    What is the name of your organisation?
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    id=""
                    placeholder="John Do Corp"
                    ref={company_name}
                  />
                </div>
              </div>

              <div className="form-input last-child">
                <span className="form--input__number">07</span>
                <div className="input-group">
                  <label htmlFor="">Tell us about your idea or company</label>
                  <textarea
                    name="message"
                    defaultValue={"..."}
                    ref={description}
                  />
                </div>
              </div>

              <div className="news--consent">
                <input
                  className="news--consent__checkbox"
                  type="checkbox"
                  name="email_consent"
                  value={changeAgreeValue}
                />
                <label htmlFor="">
                  {
                    "I agree to receive occasional newsletters containing news and advice about digital tools and tech. "
                  }
                </label>
              </div>

              <div className="submit--btn__box">
                <button
                  className="btn light-btn"
                  name="form_submission"
                  onClick={handleSubmit}
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </form>
          </div>

          <div className="get-quote__contacts">
            <div className="bottom__contact">
              <div className="mail contact--group">
                <span className="content_title"> Contact us</span>
                <a className="color-body" href="mailto:">
                  hello@appealofinnovation.com
                </a>
                <div className="phone">
                  <a className="color-body" href="tel:+22894928848">
                    +228 79924479
                  </a>
                </div>
              </div>

              <div className="contact--group">
                <span className="content_title">Office</span>
                <br />
                <a className="office color-body">Adidoadin, Lomé Togo</a>
              </div>
              <div className="social">
                <span className="content_title">Social</span> <br />
                <div className="about--hero__social">
                  <a
                    className="social-svg__icon"
                    href="https://www.facebook.com/InnovativeAPIN/"
                    target="_blank"
                  >
                    <img src={icons.fbDark} alt="" />
                  </a>
                  <a
                    className="social-svg__icon"
                    href="https://www.linkedin.com/company/akoua-prod-in/"
                    target="_blank"
                  >
                    <img src={icons.inDark} alt="" />
                  </a>
                  <a
                    className="social-svg__icon"
                    href="https://instagram.com/innovativeapin?r=nametag"
                    target="_blank"
                  >
                    <img src={icons.itDark} alt="" />
                  </a>
                  <a
                    className="social-svg__icon"
                    href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg"
                    target="_blank"
                  >
                    <img src={icons.ytDark} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
}
