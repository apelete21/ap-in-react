import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Fireworks from 'fireworks-js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../../asset/css/locomotive-scroll.min.css"
import LocomotiveScroll from 'locomotive-scroll'
import "../../asset/css/style.css"
import YoutubeLightIcon from "../../assets/media/images/icons/youtube-light.svg"
import InstagramLightIcon from "../../assets/media/images/icons/instagram-light.svg"
import LinkedinLightIcon from "../../assets/media/images/icons/linkedin-light.svg"
import FacebookLightIcon from "../../assets/media/images/icons/facebook-light.svg"
import PexelsFox from "../../asset/images/pexels-fox-1595385.jpeg"
import Roger from "../../assets/media/images/team/roger.jpg"
import Gladys from "../../assets/media/images/team/Gladys-akomedji.jpeg"
import JeanPhilipe from "../../assets/media/images/team/Jean-philipe.jpg"
import Doris from "../../assets/media/images/team/arnaud.png"
import Luc from "../../assets/media/images/team/sss.jpg"
import PexelsCottombro from "../../asset/images/pexels-cottonbro-9222625.jpg"
import VueFace from "../../asset/images/vue-face.webp"
import Portrait from "../../asset/images/portrait.jpg"
import Personne from "../../asset/images/personne.webp"
import LogoIcon from "../../asset/images/logo-icon.png"

const OneYear = () => {

  const [loader, setLoader] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoader('fade')
      setTimeout(() => setLoader("none"), 1000);
    }, 3000);
  }, [])

  useEffect(() => {
    // Ios Elestic scroll prevent
    var scroll = function (e) {
      // compute state
      if (stopScrollX || stopScrollY) {
        e.preventDefault();   // this one is the key
        e.stopPropagation();
        window.scroll(scrollToX, scrollToY);
      }
    }

    // document.addEventListener('mousewheel', scroll, false);

    var scrollX = 0;
    var scrollY = 0;
    var scrollMinX = 0;
    var scrollMinY = 0;
    var scrollMaxX = document.body.scrollWidth - window.innerWidth;
    var scrollMaxY = document.body.scrollHeight - window.innerHeight;

    // make sure that we work with the correct dimensions
    document.querySelector("html").addEventListener('resize', function () {
      scrollMaxX = document.body.scrollWidth - window.innerWidth;
      scrollMaxY = document.body.scrollHeight - window.innerHeight;
    }, false);

    // where the magic happens
    document.querySelector("html").addEventListener('scroll', function () {
      scrollX = window.scrollX;
      scrollY = window.scrollY;

      if (scrollX <= scrollMinX) scrollTo(scrollMinX, window.scrollY);
      if (scrollX >= scrollMaxX) scrollTo(scrollMaxX, window.scrollY);

      if (scrollY <= scrollMinY) scrollTo(window.scrollX, scrollMinY);
      if (scrollY >= scrollMaxY) scrollTo(window.scrollX, scrollMaxY);
    }, false);

    if (navigator.userAgent.indexOf('Safari') != -1) {

      window.addEventListener('mousewheel', function (e) {
        if (e.originalEvent?.wheelDelta / 120 > 0) {
          if ($window.scrollTop() < .2) return false;
        }
      })
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia("screen and (min-width: 790px)").matches) {
      var cursor = document.createElement('div')
      cursor.classList.add('cursor');
      var cursorinner = document.createElement('div')
      cursorinner.classList.add('cursor2');

      document.querySelector('html').appendChild(cursor)
      document.querySelector('html').appendChild(cursorinner)

      document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      });

      document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
      });

      document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
      });

      document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
      });

      document.querySelector('.welcomePage').addEventListener('mousemove', (e) => {
        document.querySelector('.scaleBtn').style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      })
      // ScaleBtn Function *******************
      document.querySelector('.welcomePage').addEventListener('click', () => {
        document.querySelector('.scaleLayer').classList.add('scale100')
        document.querySelector('.cursor').classList.add('cursor2border')
        setTimeout(() => {
          document.querySelector('.welcomePage').classList.add('opacity0')
          setTimeout(() => document.querySelector('.welcomePage').style.display = 'none', 300);
        }, 1000);
      })
    } else {
      // ScaleBtn Function *******************
      document.querySelector('.welcomePage').addEventListener('click', () => {
        document.querySelector('.scaleLayer').classList.add('scale100')
        setTimeout(() => {
          document.querySelector('.welcomePage').classList.add('opacity0')
          setTimeout(() => document.querySelector('.welcomePage').style.display = 'none', 300);
        }, 1000);
      })
    }
  }, [])

  useEffect(() => {
    // ***********  Firework  /
    const fireDiv = document.querySelector('.fireworksDiv');

    let fireworks = new Fireworks(fireDiv, {
      delay: { min: 30, max: 35 },
      trace: 3,
      speed: 0.01,
    })
    fireworks.start();
    // ***********  Firework /
  }, [])

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('resize', () => {
      // ScrollTrigger.update()
      ScrollTrigger.refresh()
    })

    // Gsap animation ******************

    // selecting the dom Elements
    const homeLayer = document.querySelector('.homeLayer')
    const fireworksDiv = document.querySelector('.fireworksDiv')
    const backgroundLayer = document.querySelector('.backgroundLayer')
    const layerImage = document.querySelector('.layerImage')
    const imgA = document.querySelector('.img-container-a')
    const imgB = document.querySelector('.img-container-b')
    const imgC = document.querySelector('.img-container-c')
    const imgD = document.querySelector('.img-container-d')
    const imgE = document.querySelector('.img-container-e')
    const secondLayer = document.querySelector('.secondLayer')
    const childDiv = document.querySelector('.childDiv')
    const snapEl = gsap.utils.toArray('.snapEl')
    const textFromLeft = document.querySelectorAll(".text-from-left")
    const letters = document.querySelectorAll(".letter")
    const rotateLayer = document.querySelectorAll(".rotateLayer")
    const tween2 = document.querySelector('.tween2')


    // Gsap global timeLine
    // gsap.globalTimeline.timeScale(0.5)

    // Adding locomotive scroll to the page

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".scrollContainer"),
      smooth: true,
      smartphone: {
        smooth: true,
        direction: "vertical",
      },
      tablet: {
        smooth: true,
        direction: "vertical",
      }
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

    locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy(".scrollContainer", {
    //   scrollTop(value) {
    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //   getBoundingClientRect() {
    //     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //   },
    //   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    //   pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
    // });

    ScrollTrigger.defaults({
      scroller: document.querySelector(".scrollContainer")
    })

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    // Setting Animation

    if (window.matchMedia("(max-width: 900px)").matches) {

      gsap.timeline({
        scrollTrigger: {
          trigger: backgroundLayer,
          start: 'top bottom',
          scrub: 1
        }
      })
        .to('.text-script-1', {
          keyframes: [{
            opacity: 0,
            duration: 0.99
          }]
        })
        .to('.text-script-2', {
          keyframes: [{
            opacity: 1,
            duration: 0.99
          },
          {
            opacity: 1,
            duration: 0.99
          },
          {
            opacity: 0,
            duration: 0.99
          }
          ]
        })
        .to('.text-script-3', {
          keyframes: [{
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 0,
            duration: 0.99
          }
          ]
        })
        .to('.text-script-4', {
          keyframes: [{
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          }
          ]
        })

      gsap.to(imgA, {
        rotation: -10,
        x: 150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgA,
          scrub: true,
        }
      })

      gsap.to(imgB, {
        rotation: 10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgB,
          scrub: true,
        }
      })

      gsap.to(imgC, {
        rotation: 10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgC,
          scrub: true,
        }
      })

      gsap.to(imgD, {
        rotation: 10,
        x: 150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgD,
          scrub: true,
        }
      })

      gsap.to(imgE, {
        rotation: -10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgE,
          scrub: true,
        }
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: childDiv,
          scrub: true,
          pin: secondLayer,
          end: "+=650"
        }
      })
        .to(childDiv, {
          xPercent: -100,
          duration: 1250,
          ease: "slow",
        })
        .to('.text-scroll-1', {
          keyframes: [{
            yPercent: -65,
            duration: 1250,
          }]
        })
        .to(document.querySelectorAll('.text-script-opacity'), {
          opacity: 1,
          duration: 61.5,
          stagger: 75
        }, '<')

      gsap.timeline({
        scrollTrigger: {
          trigger: snapEl,
          pin: true,
          scrub: true,
          end: '+=1300'
        },
        ease: 'slow'
      })
        // text animation from right
        .from(letters, {
          x: `140vh`,
          rotate: 90,
          duration: 12.5,
          ease: 'slow',
          stagger: 12.5 / 9,
        })
        // background rotation scale
        .set(rotateLayer, {
          backgroundColor: 'white',
        })
        .to(letters, {
          opacity: 0,
          duration: 12.5,
          ease: 'slow',
          stagger: 12.5 / 9,
        })
        .to(rotateLayer, {
          rotate: -180,
          scale: 5,
          duration: 12.5
        }, '<')

      gsap.timeline({
        scrollTrigger: {
          trigger: tween2,
          pin: true,
          scrub: true,
          start: 'top 0%',
          end: "+=25000"
        }
      })
        .to('.text-delay-display-1', {
          keyframes: [
            {
              opacity: 0,
              duration: 1500
            }
          ]
        }, '<-1000')
        .to('.text-delay-display-2', {
          keyframes: [{
            opacity: 1,
            duration: 1000
          },
          {
            opacity: 1,
            duration: 1000
          },
          {
            opacity: 1,
            duration: 1000
          },
          {
            opacity: 0,
            delay: 40,
            duration: 1000
          }
          ],
        })
        .to('.text-delay-display-3', {
          keyframes: [{
            opacity: 0,
            duration: 1000
          },
          {
            opacity: 1,
            duration: 1000
          },
          {
            opacity: 1,
            duration: 1000
          },
          {
            opacity: 0,
            duration: 1000
          }
          ]
        })
        .to('.textoverlay', {
          scale: 1,
          duration: 1000,
          delay: 1000
        })
        .to('.country-text', {
          keyframes: [{
            opacity: 1,
            duration: 1000,
          },
          {
            opacity: 0,
            duration: 1000,
          }
          ]
        })
        .to(['.germany', '.france'], {
          keyframes: [
            {
              opacity: 1,
              duration: 1000,
              delay: 200
            }
          ]
        })

        .to(['.usa', '.botswana'], {
          keyframes: [
            {
              opacity: 1,
              duration: 1000,
            }
          ]
        })
        .to(['.england', '.togo'], {
          keyframes: [
            {
              opacity: 1,
              duration: 1000,
            }
          ]
        })
        .to('.textoverlay', {
          scale: 4.5,
          duration: 10000
        })
        .to('.togo-text', {
          keyframes: [
            {
              opacity: 1,
              duration: 1000,
              ease: 'linear'
            }, {
              opacity: 1,
              duration: 1000,
              ease: 'linear'
            }, {
              opacity: 0,
              duration: 1000,
              ease: 'linear'
            }
          ]
        }, '<')
        .to(['.togo-bg', 'togo-text'], {
          scale: 6,
          transformOrigin: 'center center',
          rotation: -90,
          duration: 1500,
        })

        .to('.text-one', {
          delay: 1000,
          keyframes: [
            {
              opacity: 1,
              duration: 1000
            }, {
              opacity: 1,
              duration: 1000
            }, {
              opacity: 0,
              duration: 1000
            }
          ]
        })
        .to('.text-two', {
          keyframes: [{
            opacity: 1,
            duration: 1000
          }, {
            opacity: 1,
            duration: 1000
          }, {
            opacity: 1,
            duration: 1000
          }, {
            opacity: 0,
            duration: 1000
          }
          ]
        })
        .to('.togo-bg', {
          scale: 40,
          duration: 6000,
          delay: 500
        })
        .to('.text-of-paralax', {
          keyframes: [
            {
              opacity: 1,
              duration: 3000
            },
            {
              opacity: 1,
              duration: 3000
            }
          ]
        })
        .to('.text-of-paralax-2', {
          y: '-120vh',
          duration: 1300,
        })
        .to(document.querySelectorAll('.txt-opacity-anim'), {
          opacity: 1,
          duration: 500,
          stagger: 300
        })
        .to('.text-scroll-2>p', {
          keyframes: [{
            yPercent: -75,
            duration: 9000,
          }]
        }, '<')
        .set('.text-of-paralax-win', {
          opacity: 1
        })
        .to('.text-of-paralax-2', {
          yPercent: -120,
          duration: 3000
        })
        .to('.firstLine', {
          y: -40,
          opacity: 1,
          duration: 1600
        })
        .to('.secondLine', {
          y: -40,
          opacity: 1,
          duration: 1600
        })
        .to('.firstLine', {
          y: -80,
          opacity: 0,
          duration: 1600
        }, '<')

        .to('.thirdLine', {
          y: -40,
          opacity: 1,
          duration: 1600
        })
        .to('.secondLine', {
          y: -80,
          opacity: 0,
          duration: 1600
        }, '<')

        .to('.fourthLine', {
          y: -40,
          opacity: 1,
          duration: 1600
        })
        .to('.thirdLine', {
          y: -80,
          opacity: 0,
          duration: 1600
        }, '<')
        .to('.fourthLine', {
          y: -80,
          opacity: 0,
          duration: 1600
        })
        .to('.firstTextAnim', {
          xPercent: -100,
          duration: 3000,
          delay: 5000
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#fff',
          duration: 2000
        }, '<')
        .to('.secondTextAnim', {
          xPercent: -100,
          duration: 1000
        }, '<')
        .to('.thirdTextAnim', {
          xPercent: -100,
          duration: 2000
        }, '<')
        .to('.fourthTextAnim', {
          xPercent: -200,
          duration: 500
        }, '<')
        .to('.text-drive-1', {
          opacity: 1,
          duration: 2000
        })
        .to('.text-drive-2', {
          // x: document.querySelector('.text-drive-1').offsetWidth,
          opacity: 1,
          duration: 2000
        })
        .to('.text-drive-3', {
          // x: document.querySelector('.text-drive-1').offsetWidth + document.querySelector('.text-drive-2').offsetWidth,
          opacity: 1,
          duration: 2000
        })
        .to('.text-drive-4', {
          // x: document.querySelector('.text-drive-1').offsetWidth + document.querySelector('.text-drive-2').offsetWidth + document.querySelector('.text-drive-4').offsetWidth,
          opacity: 1,
          duration: 2000
        })
        .to('.secondTextAnim', {
          xPercent: -200,
          duration: 1000,
          delay: 500
        })
        .to('.thirdTextAnim', {
          xPercent: -200,
          duration: 1500
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#001021',
          duration: 1500
        }, '<')
        .to('.third-element-image', {
          keyframes: [
            {
              rotation: 0,
              duration: 2000,
              delay: 500
            },
            {
              xPercent: -120,
              duration: 2000
            }
          ]
        })
        .to('.image-2', {
          xPercent: 0,
          opacity: 1,
          duration: 2000,
        })
        .to('.image-3', {
          xPercent: 0,
          duration: 2000,
        }, '<')
        .to('.image-3', {
          xPercent: 120,
          opacity: 1,
          duration: 2000,
        })
        .to('.thirdTextAnim', {
          xPercent: -300,
          duration: 2000,
          delay: 2000
        })
        .to('.fourthTextAnim', {
          xPercent: -300,
          duration: 2000,
          delay: 2000
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#FF4635',
          duration: 2000
        }, '<')
        .from('.firstLineText', {
          opacity: 0,
          y: 30,
          duration: 3000
        }, '-=2000')
        .from('.secondLineText', {
          opacity: 0,
          y: 30,
          duration: 3000
        })
        .to('.firstLineText', {
          opacity: 0,
          y: -30,
          duration: 2000
        }, '<')
        .from('.thirdLineText', {
          opacity: 0,
          y: 30,
          duration: 3000
        })
        .to('.secondLineText', {
          opacity: 0,
          y: -30,
          duration: 2000
        }, '<')
        .from('.fourthLineText', {
          opacity: 0,
          y: 30,
          duration: 3000
        })
        .to('.thirdLineText', {
          opacity: 0,
          y: -30,
          duration: 2000
        }, '<')

        .to('.team-show', {
          xPercent: -100,
          duration: 2000,
          delay: 500
        })
        .to('.team-show', {
          backgroundColor: '#001021',
          duration: 2000
        })
        .to(document.querySelectorAll('.circle-red'), {
          'clip-path': 'circle(80.7% at 50% 50%)',
          duration: 900 * 6,
          stagger: 200
        }, "+=1")
        .to('.circle-discover', {
          yPercent: 100,
          duration: 4000
        })
        .set('.member-el-title', {
          opacity: 1,
        }, '<')
        .to('.member-cards', {
          xPercent: -105,
          duration: 2000 * 4,
        })
        .to('.paralax-section', {
          opacity: 1,
          duration: 100
        })
        .to('.clip-1', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 5000,
            }
          ]
        })
        .to('.clip-2', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 5000,
            }
          ]
        })
        .to('.clip-3', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 5000,
            }
          ]
        })
        .to('.img-layer-from-bottom', {
          yPercent: -100,
          duration: 4000
        })
        .to('.footer-section', {
          y: "-100vh",
          duration: 4000
        })
        .to('.footer-section', {
          y: "-100vh",
          duration: 5000
        })
      ScrollTrigger.update()
    }
    else {
      gsap.timeline({
        scrollTrigger: {
          trigger: backgroundLayer,
          start: 'top bottom',
          scrub: 1
        }
      })
        .to('.text-script-1', {
          keyframes: [{
            opacity: 0,
            duration: 0.99
          }]
        })
        .to('.text-script-2', {
          keyframes: [{
            opacity: 1,
            duration: 0.99
          },
          {
            opacity: 1,
            duration: 0.99
          },
          {
            opacity: 0,
            duration: 0.99
          }
          ]
        })
        .to('.text-script-3', {
          keyframes: [{
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 0,
            duration: 0.99
          }
          ]
        })
        .to('.text-script-4', {
          keyframes: [{
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          },
          {
            opacity: 1,
            duration: 0.99,
          }
          ]
        })

      gsap.to(imgA, {
        rotation: -10,
        x: 150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgA,
          scrub: true,
        }
      })

      gsap.to(imgB, {
        rotation: 10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgB,
          scrub: true,
        }
      })

      gsap.to(imgC, {
        rotation: 10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgC,
          scrub: true,
        }
      })

      gsap.to(imgD, {
        rotation: 10,
        x: 150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgD,
          scrub: true,
        }
      })

      gsap.to(imgE, {
        rotation: -10,
        x: -150,
        y: -150,
        duration: 1000,
        scrollTrigger: {
          trigger: imgE,
          scrub: true,
        }
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: childDiv,
          scrub: true,
          pin: secondLayer,
          end: "+=5000"
        }
      })
        .to(childDiv, {
          xPercent: -100,
          duration: 10000,
          ease: "slow",
        })
        .to('.text-scroll-1', {
          keyframes: [{
            yPercent: -65,
            duration: 10000,
          }]
        })
        .to(document.querySelectorAll('.text-script-opacity'), {
          opacity: 1,
          duration: 500,
          stagger: 300
        }, '<')

      gsap.timeline({
        scrollTrigger: {
          trigger: snapEl,
          pin: true,
          scrub: true,
          end: '+=3000'
        },
        ease: 'slow'
      })
        // text animation from right
        .from(letters, {
          x: `140vh`,
          rotate: 90,
          duration: 25,
          ease: 'slow',
          stagger: 25 / 9,
        })
        // background rotation scale
        .set(rotateLayer, {
          backgroundColor: 'white',
        })
        .to(letters, {
          opacity: 0,
          duration: 25,
          ease: 'slow',
          stagger: 25 / 9,
        })
        .to(rotateLayer, {
          rotate: -180,
          scale: 5,
          duration: 25
        }, '<')
        .timeScale(0.5)

      gsap.timeline({
        scrollTrigger: {
          trigger: tween2,
          pin: true,
          scrub: true,
          start: 'center center',
          end: "+=105000"
        }
      })
        .to('.text-delay-display-1', {
          keyframes: [{
            opacity: 1,
            duration: 10000
          },
          {
            opacity: 0,
            delay: 40,
            duration: 10000
          }
          ]
        })
        .to('.text-delay-display-2', {
          keyframes: [{
            opacity: 1,
            duration: 10000
          },
          {
            opacity: 1,
            duration: 10000
          },
          {
            opacity: 0,
            delay: 40,
            duration: 10000
          }
          ],
        })
        .to('.text-delay-display-3', {
          keyframes: [{
            opacity: 0,
            duration: 10000
          },
          {
            opacity: 1,
            duration: 10000
          }
          ]
        })
        .to('.textoverlay', {
          scale: 1,
          duration: 10000,
          delay: 7000
        })
        .to('.country-text', {
          keyframes: [{
            opacity: 1,
            duration: 10000,
          },
          {
            opacity: 0,
            duration: 10000,
          }
          ]
        })
        .to(['.germany', '.france'], {
          keyframes: [
            {
              opacity: 1,
              duration: 10000,
              delay: 2000
            }
          ]
        })

        .to(['.usa', '.botswana'], {
          keyframes: [
            {
              opacity: 1,
              duration: 10000,
            }
          ]
        })
        .to(['.england', '.togo'], {
          keyframes: [
            {
              opacity: 1,
              duration: 10000,
            }
          ]
        })
        .to('.textoverlay', {
          scale: 4.5,
          duration: 100000
        })
        .to('.togo-text', {
          keyframes: [
            {
              opacity: 1,
              duration: 10000,
              ease: 'linear'
            }, {
              opacity: 1,
              duration: 10000,
              ease: 'linear'
            }, {
              opacity: 0,
              duration: 10000,
              ease: 'linear'
            }
          ]
        }, '<')
        .to(['.togo-bg', 'togo-text'], {
          scale: 6,
          transformOrigin: 'center center',
          rotation: -90,
          duration: 25000,
        })

        .to('.text-one', {
          delay: 10000,
          keyframes: [{
            opacity: 1,
            duration: 10000
          }, {
            opacity: 1,
            duration: 10000
          }, {
            opacity: 1,
            duration: 10000
          }, {
            opacity: 0,
            duration: 10000
          }
          ]
        })
        .to('.text-two', {
          keyframes: [{
            opacity: 1,
            duration: 10000
          }, {
            opacity: 1,
            duration: 10000
          }, {
            opacity: 1,
            duration: 10000
          }, {
            opacity: 0,
            duration: 10000
          }
          ]
        })
        .to('.togo-bg', {
          scale: 35,
          duration: 30000,
          delay: 1000
        })
        .to('.text-of-paralax', {
          keyframes: [
            {
              opacity: 1,
              duration: 30000
            },
            {
              opacity: 1,
              duration: 30000
            }
          ]
        })
        .to('.text-of-paralax-2', {
          y: '-120vh',
          duration: 13000,
        })
        .to(document.querySelectorAll('.txt-opacity-anim'), {
          opacity: 1,
          duration: 5000,
          stagger: 3000
        })
        .to('.text-scroll-2>p', {
          keyframes: [{
            yPercent: -75,
            duration: 90000,
          }]
        }, '<')
        .set('.text-of-paralax-win', {
          opacity: 1
        })
        .to('.text-of-paralax-2', {
          yPercent: -120,
          duration: 30000
        })
        .to('.firstLine', {
          y: -40,
          opacity: 1,
          duration: 16000
        })
        .to('.secondLine', {
          y: -40,
          opacity: 1,
          duration: 16000
        })
        .to('.firstLine', {
          y: -80,
          opacity: 0,
          duration: 16000
        }, '<')

        .to('.thirdLine', {
          y: -40,
          opacity: 1,
          duration: 16000
        })
        .to('.secondLine', {
          y: -80,
          opacity: 0,
          duration: 16000
        }, '<')

        .to('.fourthLine', {
          y: -40,
          opacity: 1,
          duration: 16000
        })
        .to('.thirdLine', {
          y: -80,
          opacity: 0,
          duration: 16000
        }, '<')
        .to('.fourthLine', {
          y: -80,
          opacity: 0,
          duration: 16000
        })
        .to('.firstTextAnim', {
          xPercent: -100,
          duration: 30000,
          delay: 5000
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#fff',
          duration: 20000
        }, '<')
        .to('.secondTextAnim', {
          xPercent: -100,
          duration: 15000
        }, '<')
        .to('.thirdTextAnim', {
          xPercent: -100,
          duration: 20000
        }, '<')
        .to('.fourthTextAnim', {
          xPercent: -200,
          duration: 5000
        }, '<')
        .to('.text-drive-1', {
          opacity: 1,
          duration: 20000
        })
        .to('.text-drive-2', {
          opacity: 1,
          duration: 20000
        })
        .to('.text-drive-3', {
          opacity: 1,
          duration: 20000
        })
        .to('.text-drive-4', {
          opacity: 1,
          duration: 20000
        })
        .to('.secondTextAnim', {
          xPercent: -200,
          duration: 15000,
          delay: 5000
        })
        .to('.thirdTextAnim', {
          xPercent: -200,
          duration: 15000
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#001021',
          duration: 15000
        }, '<')
        .to('.third-element-image', {
          keyframes: [
            {
              rotation: 0,
              duration: 20000,
              delay: 5000
            },
            {
              xPercent: -120,
              duration: 20000
            }
          ]
        })
        .to('.image-2', {
          xPercent: 0,
          opacity: 1,
          duration: 20000,
        })
        .to('.image-3', {
          xPercent: 0,
          duration: 20000,
        }, '<')
        .to('.image-3', {
          xPercent: 120,
          opacity: 1,
          duration: 20000,
        })
        .to('.thirdTextAnim', {
          xPercent: -300,
          duration: 20000,
          delay: 5000
        })
        .to('.fourthTextAnim', {
          xPercent: -300,
          duration: 20000,
          delay: 5000
        }, '<')
        .to('.text-of-paralax-win', {
          backgroundColor: '#ff4635',
          duration: 20000
        }, '<')
        .from('.firstLineText', {
          opacity: 0,
          y: 30,
          duration: 30000
        })
        .from('.secondLineText', {
          opacity: 0,
          y: 30,
          duration: 30000
        })
        .to('.firstLineText', {
          opacity: 0,
          y: -30,
          duration: 20000
        }, '<')
        .from('.thirdLineText', {
          opacity: 0,
          y: 30,
          duration: 30000
        })
        .to('.secondLineText', {
          opacity: 0,
          y: -30,
          duration: 20000
        }, '<')
        .from('.fourthLineText', {
          opacity: 0,
          y: 30,
          duration: 30000
        })
        .to('.thirdLineText', {
          opacity: 0,
          y: -30,
          duration: 20000
        }, '<')

        .to('.team-show', {
          xPercent: -100,
          duration: 20000,
          delay: 5000
        })
        .to('.team-show', {
          backgroundColor: '#001021',
          duration: 20000
        })
        .to(document.querySelectorAll('.circle-red'), {
          'clip-path': 'circle(70.7% at 50% 50%)',
          duration: 6000 * 6,
          stagger: 800
        }, "+=1")
        .to('.circle-discover', {
          yPercent: 100,
          duration: 40000
        })
        .set('.member-el-title', {
          opacity: 1,
        }, '<')
        .to('.member-cards', {
          xPercent: -120,
          duration: 40000 * 5,
        })
        .to('.paralax-section', {
          opacity: 1,
          duration: 1000
        }, '-=150000')
        .to('.clip-1', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 50000,
            }
          ]
        })
        .to('.clip-2', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 50000,
            }
          ]
        })
        .to('.clip-3', {
          keyframes: [
            {
              'clip-path': 'polygon(0 0, 125% 0%, 100% 100%, 0% 100%)',
              duration: 50000,
            }
          ]
        })
        // .to('.clip-4', {
        //     keyframes: [
        //         {
        //             'clip-path': 'polygon(0 0, 130% 0%, 105% 100%, 0% 100%)',
        //             duration: 50000,
        //         }
        //     ]
        // })
        .to('.img-layer-from-bottom', {
          yPercent: -100,
          duration: 40000
        })
        .to('.footer-section', {
          y: "-100vh",
          duration: 40000
        })
        .to('.footer-section', {
          y: "-100vh",
          duration: 60000
        })
      ScrollTrigger.update()
    }
  }, [])

  const ref = useRef(null);

  const options = {
    smooth: true,
  }

  return (
    <>
      <div className="scrollTopBtn">
        <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 40L35 15L10 40L0 35L35 0L70 35L60 40Z" fill="white" />
        </svg>
      </div>
      <div className={loader === "fade" ? "loader vw-100 vh-100 opacity0" : loader === "none" ? "loader vw-100 vh-100 d-none" : "loader vw-100 vh-100"} data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <div className="waviy">
          <span style={{ "--i": "1" }}>L</span>
          <span style={{ "--i": "2" }}>o</span>
          <span style={{ "--i": "3" }}>a</span>
          <span style={{ "--i": "4" }}>d</span>
          <span style={{ "--i": "5" }}>i</span>
          <span style={{ "--i": "6" }}>n</span>
          <span style={{ "--i": "7" }}>g</span>
          <span style={{ "--i": "8" }}>.</span>
        </div>
      </div>
      <div className="navbar anniv-nav po_fixed">
        <div className="logo">
          <a className="logo--white" href="home.php">
            <img src={LogoIcon} alt="" srcSet="" />
          </a>
        </div>
        <a className="btn default-outline" href="home.php">
          Move to the site
        </a>
      </div>
      <div className="welcomePage vw-100 vh-100">
        <h3 className="welcome-text">Welcome to our first <span className="red-text"> 1<sup>st</sup> year</span> <br />
          celebration experience
        </h3>
        <button className="scaleBtn">
          Get In
        </button>
        <div className="scaleLayer"></div>
      </div>
      <a href="#" id="scroll"><span></span></a>
      <div className="scrollContainer vw-100" data-scroll-container id="fixed-target">
        <section className="homeLayer vw-100">
          <div className="fireworksDiv vw-100 vh-100"></div>
          <div className="text" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
            <h5 className="text-script-2">One year <br /> of <span className="red-text">Passion.</span></h5>
            <h5 className="text-script-3">One year of<br /><span className="red-text">innovation.</span></h5>
            <h5 className="text-script-4">One year of digital<br /><span className="red-text">transformation.</span></h5>
          </div>
          <div className="backgroundLayer">
            <div className="layerImage img-container-a">
              <img src={Personne} alt="" className="w-100 h-100" />
            </div>
            <div className="layerImage img-container-b">
              <img src={Portrait} alt="" className="w-100 h-100" />
            </div>
            <div className="layerImage img-container-c">
              <img src={VueFace} alt="" className="w-100 h-100" />
            </div>
            <div className="layerImage img-container-d">
              <img src={Portrait} alt="" className="w-100 h-100" />
            </div>
            <div className="layerImage img-container-e">
              <img src={VueFace} alt="" className="w-100 h-100" />
            </div>
          </div>
        </section>
        <div className="secondLayer vh-100 vw-100" style={{ "overflow": "visible" }}>
          <div className="section script-one firstEl">
            <p>But above all, a <span className="red-text">year</span> by your <span className="red-text">side</span></p>
          </div>
          <div className="section childDiv vw-100">
            <div className="section firstSnapEl script-two vw-100" style={{ "--i": "20" }}>
              <p className="text-scroll-1">
                <span className="text-script-opacity">A </span>
                <span className="text-script-opacity">year </span>
                <span className="text-script-opacity">during </span>
                <span className="text-script-opacity">which </span>
                <span className="text-script-opacity">we </span>
                <span className="text-script-opacity">put </span>
                <span className="text-script-opacity">our </span>
                <span className="text-script-opacity">expertise </span>
                <span className="text-script-opacity">at </span>
                <span className="text-script-opacity">your </span>
                <span className="text-script-opacity">service </span>
                <span className="text-script-opacity">to </span>
                <span className="text-script-opacity">accompany </span>
                <span className="text-script-opacity">you </span>
                <span className="text-script-opacity">in </span>
                <span className="text-script-opacity">your </span>
                <span className="text-script-opacity">digital </span>
                <span className="text-script-opacity">transformation </span>
                <span className="text-script-opacity">.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="section childDiv2 vw-100" id="fixed-target2">
          <div className="section snapEl tween1 vw-100 vh-100" style={{ "--i": "21" }} data-scroll data-scroll-sticky
            data-scroll-target="#fixed-target2">
            <div className="text-from-left" data-scroll-speed="2">
              <div className="rotateLayer"></div>
              <p>
                <span className="letter">A</span>
                <span className="letter">n</span>
                <span className="letter">d</span>
                <span className="letter"> </span>
                <span className="letter"> </span>
                <span className="letter">T</span>
                <span className="letter">o</span>
                <span className="letter">d</span>
                <span className="letter">a</span>
                <span className="letter">y</span>
                <span className="letter">,</span>
              </p>
            </div>
          </div>
          <div className="section snapEl tween2 vw-100 vh-100" style={{ "--i": "22" }}>
            <p className="step-description text-delay-display-1" style={{ "--opacity": 1, "--position": "absolute" }}>
              At the end of this first chapter of our journey
            </p>
            <p className="step-description text-delay-display-2" style={{ "--opacity": 0, "--position": "absolute" }}>
              we can proudly say that you are
            </p>
            <p className="step-description text-delay-display-3" style={{ "--opacity": 0, "--position": "absolute" }}>
              at the center of the digital transformation we are aiming for.
            </p>
            <div className="textoverlay vw-100 vh-100">
              <p className="country-text red-text">Six Countries.</p>
              <svg id="svg2" x="0px" y="0px"
                viewBox="0 0 3818 1880" style={{ enableBackground: "new 0 0 3818 1880" }}>
                <sodipodi bordercolor="#666666" borderopacity="1.0" gridtolerance="10.0"
                  guidetolerance="10.0" id="base" objecttolerance="10.0" pagecolor="#ffffff"
                  showgrid="false">
                </sodipodi>
                <g id="Layer_1">
                  <path id="_x34_3381528" className="st0" d="M3608,679l-76,32l-19-23l69-32L3608,679z M3504,738l-59,96l-95,49l-27-32l95-53l32-93
		L3504,738z M3490,942l-31,23l-28-87l19,5L3490,942z M3541,1320l-191-40l-6-68l179,45L3541,1320z M3813,1690l-67,82l-32-4l-9-47
		l83-90l-34-51l19-28l32,47L3813,1690z M3299,1202l-36,63l-31-4l31-72L3299,1202z M3232,1189l-38,72l-68-18l5-54l59-59L3232,1189z
		 M3818,487l-127,14l4,45l-76,100l-15-91l42-54l-146,14l-86,45l-11,37l61-14l4,86l-41,4l-13,42l-83,55l13,36l-53,36l-19-63l-36,19
		l9,127l-155,90l41,60l-68,40l-28-53l-14,4l14,59l55,36l-19,19l-36-10l9,28l32,4l18,55l83,31l4,28l-95-17l-133-146l55,4l-78-169v-46
		h-22l-10,42l-76,59v55l-60,17l-37-104l-26-8l4-61l-219-40l36,59l37-13l41,40l-41,51l-96,36l-100-192h-27l-4,37l67,136l51,38l78-6
		l-141,205l17,18l6,68l-42,32l-5,51l-109,132l-87-5l-77-210l24-32v-54l-65-77l27-18l-63-41l-127-4l-74-65l-4-140l164-142l91-8l23,26
		l-5,23l73,23l36-32l28,23l99,5l19-19v-55l-41,55l-54-73l9,73l-51-37l-9-54l-61-71l-11,12l49,68l-32,45l-13-54l-55-41l-31,28l-19-10
		l-104,97l-37-102l73,5l13-32l-27-28l46-36l27-4l51-46l-14-36l27-13l18,27l92-5l4-26l100-38l-18-22l-63,22l-19-40l46-36l-27-28
		l-59,77l21,18l-4,47l-59,17l-14-36l-63,8l4-54l104-140l115-28l172,40l-31,47l-68-6l45,46l132-87h87l-59-67l68-70l95-40l14,32
		l-90,32l-51,54l104,64l-17-32l63-55l114,28l17-36l206-78l141,31l-104,60l323,33l55-55l26,49l156,14l45,24l127-15V487z M3591,1508
		l-78,145l-63-5l-123-91l-4,23l-151,31l18-63l-32-13v-78l197-127l90,59l5-50l27-4L3591,1508z M1987,587l-4,38h-64l20-38l-42-45
		l31-32l19,45L1987,587z M1860,415l-82,59l-49-73l91-23L1860,415z M2118,809l-28-10l17-27L2118,809z M1842,82l-54,46l-10,114
		l-82,127l-131,40l-32,78l-59-4l-68-105l-27-141l-55-41l-60,19l-31-42l99-123l410-50L1842,82z M1907,602l-28,31l-31-28l26-45
		L1907,602z M2512,1358l-41,131l-59-41l17-59l59-46L2512,1358z M1218,956l-36-18v-32L1218,956z M1351,1043l-23,9l-114-41l8-23
		L1351,1043z M1191,975l-9,28l-70-15l7-34L1191,975z M1619,1293l-36,42l-10,82l-277,296c10,17,13,37,9,59l-36,36l32,40l-28,32
		l-72-81v-132l45-260l-60-28l-63-158l27-41v-46h-63l-28-55l-36,4l-128-72l-41-50h-50L667,779l6-91l-47-68l-31,9l-23-46l27,4
		c-6.7-7-24-25.4-39.8-42.1C547,532,535.7,520,531,515c-30-4.7-60-9.3-90-14L221,610l78-76l-55-42l-23-155l91-46l437,46l-82-59
		l19-78l437-167l169,8l-150,169l199,163l-63,68l-119-21l15-74h-42l-18,51l13,44l-90-8l-47,63l33,27l64,19l59,68l22-68l-13-14v-68
		l141,23l114,137l-160,91v49l-28-4l-27,27l6,36l-65,55l19,60h-32l-27-41H996l-38,68l38,36h17l36-22l24,13l-9,51l36,4l9,55h65l63-27
		l45,17l85,3l6,56h69l8,65h47L1619,1293z M208,424l-137-4l-32,13l36,36L0,487V314l185,74L208,424z M399,1003l-18,32l-63-42l-42,22
		l-100-59l9-27l114,46l44-23L399,1003z M144,897l-50,32l-27-59L144,897z M658,1485l-27,27l-41-27l28-28L658,1485z M586,1444l-32,18
		l-42-28l32-40L586,1444z M2636,746l-5-37l-23,3l3,37L2636,746z M2554,805l-30-59l25-34l-13-14l-26,20l6,97L2554,805z M2413,744
		l-33-53l-31-6l2,24l-27,3l-23-30l-41,51l8,32l36-28h28L2413,744z" />
                </g>
                <rect x="1798.7" y="474.9" className="st1 england" width="157.5" height="101.4" />
                <polyline className="st2" points="1975.4,639.8 1933,673 1960,701 1965.3,710.3 1962.3,735 1973.5,748.9 2015,733 2034,743 
	2056.8,723.5 2044.5,691.4 2053.5,647.8 2006,633 1979,637 " />
                <polygon className="st3 france"
                  points="2025.4,765 1911.7,765 1876.5,656.8 1968.6,589.9 2060.6,656.8 " />
                <rect x="1909.5" y="676.8" className="st4" width="137.5" height="42.4" />
                <text transform="matrix(1 0 0 1 1916.5455 698.4338)" className="st5 st6 st7 france">FRANCE</text>
                <polygon className="st8" points="2040.1,639.6 2056.8,618.4 2065,599.9 2057,587 2093.4,564.7 2134.4,596.5 2137.7,618.4 2125.8,633 
	2127.8,654.8 2137.7,660.7 2127.8,676.6 2116,697 2101.4,709 2082.9,709 2065,715 2044.5,691.4 " />
                <polygon className="st9" points="734.7,587 796.8,596.5 849.6,609.9 920,603.3 984.4,587 1065.8,535.7 1087,542 1146,610 1168,542 
	1155,528 1155,460 1296,483 1410,620 1250,711 1250,760 1222,756 1195,783 1201,819 1136,874 1155,934 1123,934 1096,893 996,893 
	958,961 996,997 1013,997 1049,975 1073,988 1064,1039 1059,1079 1023,1083 895,1011 854,961 804,961 667,779 673,688 626,620 
	595,629 572,583 " />
                <rect x="735.3" y="607.4" transform="matrix(0.9361 -0.3517 0.3517 0.9361 -190.7273 364.6744)"
                  className="st10 usa" width="346.2" height="199.9" />
                <rect x="831.3" y="693.4" className="st4" width="220.6" height="61.5" />
                <rect x="1954.7" y="510" className="st1" width="0" height="5.3" />
                <circle cx="2144.5" cy="589.9" r="83.9" className="germany" />
                <rect x="2066.7" y="579.5" className="st4" width="155.6" height="53.5" />
                <text transform="matrix(1 0 0 1 2093.1858 600.2473)" className="st5 st6 st16 germany">GERMANY</text>
                <text transform="matrix(1 0 0 1 831.3056 727.8164)" className="st5 st6 st11 usa">USA</text>
                <polygon className="st12"
                  points="1928,510 1947,555 1987,587 1983,625 1919,625 1939,587 1919,567.5 1897,542 " />
                <polygon className="st12" points="1874,560 1848,605 1879,633 1907,602 " />
                <rect x="1796.8" y="499.5" className="st4" width="161.5" height="52.2" />
                <text transform="matrix(1 0 0 1 1832.895 518.0872)" className="england">
                  <tspan x="0" y="0" className="st5 st6 st7">UNITED </tspan>
                  <tspan x="-15.2" y="28" className="st5 st6 st7">KINGDOM</tspan>
                </text>
                <ellipse className="st13 botswana" cx="2249.6" cy="1449.4" rx="86.9" ry="54.5" />
                <rect x="2175.6" y="1442.5" className="st4 togo-bg" width="153.8" height="27.7" />
                <text transform="matrix(1 0 0 1 2193.5178 1459.6615)"
                  className="st5 st6 st14 botswana">BOTSWANA</text>
                <ellipse cx="1980.7" cy="1105.5" className="st15 togo togo-bg bg-change" ry="60.9" rx="26.5" />
                <rect x="1968.6" y="1060.5" className="st4" width="54.8" height="91.3" />
                <text transform="matrix(1 0 0 1 1968.5596 1077.7214)" className="togo togo-text">
                  <tspan x="5" y="0" className="st5 st6 st14">T</tspan>
                  <tspan x="3" y="22" className="st5 st6 st14">O</tspan>
                  <tspan x="3" y="44" className="st5 st6 st14">G</tspan>
                  <tspan x="3" y="66" className="st5 st6 st14">O</tspan>
                </text>
                <text transform="matrix(1 0 0 1 1760.5596 1070.7214)" className="text-one">
                  <tspan x="5" y="0" className="st5 st6 st14" style={{ fontSize: 51 }}>20+ Companies</tspan>
                  <tspan x="90" y="40" className="st5 st6 st14">
                    which we had and
                  </tspan>
                  <tspan x="90" y="75" className="st5 st6 st14">
                    continue to collaborate,
                  </tspan>
                </text>
                <text transform="matrix(1 0 0 1 1760.5596 1070.7214)" className="text-two">
                  <tspan x="60" y="0" className="st5 st6 st14" style={{ fontSize: 51 }}>60+ projects</tspan>
                  <tspan x="90" y="40" className="st5 st6 st14">
                    supported with disruptive
                  </tspan>
                  <tspan x="120" y="75" className="st5 st6 st14">
                    tools and methods
                  </tspan>
                </text>

              </svg>
            </div>
            <div className="text-of-paralax vw-100 vh-100">
              <div className="text-of-paralax-min-txt" style={{ "zIndex": 3 }}>
                and this thanks to the trust you have given us,
              </div>
              <div className="text-of-paralax-2" style={{ "zIndex": 9 }}>
                <div className="text-scroll-2">
                  <p>
                    <span className="txt-opacity-anim">That</span>
                    <span className="txt-opacity-anim">'</span>
                    <span className="txt-opacity-anim">s</span>
                    <span className="txt-opacity-anim">why</span>
                    <span className="txt-opacity-anim">we</span>
                    <span className="txt-opacity-anim">'ve</span>
                    <span className="txt-opacity-anim">worked</span>
                    <span className="txt-opacity-anim">tirelessly</span>
                    <span className="txt-opacity-anim">over</span>
                    <span className="txt-opacity-anim">the</span>
                    <span className="txt-opacity-anim">past</span>
                    <span className="txt-opacity-anim">year</span>
                    <span className="txt-opacity-anim">not</span>
                    <span className="txt-opacity-anim">to</span>
                    <span className="txt-opacity-anim">live</span>
                    <span className="txt-opacity-anim">up</span>
                    <span className="txt-opacity-anim">to</span>
                    <span className="txt-opacity-anim">but</span>
                    <span className="txt-opacity-anim">to</span>
                    <span className="txt-opacity-anim">exceed</span>
                    <span className="txt-opacity-anim">your</span>
                    <span className="txt-opacity-anim">expectations</span>
                    <span className="txt-opacity-anim">and</span>
                    <span className="txt-opacity-anim">needs</span>
                    <span className="txt-opacity-anim">.</span>
                  </p>
                </div>
              </div>
              <div className="text-of-paralax-win vw-100 vh-100" style={{ "zIndex": 6 }}>
                <div className="flex-el-container vh-100">
                  <div className="firstTextAnim flex-el-container-child vw-100 vh-100">
                    <div className="elementText">
                      <div className="firstLine ft-h2 opacity0">This is also an opportunity for us</div>
                      <div className="secondLine ft-h2 opacity0">to thank you for the confidence</div>
                      <div className="thirdLine ft-h2 opacity0">and the experiences that you have allowed us to
                        share </div>
                      <div className="fourthLine ft-h2 opacity0">to share with you,</div>
                    </div>
                  </div>
                  <div className="secondTextAnim flex-el-container-child vw-100 vh-100">
                    <div className="elementText" style={{ "color": "#000" }}>
                      <span className="text-drive-1 opacity0">because these are </span>
                      <span className="text-drive-2 opacity0">the challenges faced,</span>
                      <span className="text-drive-3 opacity0">milestones crossed </span>
                      <span className="text-drive-4 opacity0">by your side,</span>
                    </div>
                  </div>
                  <div className="thirdTextAnim flex-el-container-child vw-100 vh-100">
                    <div className="" style={{ "textAlign": "center", width: "80%", "marginInline": "auto" }}>the thousands
                      of memories created with you around the world that make us so proud of these one
                      year of activities.</div>
                    <div className="elementText" style={{ "marginInline": "auto" }}>
                      <div className="third-element-image image-1" style={{ "--i": 2 }}>
                        <img src={PexelsCottombro} alt=""
                          className="w-100 h-100" />
                      </div>
                      <div className="third-element-image image-2 opacity0" style={{ "--i": 3 }}>
                        <img src={PexelsCottombro} alt=""
                          className="w-100 h-100" />
                      </div>
                      <div className="third-element-image image-3 opacity0" style={{ "--i": 4 }}>
                        <img src={PexelsCottombro} alt=""
                          className="w-100 h-100" />
                      </div>
                    </div>
                  </div>
                  <div className="fourthTextAnim flex-el-container-child vw-100 vh-100">
                    <div className="elementText">
                      <div className="firstLineText"> The end of this first chapter of our journey</div>
                      <div className="secondLineText">is also an opportunity for us to think and prepare for
                        this new year</div>
                      <div className="thirdLineText">in order to bring even more impact and innovation within
                        your company and your projects,</div>
                      <div className="fourthLineText">This is why </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-show vw-100 vh-100" style={{ "zIndex": 10 }}>
                <div className="circle-discover vh-100 vw-100 circle-red" style={{ "--bg": "rgba(255, 0, 0, 0.306)" }}>
                  <div className="circle-discover-1 vh-100 vw-100 circle-red"
                    style={{ "--bg": "rgba(255, 0, 0, 0.411)" }}>
                    <div className="circle-discover-2 vh-100 vw-100 circle-red"
                      style={{ "--bg": "rgba(255, 0, 0, 0.584)" }}>
                      <div className="circle-discover-3 vh-100 vw-100 circle-red"
                        style={{ "--bg": "rgba(255, 0, 0, 0.718)" }}>
                        <div className="circle-discover-4 vh-100 vw-100 circle-red"
                          style={{ "--bg": "rgba(255, 0, 0, 0.818)" }}>
                          <div className="circle-discover-5 vh-100 vw-100 circle-red">
                            For the next ...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="member-el-title">We're filling up on talent with new profiles.</h3>
                <div className="member-cards" data-speed="0.5">
                  <div className="member-el member-el-1" style={{ "--angle": "-10" }}>
                    <div className="member-picture">
                      <img src={Luc} alt="" className="w-100 h-100" />
                    </div>
                    <div className="member-profile">
                      <p className="member-name">
                        Luc KAISER
                      </p>
                      <p className="member-profession">
                        Chief excecutif officer
                      </p>
                    </div>
                  </div>
                  <div className="member-el member-el-2" style={{ "--angle": "10" }}>
                    <div className="member-picture">
                      <img src={Doris} alt="" className="w-100 h-100" />
                    </div>
                    <div className="member-profile">
                      <p className="member-name">
                        Doris LATE
                      </p>
                      <p className="member-profession">
                        Office manager
                      </p>
                    </div>
                  </div>
                  <div className="member-el member-el-3" style={{ "--angle": "-10" }}>
                    <div className="member-picture">
                      <img src={JeanPhilipe} alt="" className="w-100 h-100" />
                    </div>
                    <div className="member-profile">
                      <p className="member-name">
                        Jean-Philippe ABBEY
                      </p>
                      <p className="member-profession">
                        Head of innovation
                      </p>
                    </div>
                  </div>
                  <div className="member-el member-el-4" style={{ "--angle": "10" }}>
                    <div className="member-picture">
                      <img src={Gladys} alt="" className="w-100 h-100" />
                    </div>
                    <div className="member-profile">
                      <p className="member-name">
                        Gladys AKOMEDJI
                      </p>
                      <p className="member-profession">
                        Lead of online marketing
                      </p>
                    </div>
                  </div>
                  <div className="member-el member-el-5" style={{ "--angle": "-10" }}>
                    <div className="member-picture">
                      <img src={Roger} alt="" className="w-100 h-100" />
                    </div>
                    <div className="member-profile">
                      <p className="member-name">
                        Roger AZANO
                      </p>
                      <p className="member-profession">
                        Lead of logistics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="paralax-section vw-100 vh-100" data-scroll data-speed="0.5"
                style={{ "--i": "50", "zIndex": "60" }}>

                <div className="paralax-child clip-1 vw-100 vh-100" style={{ "--bg": "#FF4635", "--i": "3" }} data-speed="0.5">
                  <div className="clip-text clip-text-0 top-left-text">
                    We refine our vision
                  </div>
                  <div className="clip-text clip-text-0 bottom-right-text">
                    We are still driven by the vision to transform futur lives today
                  </div>
                </div>
                <div className="paralax-child clip-2 vw-100 vh-100" style={{ "--bg": "#001021", "--i": "4" }} data-speed="0.5">
                  <div className="clip-text top-left-text">
                    We readjust our missions
                  </div>
                  <div className="clip-text bottom-right-text">
                    <b> "We are ready to:"</b>
                    <ul>
                      <li> We help to improve your process in creation, development and distribution of your project from launch to maturity.</li>


                    </ul>
                  </div>
                </div>
                <div className="paralax-child clip-3 vw-100 vh-100" style={{ "--bg": "#000", "--i": "5" }} data-speed="0.5">
                  <div className="clip-text top-left-text" style={{ "width": "70%", "lineHeight": "120%" }}>
                    And above all, we are aiming for new objectives.
                  </div>
                  <div className="clip-text bottom-right-text">
                    <li>We help you make decisions based on real data</li>
                  </div>
                </div>
                <div className="img-layer-from-bottom vw-100 vh-100" style={{ "zIndex": "60" }}>
                  <div className="imageLayerSecond vw-100 vh-100">
                    <p className="layerText2">We are definitely looking forward to the next part</p>
                  </div>
                  <img src={PexelsFox} alt=""
                    className="vh-100 img-layer-img vw-100" />
                </div>
              </div>
            </div>

            <div className="footer-section vw-100 vh-100">
              <div className="footer-section-wrapper vw-100">
                <div className="footer-main-title">
                  <h2>
                    Want to know more about us?
                  </h2>
                </div>
                <div className="footer-items">
                  <div className="footer--social">
                    <a className="social-svg__icon" href="https://www.facebook.com/InnovativeAPIN/" target="_blank">
                      <img src={FacebookLightIcon} alt="" srcSet="" />
                    </a>
                    <a className="social-svg__icon" href="https://www.linkedin.com/company/akoua-prod-in/" target="_blank">
                      <img src={LinkedinLightIcon} alt="" srcSet="" />
                    </a>
                    <a className="social-svg__icon" href="https://instagram.com/innovativeapin?r=nametag" target="_blank">
                      <img src={InstagramLightIcon} alt="" srcSet="" />
                    </a>
                    <a className="social-svg__icon" href="https://www.youtube.com/channel/UCLq7CKFMZf3yvz5_O49gesg" target="_blank">
                      <img src={YoutubeLightIcon} alt="" srcSet="" />
                    </a>
                  </div>
                  <div className="footer-contact">
                    <span>Contact us</span>
                    <a href="mailto:">hello@appealofinnovation.com</a>
                    <a href="tel:">00228 79924479</a>
                  </div>

                  <div className="footer-nav">
                    <span>DISCOVER </span>
                    <ul>
                      <li><a href=''>Who we are</a></li>
                      <li><a href="">What we do</a></li>
                    </ul>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneYear