import React from 'react'

export default function Login() {
    return (
        <>
            <div class="body_wrapper login_page">
                <div class="img_container">

                </div>
                <div class="main_content">
                    <div class="logo_box">
                        <img class="logo" src="../assets/media/images/logo/logo-dark.png" alt="" />
                    </div>
                    <div class="login_form_container">
                        <div class="form_intro">
                            <h1>Login</h1>
                            <p>Enter your credentials to access your administration dashboard</p>
                        </div>
                        <form action="">
                            <div class="input-job-element">
                                <input type="text" placeholder="Identifer" />
                            </div>

                            <div class="input-job-element">
                                <input type="text" placeholder="Password" />
                            </div>

                            <input class="btn btn_secondary  submit_btn" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
