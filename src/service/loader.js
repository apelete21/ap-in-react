import gsap from "gsap"

export default function loader() {

    var loader = document.querySelector(".loader");
    var loaderChild = document.querySelectorAll('.loader__tile')

    gsap.globalTimeline.timeScale(2); //plays twice the normal speed

    const TL = gsap.timeline();

    TL.to(loaderChild, {
        stagger: .1,
        width: '100vw',
        duration: .1,
        ease: 'none'
    })
        .set(loaderChild, {
            opacity: 0,
            delay: 1
        })
        .to(loader, {
            opacity: 0,
            delay: .5
        })
        .to(loaderChild, {
            width: 0,
            display: 'none',
            duration: 0
        })
        .set([loaderChild, loader], {
            opacity: 1,
            duration: 0
        })
        .set(loaderChild, {
            display: 'block',
            delay: .2,
            duration: 0
        }, '<')
}
