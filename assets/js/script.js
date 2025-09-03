document.addEventListener('DOMContentLoaded', function () {
    const spanValor = document.querySelector('#bloco_saldo .bloco .quantidade_tarefas span');
    const checkboxes = document.querySelectorAll('#tarefas_prioritarias .cards .card .input input');
    const cardsTarefas = document.querySelectorAll('#tarefas_prioritarias .cards .card');

    let valor = Number(localStorage.getItem('valor')) || 0;

    // Função que esconde todos os cards
    function finalizaTarefa() {
        cardsTarefas.forEach(card => {
            const checkbox = card.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                card.style.display = 'none';
            }
        });
    }


    // Função para atualizar o valor dos pontos
    function atualizarValor() {
        valor = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                valor += 10;
            }
        });

        localStorage.setItem('valor', valor);
        console.log('Valor atualizado:', valor);
        spanValor.innerHTML = valor; // atualiza interface
    }

    // Adiciona eventos a todos os checkboxes
    checkboxes.forEach(cb => {
        cb.addEventListener('change', atualizarValor);
        cb.addEventListener('change', finalizaTarefa); // se quiser que desapareçam ao marcar
    });

    // Atualiza ao carregar a página
    atualizarValor();
});
