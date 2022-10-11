  AOS.init();
const menu = document.getElementById("menu")
const close = document.getElementById('close')
const links = document.getElementById('links')



menu.onclick = function(){
    menu.style.display = 'none'
    close.style.display = 'block'
    links.style.display = 'block'
}
close.onclick = function(){
    menu.style.display = 'block'
    close.style.display = 'none'
    links.style.display = 'none'
}
