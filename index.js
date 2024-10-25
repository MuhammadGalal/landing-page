const url = 'https://script.google.com/macros/s/AKfycbwHtKkhlRlEOcMsfkFAxpqcdc_mpJ73Ra-DwkYTQOX0XTVfJVwp39_LxDE_yChZjJNe/exec'

const form = document.forms['orderform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(url, {method: "POST", body: new FormData(form)})
    .then(res => alert('Successfully '))
    .then(()=> {window.location.reload()})
    .catch(e=> {console.error('error', e.message)})
})