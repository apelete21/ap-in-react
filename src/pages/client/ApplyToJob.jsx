import React from 'react'
import { MenuButtonDark } from '../../components/client/MenuButton'
import MenuNav from '../../components/client/MenuNav'
import { icons } from '../../service/icons'

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
                                <input type="text" id="" placeholder="john@doe.com" />
                            </div>
                        </div>


                        <div class="form-input application-input">
                            <span class="form--input__number">03</span>
                            <div class="input-group">
                                <label for="">What is your phone number? *</label>
                                <input type="text" id="" placeholder="+228 90000000" />
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

                                        <span class="dynamic-message"> Drag & drop any file here </span>
                                        <label class="label"> or <span class="browse-files"> <input type="file" class="default-file-input" /> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-input application-input last-of-type">
                            <span class="form--input__number">06</span>
                            <div class="input-group">
                                <label for="">Your motivation *</label>
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
