// URL do JSON do IBGE contendo as coordenadas
const URL_IBGE_JSON = "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/json/municipios.json";

// Inicializa o mapa
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([-15.7801, -47.9292], 5); // Centralizado no Brasil

    // Adiciona camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Buscar JSON do IBGE com as coordenadas
    fetch(URL_IBGE_JSON)
        .then(response => response.json())
        .then(municipios => {
            // Percorre os dados e adiciona LAT/LONG a cada ponto pelo Código IBGE
            dados.forEach(ponto => {
                let municipio = municipios.find(m => m.codigo_ibge == ponto.codigo_ibge_cidade);
                if (municipio) {
                    ponto.lat = municipio.latitude;
                    ponto.lng = municipio.longitude;
                }
            });

            // Agora que temos LAT/LONG, adicionamos os marcadores no mapa
            dados.forEach(ponto => {
                if (ponto.lat && ponto.lng) {
                    let marker = L.marker([ponto.lat, ponto.lng]).addTo(map);

                    // Criar um popup estilizado com as novas informações
                    let popupContent = `
                        <div class="popup-container">
                            <h3>
                                <span class="cidade">${ponto.cidade}</span> 
                                <span class="separador"> / </span> 
                                <span class="estado">${ponto.estado}</span>
                            </h3>
                            <p><strong>Região:</strong> ${ponto.regiao}</p>
                            <p><strong>Data de Criação:</strong> ${ponto.data_criacao}</p>
                            <p><strong>Instituição:</strong> ${ponto.instituicao} (${ponto.sigla})</p>
                            <p><strong>Modelo:</strong> ${ponto.modelo}</p>
                            <p><strong>Coordenador:</strong> ${ponto.coordenador}</p>
                            <p><strong>Curso/Área:</strong> ${ponto.curso_area}</p>
                            <p><strong>Nome:</strong> ${ponto.nome}</p>
                        </div>
                    `;

                    marker.bindPopup(popupContent);
                }
            });
        })
        .catch(error => console.error("Erro ao buscar dados do IBGE:", error));
});
