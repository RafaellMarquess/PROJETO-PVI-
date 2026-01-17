function nome(){
    let inputNome = document.getElementById("nome");

    inputNome.addEventListener("input", () => {
        inputNome.value = inputNome.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
    });
}

nome();

/************************************************************************************/

function email(){
    let inputEmail = document.getElementById("email");

    inputEmail.addEventListener("input", () => {
        inputEmail.value = inputEmail.value.replace(/[^a-zA-Z0-9@._\-+]/g, "")
    })
}

email();

/************************************************************************************/

function numero() {
    const tel = document.getElementById("numero");

    function formatar(n) {
        n = n.replace(/\D/g, "").replace(/^55/, "");

        if (n.length > 11) n = n.slice(0, 11);

        let f = "+55 ";

        if (n.length >= 1) f += "(" + n.slice(0, 2);
        if (n.length >= 2) f += ") ";

        if (n.length >= 3) f += n.slice(2, 7);
        if (n.length >= 7) f += "-" + n.slice(7);

        return f;
    }

    // Mostra +55 ao entrar
    tel.addEventListener("focus", () => {
        if (tel.value.trim() === "") tel.value = "+55 ";
    });

    // Remove +55 ao sair se estiver vazio
    tel.addEventListener("blur", () => {
        const nums = tel.value.replace(/\D/g, "");
        if (nums === "" || nums === "55") tel.value = "";
    });

    let apagando = false;

    tel.addEventListener("keydown", (e) => {
        apagando = (e.key === "Backspace" || e.key === "Delete");
    });

    tel.addEventListener("input", (e) => {
        let nums = e.target.value.replace(/\D/g, "");

        // Se estiver apagando, não força formatação pesada
        if (apagando) {
            e.target.value = "+55 " + nums.slice(2);
            return;
        }

        e.target.value = formatar(nums);
    });
}

numero();