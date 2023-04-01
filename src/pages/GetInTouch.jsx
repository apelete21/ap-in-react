import React from 'react'
import { MenuButtonLight } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'
import Motion from '../components/Motion/Motion'

export default function GetInTouch() {
    return (
      <Motion>
        <section className="bg-dark contact">
          <section className="contact--wrapper">
            <header>
              <MenuNav logoImage={icons.lgLight} linkView={true} />

              <MenuButtonLight />
            </header>
            <div className="contact--content">
              <div className="contact--info">
                <div className="contact--info__intro">
                  <h4>
                    Let's start something
                    <br />
                    interessting together
                  </h4>
                </div>
              </div>
              <div className="contact--bg offset-canva">
                <div className="contact--footer__mail">
                  <span> Feel free to mail us</span>
                  <a
                    className="contact--page__mail"
                    href="mailto:hello@appealofinnovation.com"
                  >
                    hello@appealofinnovation.com{" "}
                    <span className="arrow">
                      {" "}
                      <img src={icons.mailAr} alt="" />
                    </span>
                  </a>
                </div>
                <div className="contact--details">
                  <div className="office">
                    <span>Office:</span>
                    <p>Adzidoadin, Lomé TOGO</p>
                  </div>

                  <div className="phone">
                    <span>Phone number:</span>
                    <p>00228 79924479</p>
                  </div>

                  <div className="social">
                    <span>Office:</span>
                    <div className="contact__social">
                      <a
                        className="social-svg__icon"
                        href="https://www.facebook.com/InnovativeAPIN/"
                        target="_blank"
                      >
                        <img src={icons.fbLight} alt="" />
                      </a>
                      <a
                        className="social-svg__icon"
                        href="https://www.linkedin.com/company/akoua-prod-in/"
                        target="_blank"
                      >
                        <img src={icons.inLight} alt="" />
                      </a>
                      <a
                        className="social-svg__icon"
                        href="https://instagram.com/innovativeapin?r=nametag"
                        target="_blank"
                      >
                        <img src={icons.itLight} alt="" />
                      </a>
                      <a
                        className="social-svg__icon"
                        href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg"
                        target="_blank"
                      >
                        <img src={icons.ytLight} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Motion>
    );
}
