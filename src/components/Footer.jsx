import React from 'react'
import { icons } from '../service/icons'

export default function Footer() {
  return (
    <>
      <footer className="main--footer">
        <div className="footer-wrapper">
          <div className="section-wwrapper offset-canva">
            <div className="footer--brand__box">
              <img src={icons.lgLight} alt="" />
              <p>
                Start your innovative project today, we are available.
              </p>
            </div>

            <div className="footer-content">
              <div className="footer--intro">
                <h3>
                  We collaborate with ambitious brands and people
                </h3>
              </div>

              <div className="footer-items">
                <div className="footer-contact">
                  <span>Contact us</span>
                  <a target={"_blank"} href="mailto:">hello@appealofinnovation.com</a>
                  <a href="tel:+228 79924479">+228 79924479</a>
                </div>

                <div className="footer-nav">
                  <span>DISCOVER </span>
                  <ul>
                    <li><a href="/who-we-are">Who we are</a></li>
                    <li><a href="/what-we-do">What we do</a></li>
                  </ul>
                </div>

                <div className="footer--social">
                  <a className="social-svg__icon" target={"_blank"} href="https://www.facebook.com/InnovativeAPIN/">
                    <img src={icons.fbLight} alt="" />
                  </a>

                  <a className="social-svg__icon" target={"_blank"} href="https://www.linkedin.com/company/akoua-prod-in/">
                    <img src={icons.inLight} alt="" />
                  </a>

                  <a className="social-svg__icon" target={"_blank"} href="https://instagram.com/innovativeapin?r=nametag">
                    <img src={icons.itLight} alt="" />
                  </a>

                  <a className="social-svg__icon" target={"_blank"} href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg">
                    <img src={icons.ytLight} alt="" />
                  </a>
                </div>
              </div>
              <div className="footer-cta">
                <p className="default-paragraph white-p">
                  We are working on changing lives of today for a better future. You can advantages of your strengths and succeed your project with us
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="content--box">
              <p>@2022 AP'IN all right reserved</p>
            </div>

            <div className="footer--terms">
              <a href="">Terms & Conditions</a>
              <span className="separator">|</span>
              <a href="">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
