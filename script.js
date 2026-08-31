const botao = document.getElementById("explorar");

botao.addEventListener("click", function() {
    document.getElementById("destinos").scrollIntoView({
        behavior: "smooth"
    });
});