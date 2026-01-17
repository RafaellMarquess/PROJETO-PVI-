// Seletores do popup
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const fechar = document.getElementById("fechar");

// Ao clicar em QUALQUER imagem da galeria
document.querySelectorAll(".galeria-inicial img").forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src; // abre a mesma imagem
    });
});

// Fechar ao clicar no X
fechar.addEventListener("click", () => {
    popup.style.display = "none";
});

// Fechar ao clicar fora da imagem
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
