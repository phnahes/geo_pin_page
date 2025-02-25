# 🌍 Geo Pin Page

**Geo Pin Page** é um projeto de **teste de marcação em mapas interativos** utilizando **Leaflet.js** e **OpenStreetMap**. Ele exibe **pontos de interesse** no mapa, incluindo **informações sobre cidades, prefeitos, população e universidades**.

---

## 🗺️ **Funcionalidades**
- Exibição de **cidades no mapa** com marcadores interativos.
- **Popups personalizados** contendo informações detalhadas de cada cidade.
- **Design responsivo**, adaptado para desktop e mobile.
- **Fácil atualização dos dados**, sem necessidade de modificar o código principal.

---

## 📂 **Estrutura do Projeto**
```
geo_pin_page/
│── index.html          # Página principal
│── style.css           # Estilos da página e popups
│── script.js           # Lógica do mapa e popups
│── assets/             # Pasta para imagens (se necessário)
└── README.md           # Documentação do projeto
```

---

## 📌 **Como Atualizar os Dados?**
Os dados das cidades, prefeitos e universidades estão armazenados no arquivo **`dados.js`**. Para atualizar as informações, siga os passos:

### 🔹 **1. Abra o arquivo `dados.js`**
Dentro do projeto, localize o arquivo **`dados.js`** e edite a estrutura JSON.  

### 🔹 **2. Modifique ou adicione novas cidades**
Exemplo de estrutura de uma cidade:
```js
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
    }
];
```

### 🔹 **3. Salve o arquivo e recarregue a página**
Após editar **`dados.js`**, basta salvar e **recarregar o navegador** para ver as atualizações no mapa.

---

## 🚀 **Como Rodar o Projeto Localmente?**
1️⃣ Clone o repositório:
```sh
git clone https://github.com/seuusuario/geo_pin_page.git
```
2️⃣ Acesse a pasta do projeto:
```sh
cd geo_pin_page
```
3️⃣ Inicie um servidor local:
```sh
npx http-server
```
4️⃣ Acesse no navegador:  
   **http://localhost:8080**

---

## 📜 **Tecnologias Utilizadas**
- **Leaflet.js** (para manipulação do mapa)
- **OpenStreetMap** (camada de mapa)
- **HTML + CSS + JavaScript puro** (sem frameworks)
- **JSON para estruturação dos dados**

---

## 📩 **Contribuição**
Se quiser contribuir com melhorias, **faça um fork do projeto** e envie um Pull Request! 💡

---

## 📄 **Licença**
Este projeto é open-source e está sob a licença **MIT**.


