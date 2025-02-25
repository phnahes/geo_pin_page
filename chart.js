document.addEventListener("DOMContentLoaded", function () {
    // Referências do modal e botão
    const modal = document.getElementById("modalGrafico");
    const btnAbrirModal = document.getElementById("btnAbrirModal");
    const btnFecharModal = document.querySelector(".close");

    if (!modal || !btnAbrirModal || !btnFecharModal) {
        console.error("Erro: Elementos do modal não encontrados no DOM.");
        return;
    }

    // Abrir modal ao clicar no botão
    btnAbrirModal.addEventListener("click", function () {
        modal.style.display = "flex"; // Exibir modal
        gerarGraficoPizza(); // Criar o gráfico quando abrir o modal
    });

    // Fechar modal ao clicar no "X"
    btnFecharModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Função para gerar o gráfico de pizza
    function gerarGraficoPizza() {
        // Contar quantos tipos diferentes existem na coluna "modelo"
        let contagemModelos = {};

        dados.forEach(item => {
            let modelo = item.modelo;
            if (modelo) {
                contagemModelos[modelo] = (contagemModelos[modelo] || 0) + 1;
            }
        });

        // Criar os rótulos e valores para o gráfico
        let labels = Object.keys(contagemModelos);
        let valores = Object.values(contagemModelos);

        // Destruir gráfico existente antes de criar um novo (para evitar duplicação)
        if (window.meuGraficoPizza) {
            window.meuGraficoPizza.destroy();
        }

        // Criar o gráfico de pizza com Chart.js
        var ctx = document.getElementById("graficoPizza").getContext("2d");
        window.meuGraficoPizza = new Chart(ctx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    data: valores,
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    }
                }
            }
        });
    }
});
