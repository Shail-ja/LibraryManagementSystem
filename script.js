let searchForm = document.querySelector('.search-form');

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}


window.onscroll = () =>{
    
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }
    else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

window.onload = () =>{
    
    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }
    else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

let loginForm = document.querySelector(".Login-form");

document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

let signupForm = document.querySelector(".signup-form");

document.querySelector("#signup-btn").onclick = () =>{
    signupForm.classList.toggle('active');
}

document.querySelector('#close-signup-btn').onclick = () =>{
    signupForm.classList.remove('active');
}

// let themeToggler = document.querySelector("#theme-toggler");
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".book-slider", {  
        loop: true,
        spaceBetween: -20,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: -100,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});











 