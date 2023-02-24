import React from 'react'
import { MenuButtonDark, MenuButtonLight } from '../../components/client/MenuButton'
import MenuNav from '../../components/client/MenuNav'
import Logo from '../../components/client/NavComponents/Logo'
import { icons } from '../../service/icons'

export default function Newsletter() {

    const backToPrevious = (e) => {
        e.preventDefault()
        history.back()
    }

    return (
        <div class='newsletter_bottom_image vh-100'>
            <section class="contact--wrapper">
                <header>

                    <MenuNav logoImage={icons.lgLight} linkView={true} />

                    <MenuButtonLight />
                    
                </header>

                <div class="newsletter_wrapper bg-dark">

                    <div class="offset-canva">
                        <div class="newsletter_back-btn_container">
                            <a href={"back to previous"} onClick={backToPrevious} class="newsletter-back_btn d-flex">
                                <img src={icons.arGray} alt="" />
                                <span>Go back</span>
                            </a>
                        </div>
                        <div class="newsletter_page_title">
                            <h1>
                                Stay tuned of our latest news and actualities
                            </h1>
                        </div>
                        <div class="newsletter_form__container">
                            <form action="" class="newsletter_form d-flex">
                                <div class="newsletter-input_container">
                                    <input type="email" class="newsletter_form_input" placeholder="Enter your email address" required />
                                </div>
                                <div class="newsletter_submit_container">
                                    <button type="submit">
                                        <img src={icons.alGray} alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    )
}
