import React from 'react'

export default function Menu() {
  return (
    <>
      <div class="loader">
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
        <div class="loader__tile"></div>
      </div>


      <nav id="main--nav" class="main--navigation__wrapper">
        <div class="navbar">
          <div class="logo">
            <a class="logo logo--white" href="index.php">
              <img src="assets/media/images/logo/logo-light.png" alt="" />
            </a>
          </div>

          <div class="get--start">
            <a class="btn default-outline light-outline" href="start-with-us.php">
              start with us
            </a>
          </div>
        </div>

        <div class="close-nav--toggler-container light-item">
          <div class="nav--toggler" onclick="closeNav()">
            <span class="nav--toggler__bar"></span>
            <span class="nav--toggler__bar"></span>
          </div>
        </div>


        <div class="full--width__nav d-flex">
          <div class="nav--links__wrapper">
            <ul>
              <li><span class="sup">01 </span><a class="nav--menu__link <?= active('home'); ?>" href="home.php">Home</a></li>
              <li><span class="sup">03 </span><a class="nav--menu__link <?= active('who-we-are'); ?>" href="who-we-are.php">Who we are</a>
              </li>
              <li><span class="sup">02 </span><a class="nav--menu__link <?= active('what-we-do'); ?>" href="what-we-do.php">How we help</a>
              </li>
              <li><span class="sup">04 </span><a class="nav--menu__link <?= active('start-with-us'); ?>" href="start-with-us.php">Get a
                quote</a></li>
              <li><span class="sup">05 </span><a class="nav--menu__link <?= active('get-in-touch'); ?>" href="get-in-touch.php">Get in touch</a>
              </li>
            </ul>
          </div>

          <div class="menu--left_container">
            <div class="sub--menu__wrapper">
              <ul>
                <li><a class="nav--menu__link" href="#">Join the team</a></li>
                <li><a class="nav--menu__link" href="#">Newsroom</a></li>
                <li><a class="nav--menu__link" href="#">our newsletters</a></li>
              </ul>
            </div>


            <div class="menu--footer">
              <div class="main--nav bottom__contact">
                <div class="mail">
                  <span> Email us</span>
                  <a href="mailto:">hello@appealofinnovation.com</a>
                </div>

                <div class="phone">
                  <a href="tel:+22894928848">00228 79924479</a>
                </div>

                <div class="social">
                  <div class="about--hero__social">
                    <a class="social-svg__icon" href="https://www.facebook.com/InnovativeAPIN/" target="_blank">
                      <img src="assets/media/images/icons/facebook-light.svg" alt="" />
                    </a>
                    <a class="social-svg__icon" href="https://www.linkedin.com/company/akoua-prod-in/" target="_blank">
                      <img src="assets/media/images/icons/linkedin-light.svg" alt="" />
                    </a>
                    <a class="social-svg__icon" href="https://instagram.com/innovativeapin?r=nametag" target="_blank">
                      <img src="assets/media/images/icons/instagram-light.svg" alt="" />
                    </a>
                    <a class="social-svg__icon" href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg" target="_blank">
                      <img src="assets/media/images/icons/youtube-light.svg" alt="" />
                    </a>
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
