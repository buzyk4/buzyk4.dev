var sideMenu = function() {

    var openMenu = document.getElementById("menu")
    var menuUl = document.getElementById("menu-ul")

    openMenu.className += (" opened")
    menuUl.className += (" opened-ul")
    
}

var hideMenu = function() {
    var hide = document.getElementById("menu")
    hide.className -= (" opened")
}