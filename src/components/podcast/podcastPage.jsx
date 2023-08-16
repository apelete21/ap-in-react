import React from "react";
import { Helmet } from "react-helmet";
import MenuNav from "../MenuNav";
import { icons } from "../../service/icons";
import { MenuButtonLight } from "../MenuButton";
import { articleByCtg, audioUrl, imgUrl } from "../../api/requests/articles";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const table = [1,2,3]

export default function PodCastPage({ props }) {
  const seekDuration = useRef();
  const audioFileRef = useRef();
  const volumeRef = useRef();
  const [control, setControl] = useState(true);
  const [duration, setDuration] = useState("00:00");
  const [volumStyle, setVolumStyle] = useState(100);
  const [time, setTime] = useState("00:00");
  const [timePlayed, setTimePlayed] = useState();
  const [related, setRelated] = useState([])
  const [loadingrltd, setLoadingrltd] = useState(true)

  function time_convert(value) {
    const num = value ? value?.toString()?.split(".")[0] : null;
    const min = Math.floor(num / 60);
    const secs = num % 60;
    if (isNaN(min) && isNaN(secs)) {
      return `00:00`;
    } else return `${min}:${secs}`;
  }

  useEffect(()=>{
    (async()=>{
      const {data, ok} = await articleByCtg(props?.category)
      if (ok) {
        setRelated(data?.related)
      }
      setLoadingrltd(false)
    })()
  }, [loadingrltd])

  useEffect(() => {
    control ? audioFileRef?.current?.pause() : audioFileRef.current?.play();
  }, [control]);

  const playOrPause = () => {
    setControl(!control);
  };

  const onPlaying = () => {
    const duration = audioFileRef.current.duration;
    const ct = audioFileRef.current.currentTime;
    setTime(time_convert(ct));
    setDuration(time_convert(duration));
    setTimePlayed((ct * 100) / duration);
  };

  const seekerEvt = (e) => {
    let width = seekDuration.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let timeDuration = audioFileRef.current.duration;

    const divProgress = Math.floor((offset / width) * 100);
    audioFileRef.current.currentTime = Math.floor(
      (divProgress / 100) * timeDuration
    );
  };

  const volumeModifier = (e) => {
    let width = volumeRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const progress = Math.floor((offset / width) * 100);
    setVolumStyle(progress);
    audioFileRef.current.volume = progress / 100;

    console.log({ progress, volume: progress / 100 });
  };

  return (
    <>
      <Helmet>
        <title>{`${props?.title}`} | Podcasts</title>
      </Helmet>
      <section class="bg-dark">
        <header>
          <MenuNav logoImage={icons.lgLight} />
          <MenuButtonLight />
        </header>

        <div class="japan-news_wrapper">
          <div class="offset-canva">
            <div class="news_media d-flex">
              <div class="news_details_section">
                <div class="news__details__title">
                  <h2>{props?.title}</h2>
                </div>
                <div class="news-details__intro">
                  <p>{props?.description}</p>
                </div>
                <div class="news-details_author d-flex">
                  <div class="author_profile">
                    <img src={props?.author?.profile ? imgUrl + "/" + props?.author?.profile : icons.prIcon} alt="News author profile" />
                  </div>
                  <div class="author__name">{props?.author?.fullName}</div>
                </div>
              </div>

              <div class="media_links_section">
                <div class="media_open_with">
                  <a href="">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25.5597"
                        cy="25.5597"
                        r="25.0597"
                        stroke="white"
                      />
                      <path
                        d="M26 15.9902C13.2236 15.9902 13 17.1264 13 26.0002C13 34.874 13.2236 36.0102 26 36.0102C38.7764 36.0102 39 34.874 39 26.0002C39 17.1264 38.7764 15.9902 26 15.9902ZM30.1665 26.4344L24.3295 29.1592C23.8186 29.3958 23.4 29.1306 23.4 28.5664V23.434C23.4 22.8711 23.8186 22.6046 24.3295 22.8412L30.1665 25.566C30.6774 25.8052 30.6774 26.1952 30.1665 26.4344Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div class="media_open_with">
                  <a href="">
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_43_2366)">
                        <path
                          d="M25.5244 0.398438C20.5598 0.398437 15.7067 1.87062 11.5787 4.62881C7.45081 7.38701 4.23348 11.3073 2.33361 15.894C0.433728 20.4808 -0.0633669 25.5278 0.905182 30.3971C1.87373 35.2663 4.26442 39.739 7.77494 43.2495C11.2855 46.76 15.7581 49.1507 20.6274 50.1192C25.4966 51.0878 30.5437 50.5907 35.1304 48.6908C39.7171 46.7909 43.6374 43.5736 46.3956 39.4457C49.1538 35.3177 50.626 30.4646 50.626 25.5C50.6195 18.8446 47.9728 12.4638 43.2667 7.75771C38.5607 3.05167 32.1798 0.404953 25.5244 0.398438ZM25.5244 47.6484C21.1439 47.6484 16.8617 46.3495 13.2194 43.9157C9.57712 41.482 6.7383 38.0229 5.06194 33.9758C3.38557 29.9287 2.94696 25.4754 3.80156 21.1791C4.65617 16.8827 6.7656 12.9362 9.86311 9.83869C12.9606 6.74117 16.9071 4.63174 21.2035 3.77714C25.4999 2.92254 29.9532 3.36115 34.0003 5.03751C38.0474 6.71387 41.5065 9.5527 43.9402 13.195C46.3739 16.8373 47.6729 21.1195 47.6729 25.5C47.6663 31.3721 45.3308 37.0019 41.1785 41.1541C37.0263 45.3063 31.3966 47.6419 25.5244 47.6484ZM39.4041 21.341C39.2206 21.6862 38.9096 21.9463 38.5374 22.0658C38.1651 22.1852 37.7609 22.1548 37.4107 21.9809C33.7253 20.0894 29.6423 19.1028 25.4998 19.1028C21.3573 19.1028 17.2743 20.0894 13.5889 21.9809C13.3786 22.0986 13.1407 22.1581 12.8998 22.1531C12.5638 22.1579 12.2362 22.048 11.9711 21.8414C11.706 21.6348 11.5193 21.344 11.4419 21.017C11.3644 20.69 11.4008 20.3463 11.5451 20.0428C11.6894 19.7393 11.9329 19.4941 12.2354 19.3477C16.349 17.2435 20.9038 16.147 25.5244 16.1484C30.1304 16.1377 34.6714 17.235 38.7643 19.3477C38.9375 19.4361 39.0916 19.558 39.2176 19.7062C39.3436 19.8544 39.4391 20.0261 39.4985 20.2113C39.558 20.3966 39.5803 20.5917 39.564 20.7856C39.5478 20.9795 39.4935 21.1682 39.4041 21.341ZM35.7619 28.3055C35.6756 28.4808 35.5553 28.6373 35.4081 28.7658C35.2608 28.8944 35.0895 28.9924 34.9041 29.0542C34.7186 29.116 34.5228 29.1404 34.3279 29.1259C34.1329 29.1114 33.9428 29.0584 33.7686 28.9699C31.2094 27.659 28.3752 26.9754 25.4998 26.9754C22.6244 26.9754 19.7902 27.659 17.2311 28.9699C17.0239 29.0726 16.7976 29.1313 16.5666 29.1422C16.2284 29.153 15.8967 29.0472 15.6271 28.8427C15.3575 28.6381 15.1664 28.3472 15.0857 28.0186C15.005 27.6899 15.0396 27.3435 15.1837 27.0374C15.3279 26.7312 15.5728 26.4839 15.8775 26.3367C18.857 24.8158 22.1546 24.0228 25.4998 24.0228C28.845 24.0228 32.1426 24.8158 35.1221 26.3367C35.4656 26.5154 35.7251 26.8219 35.8448 27.1902C35.9645 27.5584 35.9347 27.959 35.7619 28.3055ZM32.1197 35.2945C31.9362 35.6398 31.6253 35.8998 31.253 36.0193C30.8807 36.1388 30.4765 36.1083 30.1264 35.9344C28.6973 35.2211 27.1217 34.8503 25.5244 34.8516C23.9078 34.8437 22.3129 35.2234 20.8733 35.959C20.6647 36.0546 20.4382 36.1049 20.2088 36.1066C19.9342 36.1058 19.6651 36.0296 19.4308 35.8864C19.1965 35.7432 19.0059 35.5385 18.8799 35.2945C18.7919 35.1221 18.7393 34.9338 18.7251 34.7407C18.7109 34.5476 18.7355 34.3536 18.7974 34.1702C18.8594 33.9868 18.9573 33.8176 19.0856 33.6725C19.2139 33.5275 19.3698 33.4096 19.5443 33.3258C21.3935 32.3748 23.4451 31.8851 25.5244 31.8984C27.5843 31.892 29.6165 32.3727 31.4553 33.3012C31.6306 33.3875 31.7871 33.5078 31.9157 33.655C32.0442 33.8023 32.1422 33.9736 32.204 34.159C32.2658 34.3444 32.2902 34.5403 32.2757 34.7352C32.2613 34.9301 32.2082 35.1203 32.1197 35.2945Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_2366">
                          <rect width="51" height="51" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div class="media_open_with">
                  <a href="">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25.5597"
                        cy="25.5597"
                        r="25.0597"
                        stroke="white"
                      />
                      <path
                        d="M30 29.08C29.24 29.08 28.56 29.38 28.04 29.85L20.91 25.7C20.96 25.47 21 25.24 21 25C21 24.76 20.96 24.53 20.91 24.3L27.96 20.19C28.5 20.69 29.21 21 30 21C31.66 21 33 19.66 33 18C33 16.34 31.66 15 30 15C28.34 15 27 16.34 27 18C27 18.24 27.04 18.47 27.09 18.7L20.04 22.81C19.5 22.31 18.79 22 18 22C16.34 22 15 23.34 15 25C15 26.66 16.34 28 18 28C18.79 28 19.5 27.69 20.04 27.19L27.16 31.35C27.11 31.56 27.08 31.78 27.08 32C27.08 33.61 28.39 34.92 30 34.92C31.61 34.92 32.92 33.61 32.92 32C32.92 30.39 31.61 29.08 30 29.08Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="news-media_control_section d-flex offset-canva">
          <audio ref={audioFileRef} preload="metadata" onTimeUpdate={onPlaying}>
            <source src={`${audioUrl}/${props?.audiofile}`} />
          </audio>
          <div class="media-control-btn" onClick={playOrPause}>
            <img src={control ? icons.playWhite : icons.pause} alt="" />
          </div>

          <div class="player_timer">
            <div class="media_timer-text">
              <b>{time}</b>
            </div>

            <div
              class="media_duration_viewer"
              onClick={seekerEvt}
              ref={seekDuration}
            >
              <span
                class="duration_line-bg"
                style={{ width: `${timePlayed}%` }}
              >
                <span class="placement_indicator" />
              </span>
            </div>

            <div class="media_duration_time">
              <b>{duration}</b>
            </div>
          </div>

          <div
            class="media-sound_controller"
            ref={volumeRef}
            onClick={volumeModifier}
          >
            <span
              class="sound_controller"
              style={{ width: `${volumStyle}%` }}
            />
          </div>
        </div>

        <div class="offset-canva">
          <div class="related_news_section">
            <div class="related_news-top_bar d-flex">
              <div class="related_news_top_bar_title">Related posts</div>
              <a href="">
                <div class="related-links-to-all-items d-flex btn default-outline light-outline">
                  <span>VIEW ALL</span>
                  <span>
                    <img src={icons.arLight} alt="" />
                  </span>
                </div>
              </a>
            </div>

            <div class="related_news_items_list d-flex">
              {related?.map((e, i)=>{
                return (
                  <>
                    <a key={i} href="#blocked" class="related_news_item">
                      <div class="related_news_item-imge">
                        <img
                          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          class="w-100"
                        />
                      </div>
                      <div class="related_news_item_details">
                        <div class="related-news-item_title">
                          <p>Make it short and sweet. Sometimes</p>
                        </div>
                        <div class="related-news-item_title">
                          <b>By : Maria Carrey</b>
                        </div>
                      </div>
                    </a>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
