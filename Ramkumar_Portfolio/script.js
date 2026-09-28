// =========================================================
// RAMKUMAR J — PORTFOLIO JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------------------------------
    // ELEMENTS
    // ---------------------------------------------------------

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navLinks");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    const form = document.getElementById("contactForm");
    const formNote = document.getElementById("formNote");

    const yearElement = document.getElementById("year");

    const revealElements = document.querySelectorAll(".reveal");

    const cursorGlow = document.querySelector(".cursor-glow");


    // ---------------------------------------------------------
    // CURRENT YEAR
    // ---------------------------------------------------------

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ---------------------------------------------------------
    // MOBILE MENU
    // ---------------------------------------------------------

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    // Close mobile menu after clicking navigation link

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("open");
            }

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    // ---------------------------------------------------------
    // ACTIVE NAVIGATION LINK
    // ---------------------------------------------------------

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });


        navLinks.forEach(function (link) {

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    // ---------------------------------------------------------
    // SCROLL REVEAL ANIMATION
    // ---------------------------------------------------------

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        // Fallback for older browsers

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    // ---------------------------------------------------------
    // CURSOR GLOW
    // ---------------------------------------------------------

    if (
        cursorGlow &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        window.addEventListener("mousemove", function (event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

            cursorGlow.style.opacity = "1";

        });


        document.addEventListener("mouseleave", function () {

            cursorGlow.style.opacity = "0";

        });

    }


    // ---------------------------------------------------------
    // CONTACT FORM
    // ---------------------------------------------------------

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();


            const formData = new FormData(form);

            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");


            // Basic validation

            if (!name || !email || !message) {

                if (formNote) {

                    formNote.textContent =
                        "Please fill in all fields.";

                }

                return;

            }


            // Email subject

            const subject =
                "Portfolio enquiry from " + name;


            // Email body

            const body =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;


            // Create mailto URL

            const mailtoURL =
                "mailto:jramkumarj2004@gmail.com" +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(body);


            if (formNote) {

                formNote.textContent =
                    "Opening your email client...";

            }


            // Open email application

            window.location.href = mailtoURL;

        });

    }


    // ---------------------------------------------------------
    // PROJECT CARD HOVER EFFECT
    // ---------------------------------------------------------

    const projectCards =
        document.querySelectorAll(".project-card");


    if (
        projectCards.length > 0 &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        projectCards.forEach(function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX - rect.left;


                    const y =
                        event.clientY - rect.top;


                    const rotateY =
                        ((x / rect.width) - 0.5) * 1.5;


                    const rotateX =
                        ((y / rect.height) - 0.5) * -1.5;


                    card.style.transform =
                        "translateY(-3px) " +
                        "perspective(1000px) " +
                        "rotateX(" +
                        rotateX +
                        "deg) " +
                        "rotateY(" +
                        rotateY +
                        "deg)";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform = "";

                }
            );

        });

    }


    // ---------------------------------------------------------
    // ESC KEY CLOSES MOBILE MENU
    // ---------------------------------------------------------

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (navMenu) {
                    navMenu.classList.remove("open");
                }

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});