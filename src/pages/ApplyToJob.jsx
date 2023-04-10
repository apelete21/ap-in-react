import React, { useEffect, useRef, useState } from "react";
import { MenuButtonDark } from "../components/MenuButton";
import MenuNav from "../components/MenuNav";
import { icons } from "../service/icons";
import Motion from "../components/Motion/Motion";
import Confirm from "../components/confirmModal/Confirm";
import { jobApplication } from "../api/requests/applications";
import { useParams } from "react-router-dom";
import { getOneJob } from "../api/requests/jobsRequests";

export default function ApplyToJob() {
  const [url, setUrl] = React.useState("");
  const [nameerror, setNameerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [locationerror, setLocationerror] = useState("");
  const [profileerror, setProfileerror] = useState("");
  const [motivationerror, setMotivationerror] = useState("");
  const [fileerror, setFileerror] = useState("");

  const { title } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const getJob = async () => {
      const response = await getOneJob(title);
      if (response.ok) {
        setJob(response?.data);
        console.log(response);
      } else {
        setError("Please reload the page!");
      }
    };
    getJob();
  }, [title]);

  const fullname = useRef("");
  const email = useRef("");
  const phone_number = useRef("");
  const location = useRef("");
  const profile = useRef("");
  const motivation = useRef("");
  const hiddenFileInput = useRef(null);

  const [success, setSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname.current?.value || fullname.current?.value === "") {
      return setNameerror("invalid format");
    } else {
      setNameerror("");
    }
    if (!email.current?.value || email.current?.value === "") {
      return setEmailerror("invalid format");
    } else {
      setEmailerror("");
    }
    if (!phone_number.current?.value || phone_number.current?.value === "") {
      return setPhoneerror("invalid format");
    } else {
      setPhoneerror("");
    }
    if (!location.current?.value || location.current?.value === "") {
      return setLocationerror("invalid format");
    } else {
      setLocationerror("");
    }
    if (!profile.current?.value || profile.current?.value === "") {
      return setProfileerror("invalid format");
    } else {
      setProfileerror("");
    }
    if (!motivation.current?.value || motivation.current?.value === "") {
      return setMotivationerror("invalid format");
    } else {
      setMotivationerror("");
    }
    if (!hiddenFileInput.current.files) {
      return setFileerror("invalid format");
    } else {
      setFileerror("");
    }

    let bodyContent = new FormData();
    bodyContent.append("fullname", fullname.current.value);
    bodyContent.append("email", email.current.value);
    bodyContent.append("phone_number", phone_number.current.value);
    bodyContent.append("location", location.current.value);
    bodyContent.append("profile", profile.current.value);
    bodyContent.append("motivation", motivation.current.value);
    bodyContent.append("jobId", job._id);
    bodyContent.append("file", hiddenFileInput.current.files[0]);

    const response = await jobApplication(bodyContent);
    if (!response?.ok) {
      window.alert(response.data.message);
    } else {
      setSuccess(true);
    }
  };

  function exitModal() {
    setSuccess(false);
  }

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleFileBtnClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFile = (event) => {
    const fileUploaded = event.target.files[0];
    setUrl(event.target.files[0].name);
    console.log(fileUploaded);
  };

  const style = {
    color: "red",
  };

  return (
    <>
      {success && (
        <>
          <Confirm handleExit={exitModal} />
        </>
      )}
      <Motion>
        <header>
          <div class="full-height fluid-wrapper main-navigation job-application__bg">
            <MenuNav logoImage={icons.lgDark} linkView="lightlink" />
            <div class="offset-canva job-main-title">
              <h1 class="section--hero__title php_job">
                Apply for : {job?.title}
              </h1>

              <div class="job_detail__banner">
                <div class="job_level_block">
                  <div class="level_title">Seniority Level</div>
                  <div class="level_year">{job?.level}</div>
                </div>
                <div class="job_time_block">
                  <div class="level_title">Employment type</div>
                  <div class="level_year">{job?.time}</div>
                </div>

                <div class="job_validity_block">
                  <div class="level_title">Validity</div>
                  <div class="level_year">{job?.validity}</div>
                </div>
              </div>
            </div>
          </div>
          <MenuButtonDark />
        </header>

        <section class="application-intro offset-canva">
          <div class="form">
            <form class="application--form" onSubmit={handleSubmit}>
              <div class="form-input application-input">
                <span class="form--input__number">01</span>
                <div class="input-group">
                  <label for="">Your full name *</label>
                  <span style={style}> {nameerror} </span>
                  <input
                    type="text"
                    id=""
                    ref={fullname}
                    placeholder="John Do"
                  />
                </div>
              </div>

              <div class="form-input application-input">
                <span class="form--input__number">02</span>
                <div class="input-group">
                  <label for="">What's your email? *</label>
                  <span style={style}> {emailerror} </span>
                  <input
                    type="email"
                    id=""
                    ref={email}
                    placeholder="john@doe.com"
                  />
                </div>
              </div>

              <div class="form-input application-input">
                <span class="form--input__number">03</span>
                <div class="input-group">
                  <label for="">What is your phone number? *</label>
                  <span style={style}> {phoneerror} </span>
                  <input
                    type="tel"
                    min={90000000}
                    id=""
                    ref={phone_number}
                    placeholder="+228 90000000"
                  />
                </div>
              </div>

              <div class="form-input application-input">
                <span class="form--input__number">04</span>
                <div class="input-group">
                  <label for="">What is your location? *</label>
                  <span style={style}> {locationerror} </span>
                  <input
                    type="address"
                    id=""
                    placeholder="Lomé"
                    ref={location}
                  />
                </div>
              </div>

              <div class="full-with_form form-input application-input">
                <span style={style}> {fileerror} </span>
                <div class="input-group">
                  <div class="title">
                    <span class="form--input__number">05</span>
                    <label htmlFor="">Upload your CV *</label>
                  </div>
                  <div
                    class={
                      dragActive
                        ? "upload-files-container update-opacity"
                        : "upload-files-container"
                    }
                    onClick={handleFileBtnClick}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div class="drag-file-area">
                      <span class="material-icons-outlined upload-icon">
                        {" "}
                        file_upload{" "}
                      </span>
                      <h3 class="dynamic-message">
                        Drag & drop any file here or browse file from device
                      </h3>
                      <input
                        type="file"
                        className="hidden-input-file"
                        ref={hiddenFileInput}
                        onChange={handleFile}
                        accept="*.pdf"
                        required
                      />
                    </div>
                    <span className="file-name-upload">-{url}-</span>
                  </div>
                </div>
              </div>

              <div class="form-input application-input">
                <span class="form--input__number">06</span>
                <div class="input-group">
                  <label for="">
                    Tell us more about your profil and your uniqueness? *
                  </label>
                  <span style={style}> {profileerror} </span>
                  <textarea
                    name="profile"
                    defaultValue={"..."}
                    ref={profile}
                  ></textarea>
                </div>
              </div>

              <div class="form-input application-input last-of-type">
                <span class="form--input__number">07</span>
                <div class="input-group">
                  <label for="">
                    What drives you for this position in this company? *
                  </label>
                  <span style={style}> {motivationerror} </span>
                  <textarea
                    name="motivation"
                    ref={motivation}
                    defaultValue={"..."}
                  ></textarea>
                </div>
              </div>

              <div class="submit--btn__box">
                <button
                  class="btn default-btn"
                  // type="submit"
                  name="form_submission"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </form>
          </div>
        </section>
      </Motion>
    </>
  );
}
