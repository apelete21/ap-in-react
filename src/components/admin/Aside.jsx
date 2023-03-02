import React from 'react'

export default function Aside() {
    return (
        <>
            <div className="aside">

                <div className="logo_box">
                    <img className="logo" src="../assets/media/images/logo/logo-dark.png" alt="" />
                    <p className="tagline">Appeal of innovation</p>
                </div>

                <div className="onborard_card">
                    <h3>Welcom to your administration board</h3>
                    <p>Visualize an manage your website here</p>
                    <img src="../assets/media/images/admin/welcome_illustration.png" alt="" />
                </div>

                <div className="latest_post">
                    <h1>Latest posts</h1>
                    <div className="post_box">
                        <div className="post_item">
                            <img className="thumbnail" src="../assets/media/images/post/bigstock.jpg" alt="" />
                            <div className="post_description">
                                <p className="post_title">
                                    beautiful places
                                    <span className="post_date"> 2 days ago</span>
                                </p>
                            </div>
                        </div>

                        <div className="post_item">
                            <img className="thumbnail" src="../assets/media/images/post/bigstock.jpg" alt="" />
                            <div className="post_description">
                                <p className="post_title">
                                    beautiful places
                                    <span className="post_date"> 2 days ago</span>
                                </p>
                            </div>
                        </div>

                        <div className="post_item">
                            <img className="thumbnail" src="../assets/media/images/post/bigstock.jpg" alt="" />
                            <div className="post_description">
                                <p className="post_title">
                                    beautiful places
                                    <span className="post_date"> 2 days ago</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logout">
                    <a href=""><svg width="23" height="22" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.416 11.7497V1.83301H1.41602V30.1663H18.416V20.2497M31.166 15.9997H7.08268M24.0827 8.91634L31.166 15.9997L24.0827 23.083" stroke="#BCBCBC" strokeWidth="2" />
                    </svg> Logout</a>
                </div>

            </div>
        </>
    )
}
