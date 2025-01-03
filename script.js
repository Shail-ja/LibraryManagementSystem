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









 