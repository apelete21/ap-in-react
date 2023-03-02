import React from 'react'
import { MenuButtonDark } from '../components/MenuButton'
import MenuNav from '../components/MenuNav'
import { icons } from '../service/icons'

export default function ApplyToJob() {
    return (
        <>
            <header>
                <div class="full-height fluid-wrapper main-navigation job-application__bg">
                    <MenuNav logoImage={icons.lgDark} linkView="lightlink" />
                    <div class="offset-canva job-main-title">
                        <h1 class="section--hero__title php_job">
                            Application Form
                        </h1>

                        <div class="job_detail__banner">

                            <div class="job_level_block">
                                <div class="level_title">
                                    Seniority Level
                                </div>
                                <div class="level_year">
                                    Entry Level
                                </div>
                            </div>
                            <div class="job_time_block">
                                <div class="level_title">
                                    Employment type
                                </div>
                                <div class="level_year">
                                    Full-time
                                </div>
                            </div>

                            <div class="job_validity_block">
                                <div class="level_title">
                                    Validity
                                </div>
                                <div class="level_year">
                                    Jan 22 2022
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <MenuButtonDark />

            </header>

            <section class="application-intro offset-canva">
                <div class="form">
                    <form class="application--form">

                        <div class="form-input application-input">
                            <span class="form--input__number">01</span>
                            <div class="input-group">
                                <label for="">Your full name *</label>
                                <input type="text" id="" placeholder="John Do" />
                            </div>
                        </div>

                        <div class="form-input application-input">
                            <span class="form--input__number">02</span>
                            <div class="input-group">
                                <label for="">What's your email? *</label>
                                <input type="email" id="" placeholder="john@doe.com" />
                            </div>
                        </div>


                        <div class="form-input application-input">
                            <span class="form--input__number">03</span>
                            <div class="input-group">
                                <label for="">What is your phone number? *</label>
                                <input type="tel" id="" placeholder="+228 90000000" />
                            </div>
                        </div>


                        <div class="form-input application-input">
                            <span class="form--input__number">04</span>
                            <div class="input-group">
                                <label for="">What is your location? *</label>
                                <input type="address" id="" placeholder="Lomé" />
                            </div>
                        </div>


                        <div class="full-with_form form-input application-input">

                            <div class="input-group">
                                <div class="title">
                                    <span class="form--input__number">05</span>
                                    <label for="">Upload your CV *</label>
                                </div>
                                <div class="upload-files-container">
                                    <div class="drag-file-area">

                                        <span class="dynamic-message"> <svg width="71" height="49" viewBox="0 0 71 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M57.2437 18.7017C56.25 13.6658 53.5387 9.13108 49.573 5.87214C45.6072 2.6132 40.633 0.832214 35.5 0.833375C26.9504 0.833375 19.525 5.68504 15.8271 12.785C11.479 13.2549 7.45798 15.315 4.53657 18.5695C1.61516 21.824 -0.000507951 26.0433 1.19791e-07 30.4167C1.19791e-07 40.2088 7.95792 48.1667 17.75 48.1667H56.2083C64.3733 48.1667 71 41.54 71 33.375C71 25.565 64.9354 19.2342 57.2437 18.7017ZM56.2083 42.25H17.75C11.2121 42.25 5.91667 36.9546 5.91667 30.4167C5.91667 24.3521 10.4429 19.2934 16.4483 18.6721L19.6138 18.3467L21.0929 15.5363C22.4534 12.8879 24.5183 10.6663 27.0602 9.1161C29.6022 7.56587 32.5226 6.74714 35.5 6.75004C43.2508 6.75004 49.9367 12.2525 51.4454 19.8555L52.3329 24.293L56.8592 24.6184C59.0831 24.7679 61.1677 25.7543 62.6936 27.379C64.2196 29.0038 65.0734 31.1461 65.0833 33.375C65.0833 38.2563 61.0896 42.25 56.2083 42.25ZM23.6667 27.4584H31.2104V36.3334H39.7896V27.4584H47.3333L35.5 15.625L23.6667 27.4584Z" fill="#BCBCBC" />
                                        </svg> </span>
                                        <label class="label">Drag & drop your file here or <span class="browse-files-text">click here </span>to upload</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-input application-input">
                            <span class="form--input__number">06</span>
                            <div class="input-group">
                                <label for="">Tell us more about your profil and your uniqueness? *</label>
                                <textarea name="message">...</textarea>
                            </div>
                        </div>

                        <div class="form-input application-input last-of-type">
                            <span class="form--input__number">06</span>
                            <div class="input-group">
                                <label for="">What drives you for this position in this company? *</label>
                                <textarea name="message">...</textarea>
                            </div>
                        </div>

                        <div class="submit--btn__box">
                            <button class="btn default-btn" type="submit" name="form_submission">REQUEST A QUOTE</button>
                        </div>

                    </form>

                </div>
            </section>
        </>
    )
}
