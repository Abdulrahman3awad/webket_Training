let menu = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')
let close = document.querySelector('.close')


menu.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
    menu.style.display = 'none'
    close.style.display = 'inline-block'
})
close.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    menu.style.display = 'inline-block'
    close.style.display = 'none'
})


let viewInfo = document.querySelector('.card5-right span')
let view = document.querySelector('.sec5-right') 
let body = document.getElementsByTagName('body')
let anyElement = document.querySelectorAll('*')



// anyElement.addEventListener('click', function () {
//     anyElement.forEach(i => {
//     view.style.display = 'none'
        
//     });
// })
document.querySelectorAll('*').forEach(element => element.addEventListener('click', function () {
    if (element == viewInfo) {
        view.style.display = 'flex';
        
    }
    else if (element != viewInfo) {
        view.style.display = 'none';
   }
}))