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

function handleLogin() {
    var email = document.getElementById("brukernavn").value;
    var password = document.getElementById("passord").value;

    loginUser(email, password);
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Bruker er logget inn
        loginButton.innerText = "Min Side";
        loginButton.removeEventListener('click', openLoginModal);
        loginButton.addEventListener('click', () => {
            if (window.location.pathname.includes("/index.html") || window.location.pathname === "/") {
                window.location.href = "./pages/minside.html";
            } else {
                window.location.href = "minside.html";
            }
        });
    } else {
        // Bruker er logget ut
        loginButton.innerText = "Logg Inn";
        loginButton.removeEventListener('click', openLoginModal);
        loginButton.addEventListener('click', openLoginModal);
    }
});

function openLoginModal() {
    modal.style.display = "block";
    setTimeout(() => {
        document.querySelector(".modal-content").style.transform = "scale(1)";
    }, 100);
}
