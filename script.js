// =========================
// WILLKOMMEN
// =========================

console.log("Willkommen auf meiner Website! 👋");


// =========================
// SCROLL ANIMATION
// =========================

const elements = document.querySelectorAll(
    ".skill-card, .timeline-item, .hobby, .why-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});