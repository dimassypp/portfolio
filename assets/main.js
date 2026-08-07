/* =========================================================
   DIMAS YOGA PRATAMA
   Portfolio interactions
========================================================= */


/* =========================================================
   NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const navbarMenu =
    document.getElementById("navbarMenu");


if (mobileMenuButton && navbarMenu) {

    mobileMenuButton.addEventListener("click", () => {

        const isOpen =
            navbarMenu.classList.toggle("open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    document
        .querySelectorAll(".navbar-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navbarMenu.classList.remove("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* =========================================================
   JOURNEY TABS
========================================================= */

const journeyTabs =
    document.querySelectorAll(".journey-tab");

const journeyContents =
    document.querySelectorAll(".journey-content");


journeyTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target =
            tab.dataset.tab;


        journeyTabs.forEach(item => {
            item.classList.remove("active");
        });


        journeyContents.forEach(content => {
            content.classList.remove("active");
        });


        tab.classList.add("active");


        const targetContent =
            document.querySelector(
                `[data-content="${target}"]`
            );


        if (targetContent) {
            targetContent.classList.add("active");
        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   BIONESCO IMAGE SLIDER
========================================================= */

const slider =
    document.getElementById("bionescoSlider");


if (slider) {

    const images =
        slider.querySelectorAll(".slider-image");

    let currentIndex = 0;


    function showImage(index) {

        images.forEach(image => {
            image.classList.remove("active");
        });


        images[index].classList.add("active");

    }


    slider.addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);

    });


    slider.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            showImage(currentIndex);

        }

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".navbar-link"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.getAttribute("id");


                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});