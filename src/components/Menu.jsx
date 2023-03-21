import React from 'react'
import { icons } from '../service/icons'
import { CloseMenuButton } from './MenuButton'
import MenuNav from './MenuNav'
import NavLink from './NavLink'

export default function Menu() {
  return (
    <>
      <div className="loader">
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
      </div>


      <nav id="main--nav" className="main--navigation__wrapper">
        
        <MenuNav logoImage={icons.lgLight} linkView='lightlink' />

        <CloseMenuButton />

        <div className="full--width__nav d-flex">
          <div className="nav--links__wrapper">
            <ul>
              <li><span className="sup">01 </span><NavLink className="nav--menu__link" href="/">Home</NavLink></li>
              <li><span className="sup">03 </span><NavLink className="nav--menu__link" href="/who-we-are">Who we are</NavLink>
              </li>
              <li><span className="sup">02 </span><NavLink className="nav--menu__link" href="/what-we-do">How we help</NavLink>
              </li>
              <li><span className="sup">04 </span><NavLink className="nav--menu__link" href="/start-with-us">Get a
                quote</NavLink></li>
              <li><span className="sup">05 </span><NavLink className="nav--menu__link" href="/get-in-touch">Get in touch</NavLink>
              </li>
            </ul>
          </div>

          <div className="menu--left_container">
            <div className="sub--menu__wrapper">
              <ul>
                <li><NavLink className="nav--menu__link" href="/jobs">Join the team</NavLink></li>
                <li><NavLink className="nav--menu__link" href="/news">Newsroom</NavLink></li>
                <li><NavLink className="nav--menu__link" href="/subscribe">our newsletters</NavLink></li>
              </ul>
            </div>


            <div className="menu--footer">
              <div className="main--nav bottom__contact">
                <div className="mail">
                  <span> Email us</span>
                  <a href="mailto:">hello@appealofinnovation.com</a>
                </div>

                <div className="phone">
                  <a href="tel:+22894928848">00228 79924479</a>
                </div>

                <div className="social">
                  <div className="about--hero__social">
                    <NavLink className="social-svg__icon" href="https://www.facebook.com/InnovativeAPIN/" target="_blank">
                      <img src={icons.fbLight} alt="" />
                    </NavLink>
                    <NavLink className="social-svg__icon" href="https://www.linkedin.com/company/akoua-prod-in/" target="_blank">
                      <img src={icons.inLight} alt="" />
                    </NavLink>
                    <NavLink className="social-svg__icon" href="https://instagram.com/innovativeapin?r=nametag" target="_blank">
                      <img src={icons.itLight} alt="" />
                    </NavLink>
                    <NavLink className="social-svg__icon" href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg" target="_blank">
                      <img src={icons.ytLight} alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </nav>
    </>
  )
}
