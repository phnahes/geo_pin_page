import pandas as pd
import json

# Caminho do arquivo CSV de entrada e JSON de saída
csv_file_path = "dados.csv"
json_file_path = "dados.json"

# Carregar o CSV
df = pd.read_csv(csv_file_path, delimiter=",", encoding="utf-8")

# Selecionar apenas as colunas necessárias e renomeá-las
df_json = df[[  
    "PAIS", "ESTADO", "CIDADE", "CODIGO IBGE CIDADE", "CODIGO IBGE ESTADO", "REGIAO",
    "POP 2010 IBGE", "DATA CRIAÇÃO", "INSTITUIÇÃO", "SIGLA", "MODELO", "COORDENADOR",
    "CURSO/ÁREA", "MODELO/NUMERO", "NOME"
]].rename(columns={
    "PAIS": "pais",
    "ESTADO": "estado",
    "CIDADE": "cidade",
    "CODIGO IBGE CIDADE": "codigo_ibge_cidade",
    "CODIGO IBGE ESTADO": "codigo_ibge_estado",
    "REGIAO": "regiao",
    "POP 2010 IBGE": "populacao_2010",
    "DATA CRIAÇÃO": "data_criacao",
    "INSTITUIÇÃO": "instituicao",
    "SIGLA": "sigla",
    "MODELO": "modelo",
    "COORDENADOR": "coordenador",
    "CURSO/ÁREA": "curso_area",
    "MODELO/NUMERO": "modelo_numero",
    "NOME": "nome"
})

# Converter para JSON
json_output = df_json.to_dict(orient="records")

# Salvar o JSON
with open(json_file_path, "w", encoding="utf-8") as f:
    json.dump(json_output, f, ensure_ascii=False, indent=4)

print(f"✅ Conversão concluída! Arquivo salvo em: {json_file_path}")
