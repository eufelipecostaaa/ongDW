let formulario = document.querySelector("form");

const checkInputs = (nome, telefone, email) => {
    let control = true;
    if (nome.value.trim() == "") {

        nome.classList.add("erro");
        control = false;
    }
    if (telefone.value.trim() == "") {

        telefone.classList.add("erro");
        control = false;
    }
    if (email.value.trim() == "") {

        email.classList.add("erro");
        control = false;
    }

    return control;
}

formulario.addEventListener("submit", (event) => {

    let nome = document.querySelector("#nome");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let renda = document.querySelector("input[type = 'radio']:checked");
    let residencia = document.querySelector("#residencia");
    let opResidencia = residencia.options[residencia.selectedIndex];
    let intencao = document.querySelector("#intencao");


    checkInputs(nome, telefone, email);

    if (!checkInputs(nome, telefone, email)) {
        event.preventDefault();
    } else {
        const adotante = {
            id: 1,
            nome: nome.value,
            telefone: telefone.value,
            renda: renda.value,
            residencia: opResidencia.value,
            intencao: intencao.value,
        }
    }


    console.log(adotante);
});

