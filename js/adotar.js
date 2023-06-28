let formulario = document.querySelector("form");

const checkInputs = (nome, telefone, email, renda, residencia, opResidencia, intencao) => {
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

    if (renda == null) {
        let divRenda = document.querySelector(".form-item-radio").parentElement;
        console.log(divRenda);
        divRenda.classList.add("erro");
        control = false;
    }

    console.log(opResidencia);
    if (opResidencia.value == "") {
        residencia.classList.add("erro");
        control = false;
    }
    if (intencao.value.trim() == "") {

        intencao.classList.add("erro");
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

    if (!checkInputs(nome, telefone, email, renda, residencia, opResidencia, intencao)) {
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

