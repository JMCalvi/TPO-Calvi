let button = document.getElementById('btn')
let input = document.getElementById('mail')

var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function sendMail () {
    if (!input.value.match(validRegex)) {
        input.classList.add('txt-error')
        return false
    }
    validated.hidden = false
    return true
}

input.addEventListener('input', () => {
    input.classList.remove('txt-error')
})

function popupUploadForm(){
    var newWindow = window.open('/cert.html', 'name', 'height=500,width=600');
}