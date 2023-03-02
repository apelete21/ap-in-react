import React from 'react'

export default function AddNewJob() {
    return (
        <>
            <div className="add-new-job">

                <div className="add-new-job-title">
                    <h1>
                        Add a new job
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis. ipsum dolor.
                    </p>
                </div>

                <div className="add-new-job-form">
                    <form action="">
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Job title
                            </p>
                            <input type="text" placeholder="Job title" />
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Select a category
                            </p>
                            <select name="" id="">
                                <option value="" default>Select a category</option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Employment type
                            </p>
                            <select name="" id="">
                                <option value="" default>Select a type</option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Seniority Level
                            </p>
                            <select name="" id="">
                                <option value="" default>Select a type</option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Validity
                            </p>
                            <select name="" id="">
                                <option value="" default>Select a type</option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Job description
                            </p>
                            <div className="text-edition-section">
                                <div>
                                    <select name="" id="">
                                        <option value="" default>Paragraph</option>
                                    </select>
                                    <div className="text-style">
                                        <span>
                                            <img src="../assets/media/images/icons/format-bold.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/italic-line.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/underline.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-alignment">
                                        <span>
                                            <img src="../assets/media/images/icons/format-align-left.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/format-align-center.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/format-align-right.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-list">
                                        <span>
                                            <img src="../assets/media/images/icons/format-list-bulleted.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/format-list-numbered.svg" alt="" />
                                        </span>
                                        <span>
                                            <img src="../assets/media/images/icons/link-variant.svg" alt="" />
                                        </span>
                                    </div>

                                </div>
                                <div>
                                    <span>
                                        <img src="../assets/media/images/icons/undo.svg" alt="" />
                                    </span>
                                    <span>
                                        <img src="../assets/media/images/icons/forward.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                            <textarea></textarea>
                        </div>
                    </form>
                </div>

                <div className="add-job-btn">
                    <a className="btn btn_secondary">
                        <span>Publish</span>
                    </a>
                </div>

            </div>


        </>
    )
}
