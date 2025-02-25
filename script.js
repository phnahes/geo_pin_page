// JSON com as cidades e informações adicionais
let dados = [
    {
        "nome": "São Paulo",
        "estado": "São Paulo",
        "lat": -23.5505,
        "lng": -46.6333,
        "prefeito": "Ricardo Nunes",
        "vice_prefeito": "Patricia Bezerra",
        "populacao": 12396372,
        "densidade_demografica": 7836,
        "universidades": [
            "Universidade de São Paulo (USP)",
            "Universidade Estadual Paulista (UNESP)",
            "Universidade Federal de São Paulo (UNIFESP)"
        ]
    },
    {
        "nome": "Curitiba",
        "estado": "Paraná",
        "lat": -25.4296,
        "lng": -49.2713,
        "prefeito": "Eduardo Pimentel",
        "vice_prefeito": "Paulo Martins",
        "populacao": 1963726,
        "densidade_demografica": 4240,
        "universidades": [
            "Universidade Federal do Paraná (UFPR)",
            "Universidade Tecnológica Federal do Paraná (UTFPR)"
        ]
    },
    {
        "nome": "Belo Horizonte",
        "estado": "Minas Gerais",
        "lat": -19.9167,
        "lng": -43.9345,
        "prefeito": "Fuad Noman",
        "vice_prefeito": "Álvaro Damião",
        "populacao": 2530701,
        "densidade_demografica": 7167,
        "universidades": [
            "Universidade Federal de Minas Gerais (UFMG)",
            "Universidade do Estado de Minas Gerais (UEMG)"
        ]
    }
];

// Inicializa o mapa
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([-15.7801, -47.9292], 5); // Brasil centralizado

    // Adiciona camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Adiciona cada cidade ao mapa
    dados.forEach(ponto => {
        let marker = L.marker([ponto.lat, ponto.lng]).addTo(map);

        // Criar um popup estilizado com as novas informações
        let popupContent = `
        <div class="popup-container">
            <h3>
                <span class="cidade">${ponto.nome}</span> 
                <span class="separador"> / </span> 
                <span class="estado">${ponto.estado}</span>
            </h3>
            
            <div class="popup-info">
                <p><i class="fas fa-user-tie"></i> <strong>Prefeito:</strong> ${ponto.prefeito}</p>
                <p><i class="fas fa-user"></i> <strong>Vice-prefeito:</strong> ${ponto.vice_prefeito}</p>
                <p><i class="fas fa-users"></i> <strong>População:</strong> ${ponto.populacao.toLocaleString()} habitantes</p>
                <p><i class="fas fa-chart-area"></i> <strong>Densidade Demográfica:</strong> ${ponto.densidade_demografica} hab/km²</p>
            </div>
    
            <!-- Título das universidades fora da caixa -->
            <p class="titulo-universidades"><i class="fas fa-university"></i> <strong>Universidades:</strong></p>
            
            <div class="popup-universities">
                <ul>
                    ${ponto.universidades.length > 0
                ? ponto.universidades.map(univ => `<li>${univ}</li>`).join('')
                : "<li>Sem universidades registradas</li>"
            }
                </ul>
            </div>
        </div>
    `;






        marker.bindPopup(popupContent);
    });
});
