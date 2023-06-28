let botaoTema = document.querySelector("#botao_cabecalho_tema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");

    let img = document.querySelector(".logo");

    let containerTeste = document.querySelector(".container-teste");

    let ponteiros = document.querySelectorAll(".nav-link");
    console.log(ponteiros);

    let cards = document.querySelectorAll(".card");

    if (botaoTema.checked) {
        body.classList.add("body-dark");
        img.classList.add("logo-branca");
        img.src = "./img/logo-petstar-invertida.png";

        ponteiros.forEach((ponteiro) => {
            console.log(ponteiro);
            ponteiro.classList.add("nav-link-white");
        });

        cards.forEach((card) => {
            console.log(card);
            card.classList.add("card-dark");
        });

        containerTeste.style.color = "white";
    } else {
        body.classList.remove("body-dark");
        img.classList.remove("logo-branca");
        img.src = "./img/logo-petstar.png";

        ponteiros.forEach((ponteiro) => {
            console.log(ponteiro);
            ponteiro.classList.remove("nav-link-white");
        });

        cards.forEach((card) => {
            console.log(card);
            card.classList.remove("card-dark");
        });

        containerTeste.style.color = "black";
    }
});