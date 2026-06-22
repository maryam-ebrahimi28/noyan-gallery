const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");

function openSidebar() {
    sidebar?.classList.add("active");
    overlay?.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");

    document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

reveals.forEach(item => observer.observe(item));

const modal = document.querySelector(".portfolio-modal");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".modal-close");

function openModal(image) {

    if (!modal || !modalImg) return;

    modal.classList.add("active");

    modalImg.src = image.src;
    modalImg.alt = image.alt;

    document.body.style.overflow = "hidden";
}

function closePortfolioModal() {

    modal?.classList.remove("active");

    document.body.style.overflow = "";
}

document.querySelectorAll(".items").forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (image) {
            openModal(image);
        }

    });

});

closeModal?.addEventListener("click", closePortfolioModal);

modal?.addEventListener("click", (e) => {

    if (e.target === modal) {
        closePortfolioModal();
    }

});

document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        modal?.classList.contains("active")
    ) {
        closePortfolioModal();
    }

});

const form = document.querySelector("form");
const toast = document.querySelector(".toast");

form?.addEventListener("submit", (e) => {

    e.preventDefault();

    const phoneInput =
        document.querySelector("#phone-number");

    const phonePattern = /^09\d{9}$/;

    if (!phonePattern.test(phoneInput.value)) {

        alert("شماره تماس معتبر نیست");

        return;
    }

    toast?.classList.add("show");

    setTimeout(() => {
        toast?.classList.remove("show");
    }, 3000);

    form.reset();

});