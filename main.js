document.querySelector('.burger-button').addEventListener('click', function() {
this.classList.toggle('active');
document.querySelector('.burger-items').classList.toggle('open')
document.querySelector('.shadow').classList.toggle('open')
document.querySelector('body').classList.toggle('no-scroll')
})

document.querySelector('.account').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.account-items').classList.toggle('open')
    })
