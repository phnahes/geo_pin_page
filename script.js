document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o mapa centrado no Brasil
    var map = L.map('map').setView([-15.7801, -47.9292], 5);

    // Adiciona camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Dados das capitais diretamente no JavaScript, agora com informações extras
    let capitais = [
        { "nome": "Aracaju", "lat": -10.9472, "lng": -37.0731, "info": "Capital de Sergipe. População: 664 mil habitantes." },
        { "nome": "Belém", "lat": -1.4558, "lng": -48.4902, "info": "Capital do Pará. Famosa pelo Círio de Nazaré." },
        { "nome": "Belo Horizonte", "lat": -19.9167, "lng": -43.9345, "info": "Capital de Minas Gerais. Conhecida pelo pão de queijo e a Lagoa da Pampulha." },
        { "nome": "Boa Vista", "lat": 2.8235, "lng": -60.6758, "info": "Única capital brasileira ao norte da linha do Equador." },
        { "nome": "Brasília", "lat": -15.7801, "lng": -47.9292, "info": "Capital do Brasil, projetada por Oscar Niemeyer e Lúcio Costa." },
        { "nome": "Campo Grande", "lat": -20.4697, "lng": -54.6201, "info": "Capital de Mato Grosso do Sul, famosa pelo turismo no Pantanal." },
        { "nome": "Cuiabá", "lat": -15.6014, "lng": -56.0979, "info": "Uma das cidades mais quentes do Brasil. Porta de entrada para o Pantanal." },
        { "nome": "Curitiba", "lat": -25.4296, "lng": -49.2713, "info": "Capital do Paraná. Conhecida por seus parques e planejamento urbano." },
        { "nome": "Florianópolis", "lat": -27.5954, "lng": -48.5480, "info": "Capital de Santa Catarina, famosa por suas praias paradisíacas." },
        { "nome": "Fortaleza", "lat": -3.7172, "lng": -38.5433, "info": "Capital do Ceará. Destino turístico com belas praias e culinária típica." },
        { "nome": "Goiânia", "lat": -16.6809, "lng": -49.2532, "info": "Capital de Goiás. Grande polo agropecuário e cultural." },
        { "nome": "João Pessoa", "lat": -7.1150, "lng": -34.8631, "info": "Capital da Paraíba. Cidade mais oriental das Américas." },
        { "nome": "Macapá", "lat": 0.0349, "lng": -51.0694, "info": "Capital do Amapá. Cortada pela linha do Equador." },
        { "nome": "Maceió", "lat": -9.6658, "lng": -35.7350, "info": "Capital de Alagoas. Conhecida pelas águas cristalinas." },
        { "nome": "Manaus", "lat": -3.1190, "lng": -60.0217, "info": "Capital do Amazonas. Porta de entrada para a Floresta Amazônica." },
        { "nome": "Natal", "lat": -5.7950, "lng": -35.2094, "info": "Capital do Rio Grande do Norte. Conhecida pelas dunas e praias." },
        { "nome": "Palmas", "lat": -10.1847, "lng": -48.3336, "info": "Capital mais jovem do Brasil. Localizada no estado do Tocantins." },
        { "nome": "Porto Alegre", "lat": -30.0328, "lng": -51.2302, "info": "Capital do Rio Grande do Sul. Famosa pelo chimarrão e cultura gaúcha." },
        { "nome": "Porto Velho", "lat": -8.7619, "lng": -63.9039, "info": "Capital de Rondônia. Importante para o transporte fluvial." },
        { "nome": "Recife", "lat": -8.0476, "lng": -34.8770, "info": "Capital de Pernambuco. Conhecida como 'Veneza Brasileira'." },
        { "nome": "Rio Branco", "lat": -9.9747, "lng": -67.8114, "info": "Capital do Acre. Fundada no ciclo da borracha." },
        { "nome": "Rio de Janeiro", "lat": -22.9068, "lng": -43.1729, "info": "Cidade maravilhosa, lar do Cristo Redentor e do Pão de Açúcar." },
        { "nome": "Salvador", "lat": -12.9714, "lng": -38.5014, "info": "Primeira capital do Brasil. Berço do Carnaval e da cultura afro-brasileira." },
        { "nome": "São Luís", "lat": -2.5297, "lng": -44.3028, "info": "Capital do Maranhão. Única cidade brasileira fundada por franceses." },
        { "nome": "São Paulo", "lat": -23.5505, "lng": -46.6333, "info": "Maior cidade do Brasil. Polo financeiro e cultural." },
        { "nome": "Teresina", "lat": -5.0892, "lng": -42.8019, "info": "Capital do Piauí. Única do Nordeste que não fica no litoral." },
        { "nome": "Vitória", "lat": -20.3155, "lng": -40.3128, "info": "Capital do Espírito Santo. Cidade-ilha com belas praias." }
    ];

    // Adiciona cada capital ao mapa
    capitais.forEach(ponto => {
        let marker = L.marker([ponto.lat, ponto.lng]).addTo(map);

        // Criar um popup personalizado com HTML estilizado
        let popupContent = `
            <div style="text-align: center;">
                <h3 style="margin: 0; color: #007bff;">${ponto.nome}</h3>
                <p style="margin: 5px 0; font-size: 14px; color: #555;">${ponto.info}</p>
            </div>
        `;

        marker.bindPopup(popupContent);
    });
});
