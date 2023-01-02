const header = document.querySelector("header")

window.addEventListener("scroll", activeScroll)


function activeScroll (){
    if(window.pageYOffset > 400 && header.classList.contains("cabecalho")) {
        header.classList.toggle("cabecalho");
        header.classList.toggle("cabecalho-menu");
    } else if(window.pageYOffset <= 400) {
        header.classList.add("cabecalho");
        header.classList.add("cabecalho-menu");
    }
}