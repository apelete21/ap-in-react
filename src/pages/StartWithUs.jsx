import React from 'react'
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'

export default function StartWithUs() {
    return (
        <>
            <header class="get--quote__header">
                
                <MenuNav logoImage={icons.lgDark} linkView={"darklink"} />
                
                <MenuButtonDark />

                <div class="fluid-wrapper get-quote__hero ">

                    <div class="main-title offset-canva">
                        <h1 class="section--hero__title">
                            Tell us more<br />
                            about your business
                        </h1>
                        <div class="section--hero__paragraph">
                            Since september 2021, we have been working with companies in Africa, America and Euroope to make sure their projects are moving as they desire
                        </div>
                    </div>
                </div>
                
            </header>
            {/* <!--===========================
                END OF HOME HERO SECTION
        ===========================--> */}

            <div class="get--quote__form-wrapper offset-canva d-flex ">

                <div class="form">
                    <form class="get-quote--form">
                        <div class="form-input">
                            <span class="form--input__number">01</span>
                            <div class="input-group">
                                <label for="">What are you interest in</label>
                                <div class="select-wrapper">
                                    <select name="service" id="format">
                                        <option selected disabled>Choose*</option>
                                        <option value="Process improvment">Process improvement</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Hosting solution">Hosting solution</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Graphic design">Graphic design</option>
                                        <option value="Branding and packaging">Branding and packaging</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="form-input">
                            <span class="form--input__number">02</span>
                            <div class="input-group">
                                <label for="">How did you find out about us?</label>
                                <div class="select-wrapper">
                                    <select name="service" id="format">
                                        <option selected disabled>Choose*</option>
                                        <option value="Process improvment">Process improvement</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Hosting solution">Hosting solution</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Graphic design">Graphic design</option>
                                        <option value="Branding and packaging">Branding and packaging</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="form-input">
                            <span class="form--input__number">03</span>
                            <div class="input-group">
                                <label for="">What is your name</label>
                                <input type="text" name="name" id="" placeholder="John Do" />
                            </div>
                        </div>

                        <div class="form-input">
                            <span class="form--input__number">04</span>
                            <div class="input-group">
                                <label for="">What is your email</label>
                                <input type="text" name="email" id="" placeholder="john@doe.com" />
                            </div>
                        </div>

                        <div class="form-input">
                            <span class="form--input__number">05</span>
                            <div class="input-group">
                                <label for="">Where are you locate in?</label>
                                <input type="text" name="city" id="" placeholder="Your city" />
                            </div>
                        </div>



                        <div class="form-input">
                            <span class="form--input__number">06</span>
                            <div class="input-group">
                                <label for="">What is the name of your organisation?</label>
                                <input type="text" name="company_name" id="" placeholder="John Do Corp" />
                            </div>
                        </div>


                        <div class="form-input last-child">
                            <span class="form--input__number">07</span>
                            <div class="input-group">
                                <label for="">Tell us about your idea or company</label>
                                <textarea name="message">...</textarea>
                            </div>
                        </div>


                        <div class="news--consent">
                            <input class="news--consent__checkbox" type="checkbox" name="email_consent" value="true" />
                            <label for=""> I agree to receive occasional newsletters containing news and advice
                                about digital tools and tech.</label>
                        </div>

                        <div class="submit--btn__box">
                            <button class="btn light-btn" type="submit" name="form_submission">REQUEST A QUOTE</button>
                        </div>

                    </form>

                </div>

                <div class="get-quote__contacts">


                    <div class="bottom__contact">
                        <div class="mail contact--group">
                            <span class="content_title"> Contact us</span>
                            <a href="mailto:">hello@appealofinnovation.com</a>
                            <div class="phone">
                                <a href="tel:+22894928848">+228 79924479</a>
                            </div>
                        </div>

                        <div class="contact--group">
                            <span class="content_title">Office</span>
                            <br />
                            <div class="office">
                                Adidoadin, Lomé Togo
                            </div>
                        </div>
                        <div class="social">
                            <span class="content_title">Social</span> <br />
                            <div class="about--hero__social">
                                <a class="social-svg__icon" href="https://www.facebook.com/InnovativeAPIN/" target="_blank">
                                    <img src={icons.fbDark} alt="" />
                                </a>
                                <a class="social-svg__icon" href="https://www.linkedin.com/company/akoua-prod-in/" target="_blank">
                                    <img src={icons.inDark} alt="" />
                                </a>
                                <a class="social-svg__icon" href="https://instagram.com/innovativeapin?r=nametag" target="_blank">
                                    <img src={icons.itDark} alt="" />
                                </a>
                                <a class="social-svg__icon" href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg" target="_blank">
                                    <img src={icons.ytDark} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
