import requests
import json

# URL do JSON contendo dados dos municípios brasileiros
URL = "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/json/municipios.json"

# Lista de códigos IBGE para busca
codigos_ibge = [
    1301704, 1501402, 1501402, 1506807, 1504208, 1508407, 1100064, 1400027, 1400472, 1721000,
    2707701, 2700300, 2913606, 2909802, 2903201, 2933307, 2304400, 2304400, 2311603, 2103000,
    2516300, 2501104, 2512101, 2611606, 2611606, 2211001, 2408003, 5208707, 5215702, 5208707,
    5208707, 5208707, 5003702, 5002704, 5002902, 5005681, 5102504, 5107958, 5102637, 5106257,
    5107602, 3136702, 3147907, 3170404, 3171303, 3106200, 3134202, 3303302, 3303302, 3305554,
    3304557, 3303500, 3509502, 3509502, 3538709, 3550308, 3534708, 3529302, 3541406, 3509452,
    4124020, 4106902, 4106902, 4106407, 4112108, 4115705, 4104204, 4318903, 4321907, 4318309,
    4314407, 4316907, 4316907, 4204806, 4204806, 4209300, 4204806, 3509502, 3304557, 4217204
]

# Baixar a lista de municípios
response = requests.get(URL)
response.encoding = "utf-8"

# Corrigir problema de BOM removendo caracteres indesejados no JSON
municipios = json.loads(response.text.lstrip("\ufeff"))

# Dicionário para armazenar os resultados
coordenadas_ibge = {}

# Percorrer os municípios e associar as coordenadas aos códigos IBGE
for municipio in municipios:
    codigo_ibge = int(municipio["codigo_ibge"])
    if codigo_ibge in codigos_ibge:
        coordenadas_ibge[codigo_ibge] = {
            "cidade": municipio["nome"],
            "estado": municipio["codigo_uf"],
            "latitude": municipio["latitude"],
            "longitude": municipio["longitude"]
        }

# Exibir os resultados encontrados
for codigo, dados in coordenadas_ibge.items():
    print(f"{codigo} - {dados['cidade']} ({dados['estado']}) -> Lat: {dados['latitude']}, Lng: {dados['longitude']}")

# Se preferir salvar os dados em um arquivo JSON:
with open("coordenadas_ibge.json", "w", encoding="utf-8") as f:
    json.dump(coordenadas_ibge, f, ensure_ascii=False, indent=4)

print("\n✅ Coordenadas extraídas e salvas em 'coordenadas_ibge.json'.")

