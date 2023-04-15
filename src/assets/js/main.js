var $loader = document.querySelector(".loader");
var loaderChild = document.querySelectorAll('.loader__tile')
var body = document.querySelector('.page')

function openNav() {
  gsap.globalTimeline.timeScale(2); //plays twice the normal speed
  gsap.timeline()
    .to(loaderChild, {
      stagger: .1,
      width: '100vw',
      duration: .1,
      ease: 'none'
    })
    .set(loaderChild, {
      opacity: 0,
      delay: 1
    })
    .to($loader, {
      opacity: 0,
      delay: .5
    })
    .to(loaderChild, {
      width: 0,
      display: 'none',
      duration: 0
    })
    .set([loaderChild, $loader], {
      opacity: 1,
      duration: 0
    })
    .set(loaderChild, {
      display: 'block',
      delay: .2,
      duration: 0
    }, '<')

  window.setTimeout(function () {
    document.getElementById("main--nav").style.width = "100%";
  }, 600);
}

function closeNav() {
  gsap.timeline()
    .to(loaderChild, {
      stagger: .1,
      width: '100vw',
      duration: .1,
      ease: 'none'
    })
    .set(loaderChild, {
      opacity: 0,
      delay: 1
    })
    .to($loader, {
      opacity: 0,
      delay: .5
    })
    .to(loaderChild, {
      width: 0,
      display: 'none',
      duration: 0
    })
    .set([loaderChild, $loader], {
      opacity: 1,
      duration: 0
    })
    .set(loaderChild, {
      display: 'block',
      delay: .2,
      duration: 0
    }, '<')
    
  window.setTimeout(function () {
    document.getElementById("main--nav").style.width = "0%";
  }, 600);
}
/*
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
  gsap.to('body', {
    yPercent: -100,
    transformOrigin: '50% 50%',
    duration: 1
  })
})

document.querySelectorAll('a').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    gsap.to('body', {
      y: '0',
      duration: 1
    })
    setTimeout(function () {
      window.location.href = element.getAttribute('href')
    }, 1000)
  })
})
*/
window.addEventListener('resize', () => {
  gsap.restart()
})