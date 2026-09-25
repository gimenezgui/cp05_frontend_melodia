const navbar = document.getElementById("navbar");
const navContainer = document.getElementById("nav-container");
const navContent = document.getElementById("nav-content");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Fundo geral da navbar
        navbar.classList.add(
            "bg-gray-950/70",
            "backdrop-blur-lg",
            "shadow-lg",
            "shadow-black/20"
        );
        // Deixa a navbar mais compacta
        navContainer.classList.remove("py-5");
        navContainer.classList.add("py-3");
        // Card interno
        navContent.classList.remove(
            "bg-transparent",
            "border-transparent"
        );
        navContent.classList.add(
            "bg-gray-900/90",
            "border-gray-800",
            "shadow-xl"
        );
    } else {
        navbar.classList.remove(
            "bg-gray-950/70",
            "backdrop-blur-lg",
            "shadow-lg",
            "shadow-black/20"
        );
        navContainer.classList.remove("py-3");
        navContainer.classList.add("py-5");
        navContent.classList.remove(
            "bg-gray-900/90",
            "border-gray-800",
            "shadow-xl"
        );
        navContent.classList.add(
            "bg-transparent",
            "border-transparent"
        );
    }
});
const formulario = document.getElementById("form-contato");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Obrigado, ${nome}! Cadastro realizado com sucesso! 🎵`);
    formulario.reset();
});
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const playIcon = playButton.querySelector("i");

playButton.addEventListener("click", async () => {
    if (audioPlayer.paused) {
        try {
            await audioPlayer.play();
        } catch (error) {
            alert("Não foi possível reproduzir o áudio. Verifique o arquivo da música.");
            return;
        }
    } else {
        audioPlayer.pause();
    }
});

audioPlayer.addEventListener("play", () => {
    playIcon.className = "fa-solid fa-pause";
    playButton.setAttribute("aria-label", "Pausar");
});

audioPlayer.addEventListener("pause", () => {
    playIcon.className = "fa-solid fa-play ml-1";
    playButton.setAttribute("aria-label", "Reproduzir");
});