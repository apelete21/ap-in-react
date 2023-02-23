import React from 'react'
import { icons } from '../../service/icons'

export default function Footer() {
  return (
    <>
      <footer class="main--footer">
        <div class="footer-wrapper">

          <div class="section-wwrapper offset-canva">
            <div class="footer--brand__box">
              <img src={icons.lgLight} alt="" />
              <p>
                Start your innovative project today, we are available.
              </p>
            </div>

            <div class="footer-content">
              <div class="footer--intro">
                <h3>
                  We collaborate with ambitious brands and people
                </h3>
              </div>

              <div class="footer-items">
                <div class="footer-contact">
                  <span>Contact us</span>
                  <a href="mailto:">hello@appealofinnovation.com</a>
                  <a href="tel:+">+228 79924479</a>
                </div>

                <div class="footer-nav">
                  <span>DISCOVER </span>
                  <ul>
                    <li><a href="who-we-are.php">Who we are</a></li>
                    <li><a href="what-we-do.php">What we do</a></li>
                  </ul>
                </div>

                <div class="footer--social">
                  <a class="social-svg__icon" onclick="window.open ('https://www.facebook.com/InnovativeAPIN/', ''); return false" href="javascript:void(0);">
                    <img src={icons.fbLight} alt="" />
                  </a>

                  <a class="social-svg__icon" onclick="window.open ('https://www.linkedin.com/company/akoua-prod-in/', ''); return false" href="javascript:void(0);">
                    <img src={icons.inLight} alt="" />
                  </a>

                  <a class="social-svg__icon" onclick="window.open ('https://instagram.com/innovativeapin?r=nametag', ''); return false" href="javascript:void(0);">
                    <img src={icons.itLight} alt="" />
                  </a>

                  <a class="social-svg__icon" onclick="window.open ('https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg', ''); return false" href="javascript:void(0);">
                    <img src={icons.ytLight} alt="" />
                  </a>
                </div>
              </div>
              <div class="footer-cta">
                <p class="default-paragraph white-p">
                  We are working on changing lives of today for a better future. You can advantages of your strengths and succeed your project with us
                </p>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="content--box">
              <p>@2022 AP'IN all right reserved</p>
            </div>

            <div class="footer--terms">
              <a href="">Terms & Conditions</a>
              <span class="separator">|</span>
              <a href="">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
