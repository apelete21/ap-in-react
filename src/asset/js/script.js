// Gsap SrcollTrigger
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('resize', () => {
    // ScrollTrigger.update()
    ScrollTrigger.refresh()
})

// Ios Elestic scroll prevent
var scroll = function (e) {
    // compute state
    if (stopScrollX || stopScrollY) {
        e.preventDefault();              // this one is the key
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
        if (e.originalEvent.wheelDelta / 120 > 0) {
            if ($window.scrollTop() < .2) return false;
        }
    });

}

// Ios Elestic scroll prevent

// **********  Loading Layer timeOut
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    setTimeout(() => {
        document.querySelector('.loader').classList.add('opacity0')
        setTimeout(() => document.querySelector('.loader').style.display = 'none', 1000);
    }, 3000);
})

// Cursor functions

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

// ***********  Firework  /
const fireDiv = document.querySelector('.fireworksDiv');

let fireworks = new Fireworks(fireDiv, {
    delay: { min: 30, max: 35 },
    trace: 3,
    speed: 0.01,
})

fireworks.start();
// ***********  Firework /

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

ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});

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