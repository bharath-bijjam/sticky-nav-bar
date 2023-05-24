let navbarEl = document.querySelector(".navbar");
let bottomContainerEl = document.querySelector(".bottom-container");


window.addEventListener("scroll",()=>{
    if( window.scrollY >bottomContainerEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})