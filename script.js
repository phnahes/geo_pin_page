document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o mapa centrado no Brasil
    var map = L.map('map').setView([-15.7801, -47.9292], 5);

    // Adiciona camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Dados das capitais diretamente no JavaScript, agora com informações extras
    let capitais = [
        {
            "nome": "Aracaju",
            "lat": -10.9472,
            "lng": -37.0731,
            "prefeito": "Emília Corrêa",
            "vice_prefeito": "Ricardo Marques",
            "universidades": [
                "Universidade Federal de Sergipe (UFS)",
                "Instituto Federal de Sergipe (IFS)"
            ]
        },
        {
            "nome": "Belém",
            "lat": -1.4558,
            "lng": -48.4902,
            "prefeito": "Igor Normando",
            "vice_prefeito": "Cássio Andrade",
            "universidades": [
                "Universidade Federal do Pará (UFPA)",
                "Universidade do Estado do Pará (UEPA)"
            ]
        },
        {
            "nome": "Belo Horizonte",
            "lat": -19.9167,
            "lng": -43.9345,
            "prefeito": "Fuad Noman",
            "vice_prefeito": "Álvaro Damião",
            "universidades": [
                "Universidade Federal de Minas Gerais (UFMG)",
                "Universidade do Estado de Minas Gerais (UEMG)"
            ]
        },
        {
            "nome": "Boa Vista",
            "lat": 2.8235,
            "lng": -60.6758,
            "prefeito": "Arthur Henrique",
            "vice_prefeito": "Cássio Gomes",
            "universidades": [
                "Universidade Federal de Roraima (UFRR)",
                "Universidade Estadual de Roraima (UERR)"
            ]
        },
        {
            "nome": "Brasília",
            "lat": -15.7801,
            "lng": -47.9292,
            "prefeito": "Não se aplica",
            "vice_prefeito": "Não se aplica",
            "universidades": [
                "Universidade de Brasília (UnB)",
                "Instituto Federal de Brasília (IFB)"
            ]
        },
        {
            "nome": "Campo Grande",
            "lat": -20.4697,
            "lng": -54.6201,
            "prefeito": "Adriane Lopes",
            "vice_prefeito": "Dra. Camilla",
            "universidades": [
                "Universidade Federal de Mato Grosso do Sul (UFMS)",
                "Universidade Estadual de Mato Grosso do Sul (UEMS)"
            ]
        },
        {
            "nome": "Cuiabá",
            "lat": -15.6014,
            "lng": -56.0979,
            "prefeito": "Abilio Brunini",
            "vice_prefeito": "Coronel Vânia",
            "universidades": [
                "Universidade Federal de Mato Grosso (UFMT)",
                "Universidade do Estado de Mato Grosso (UNEMAT)"
            ]
        },
        {
            "nome": "Curitiba",
            "lat": -25.4296,
            "lng": -49.2713,
            "prefeito": "Eduardo Pimentel",
            "vice_prefeito": "Paulo Martins",
            "universidades": [
                "Universidade Federal do Paraná (UFPR)",
                "Universidade Estadual do Paraná (UNESPAR)"
            ]
        },
        {
            "nome": "Florianópolis",
            "lat": -27.5954,
            "lng": -48.5480,
            "prefeito": "Topázio Neto",
            "vice_prefeito": "Maryanne Mattos",
            "universidades": [
                "Universidade Federal de Santa Catarina (UFSC)",
                "Universidade do Estado de Santa Catarina (UDESC)"
            ]
        },
        {
            "nome": "Fortaleza",
            "lat": -3.7172,
            "lng": -38.5433,
            "prefeito": "Evandro Leitão",
            "vice_prefeito": "Gabriella Aguiar",
            "universidades": [
                "Universidade Federal do Ceará (UFC)",
                "Universidade Estadual do Ceará (UECE)"
            ]
        },
        {
            "nome": "Goiânia",
            "lat": -16.6809,
            "lng": -49.2532,
            "prefeito": "Sandro Mabel",
            "vice_prefeito": "Coronel Cláudia",
            "universidades": [
                "Universidade Federal de Goiás (UFG)",
                "Universidade Estadual de Goiás (UEG)"
            ]
        },
        {
            "nome": "João Pessoa",
            "lat": -7.1150,
            "lng": -34.8631,
            "prefeito": "Cícero Lucena",
            "vice_prefeito": "Léo Bezerra",
            "universidades": [
                "Universidade Federal da Paraíba (UFPB)",
                "Universidade Estadual da Paraíba (UEPB)"
            ]
        },
        {
            "nome": "Macapá",
            "lat": 0.0349,
            "lng": -51.0694,
            "prefeito": "Antônio Furlan",
            "vice_prefeito": "Mario Neto",
            "universidades": [
                "Universidade Federal do Amapá (UNIFAP)",
                "Instituto Federal do Amapá (IFAP)"
            ]
        },
        {
            "nome": "Maceió",
            "lat": -9.6658,
            "lng": -35.7350,
            "prefeito": "João Henrique Caldas (JHC)",
            "vice_prefeito": "Rodrigo Cunha",
            "universidades": [
                "Universidade Federal de Alagoas (UFAL)",
                "Universidade Estadual de Alagoas (UNEAL)"
            ]
        },
        {
            "nome": "Manaus",
            "lat": -3.1190,
            "lng": -60.0217,
            "prefeito": "David Almeida",
            "vice_prefeito": "Renato Júnior",
            "universidades": [
                "Universidade Federal do Amazonas (UFAM)",
                "Universidade do Estado do Amazonas (UEA)"
            ]
        },
        {
            "nome": "Natal",
            "lat": -5.7950,
            "lng": -35.2094,
            "prefeito": "Paulinho Freire",
            "vice_prefeito": "Joanna Guerra",
            "universidades": [
                "Universidade Federal do Rio Grande do Norte (UFRN)",
                "Universidade do Estado do Rio Grande do Norte (UERN)"
            ]
        }
    ];

 
    // Adiciona cada capital ao mapa
    capitais.forEach(ponto => {
        let marker = L.marker([ponto.lat, ponto.lng]).addTo(map);

        // Criar um popup personalizado com HTML estilizado
        let popupContent = `
            <div style="text-align: center;">
                <h3 style="margin: 0; color: #007bff;">${ponto.nome}</h3>
                <p><strong>Prefeito:</strong> ${ponto.prefeito}</p>
                <p><strong>Vice-prefeito:</strong> ${ponto.vice_prefeito}</p>
                <p><strong>Universidades:</strong></p>
                <ul style="text-align: left;">
                    ${ponto.universidades.map(univ => `<li>${univ}</li>`).join('')}
                </ul>
            </div>
        `;

        marker.bindPopup(popupContent);
    });
});


