document.querySelectorAll('a').forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e)
    })
});

document.querySelectorAll('.view-info').forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()

        var popup = document.querySelector('.right-popup')

        popup.classList.add('d-block')
    })
});

document.querySelector('.close-popup').addEventListener("click", (e) => {

    e.preventDefault()

    var popup = document.querySelector('.right-popup')

    popup.classList.remove('d-block')
})


