console.log("Magharvadiya Parmar Family Website Loaded Successfully.");

const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const topBtn = document.getElementById("topBtn");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {

    if (navbar && window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else if (navbar) {
        navbar.classList.remove("scrolled");
    }

});

// Mobile Menu
if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1500);

    }

});

// Top Button
if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display = window.scrollY > 300 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// Active Menu
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});