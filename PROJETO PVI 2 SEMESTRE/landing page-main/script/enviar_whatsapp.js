document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const pacote = document.getElementById("opcoes_pacotes").value;
    const observacao = document.getElementById("caixa_texto").value;

    const telefoneDestino = "5545998204875";

    const mensagem = 
`● Olá! Preenchi o formulário no site e gostaria de solicitar um orçamento.

- Nome: ${nome}

- Email: ${email}

- Número: ${numero}

- Pacote escolhido: ${pacote}

- Observação: ${observacao}
`;

    const mensagem_Formatada = encodeURIComponent(mensagem);

    const url = `https://wa.me/${telefoneDestino}?text=${mensagem_Formatada}`;

    window.location.href = url;
});