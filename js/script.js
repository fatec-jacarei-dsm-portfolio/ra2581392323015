//script carrossel
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

updateCarousel(); // Inicializa

//script botão voltar ao topo
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Ação de voltar ao topo
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});