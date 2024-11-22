function fazerPedido() {
    // Captura o nome do cliente
    const nomeCliente = document.querySelector('#nome').value.trim();
    
    // Verifica se o campo do nome foi preenchido
    if (!nomeCliente) {
        alert('Por favor, preencha o nome antes de fazer o pedido.');
        return;
    }

    // Captura o tamanho da pizza selecionado
    const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
    if (!tamanhoSelecionado) {
        alert('Por favor, selecione o tamanho da pizza.');
        return;
    }

    // Define os preços dos tamanhos
    const precosTamanho = {
        pequena: 25.0,
        media: 35.0,
        grande: 50.0
    };

    // Captura os adicionais selecionados
    const adicionaisSelecionados = document.querySelectorAll('input[name="adicionais"]:checked');
    const precoAdicional = 5.0; // Preço fixo por adicional

    // Calcula o valor total
    const valorTamanho = precosTamanho[tamanhoSelecionado.value];
    const valorAdicionais = adicionaisSelecionados.length * precoAdicional;
    const valorTotal = valorTamanho + valorAdicionais;

    // Atualiza o valor total no elemento <h2>
    const elementoValorTotal = document.querySelector('h2 strong');
    elementoValorTotal.textContent = valorTotal.toFixed(2);

    // Exibe uma mensagem de confirmação (opcional)
    alert(`Pedido realizado com sucesso! Obrigado, ${nomeCliente}.`);
}
