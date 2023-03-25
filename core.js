let url = window.location.href
checkRedlinks()
checkPre()

document.addEventListener("click", () => {
    if(window.location.href !== url) {
        url = window.location.href
        checkRedlinks()
    }
})

function checkRedlinks() {
    document.querySelectorAll('a[href*="redlink=1"]').forEach(link => {
        console.log(link)
        link.classList.add('red-link')
    })
}