import React from 'react'
import { MenuButtonLight } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'
import { Link } from 'react-router-dom'
import JobBanner from "../assets/media/images/banners/jobbanner.png"

export default function Newsletter() {

    const backToPrevious = (e) => {
        e.preventDefault()
        window.history.back()
    }

    return (
        <div className='newsletter_bottom_image vh-100' style={{
            "--bgStyle": `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${JobBanner})`
        }}>
            <section className="contact--wrapper">
                <header>

                    <MenuNav logoImage={icons.lgLight} linkView={true} />

                    <MenuButtonLight />
                    
                </header>

                <div className="newsletter_wrapper bg-dark">

                    <div className="offset-canva">
                        <div className="newsletter_back-btn_container">
                            <Link href={"back to previous"} onClick={backToPrevious} className="newsletter-back_btn d-flex">
                                <img src={icons.arGray} alt="" />
                                <span>Go back</span>
                            </Link>
                        </div>
                        <div className="newsletter_page_title">
                            <h1>
                                Stay tuned of our latest news and actualities
                            </h1>
                        </div>
                        <div className="newsletter_form__container">
                            <form action="" className="newsletter_form d-flex">
                                <div className="newsletter-input_container">
                                    <input type="email" className="newsletter_form_input" placeholder="Enter your email address" required />
                                </div>
                                <div className="newsletter_submit_container">
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
