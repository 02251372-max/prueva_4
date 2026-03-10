const slides = document.querySelectorAll(".slide");
const texto = document.getElementById("texto-descripcion");

let current = 0;

function actualizarCarrusel() {
    slides.forEach((slide, index) => {
        slide.style.opacity = "0";
        slide.style.transform = "scale(0.6)";
        slide.style.zIndex = "1";
    });

    let left = (current - 1 + slides.length) % slides.length;
    let right = (current + 1) % slides.length;

    slides[current].style.opacity = "1";
    slides[current].style.transform = "translateX(0) scale(1)";
    slides[current].style.zIndex = "3";

    slides[left].style.opacity = "0.6";
    slides[left].style.transform = "translateX(-60%) scale(0.8)";
    slides[left].style.zIndex = "2";

    slides[right].style.opacity = "0.6";
    slides[right].style.transform = "translateX(60%) scale(0.8)";
    slides[right].style.zIndex = "2";

    texto.innerHTML = slides[current].querySelector(".descripcion").innerHTML;
}

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        current = index;
        actualizarCarrusel();
    });
});

actualizarCarrusel();
