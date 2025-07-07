// Função para alternar a visibilidade da resposta e girar a imagem
function toggleResposta(resposta, imagem) {
    if (resposta.style.display === "none" || resposta.style.display === "") {
        resposta.style.display = "block";
        imagem.classList.add("imagem-girar"); // Adiciona a classe que gira a imagem
    } else {
        resposta.style.display = "none";
        imagem.classList.remove("imagem-girar"); // Remove a classe que gira a imagem
    }
}

// Inicializando todos os botões e respostas
for (let i = 1; i <= 6; i++) {
    let pergunta = document.getElementById(`botao-pergunta-${i}`);
    let resposta = document.getElementById(`resposta-${i}`);
    let imagem = document.getElementById(`imagem-fechar-${i}`); // Aqui pegamos a imagem correspondente

    // Adiciona o evento de clique ao botão
    pergunta.addEventListener("click", function() {
        toggleResposta(resposta, imagem); // Passa a imagem para a função
    });
}