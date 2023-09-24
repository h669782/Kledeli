const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });


    hamburger.classList.toggle("toggle");
});


const loginButton = document.querySelector(".login-button");
const modal = document.getElementById("loginModal");
const closeButton = document.querySelector(".close");

loginButton.addEventListener('click', () => {
    modal.style.display = "block";
    setTimeout(() => {
        document.querySelector(".modal-content").style.transform = "scale(1)";
    }, 100);
});

closeButton.addEventListener('click', () => {
    document.querySelector(".modal-content").style.transform = "scale(0)";
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        document.querySelector(".modal-content").style.transform = "scale(0)";
        setTimeout(() => {
            modal.style.display = "none";
        }, 400); 
    }
});

