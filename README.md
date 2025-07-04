# 🌌 Star Wars

 Desafio proposto pelo projeto de extensão Fábrica De Software da faculdade UNIPÊ. Um site web que possui um pouco da franquia Star Wars como conteúdo. Ademais, o projeto se concentra na utilização de uma API. Nesse caso, utiliza-se uma API de dados de personagens da franquia.


## 🌐 Aplicação Hospedada

 [Clique aqui para acessar o website](https://enne-amore.github.io/star-wars/)


## ⚡ Funcionalidades

 - Menu de navegação por páginas abrível e fechável
 - Barra horizontal de navegação por dentro da página 
 - Mais acessibilidade usando a tecla "tab"
 - Efeitos de "hover" e de "active" nos elementos clicáveis
 - Botão de voltar ao topo da página


## 🚀 Tecnologias Utilizadas

 <p align="left">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="HTML" alt="HTML" width="40" height="40"/>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/2048px-Official_CSS_Logo.svg.png" title="CSS" alt="CSS" width="40" height="40"/>
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
 </p>


## 📂 Estrutura do Projeto

 ```plaintext
 star-wars/
 ├── css/                    # Arquivos CSS
 │   ├── reset.css       
 │   ├── responsive.css  
 │   ├── style.css       
 ├── docs/                   # Arquivos de documentação do projeto
 │   ├── autorias.txt
 ├── fonts/                  # Arquivos das fontes utilizadas  
 │   ├── sf-distant-galaxy/
 ├── img/                    # Imagens utilizadas 
 ├── js/                     # Arquivos JavaScript
 │   ├── menu.js
 │   ├── personagens.js
 │   ├── topo.js
 ├── view/                   # Arquivos de páginas secundárias  
 │   ├── galeria.html
 ├── .gitattributes
 ├── index.html              # Arquivo principal de renderização
 ├── LICENSE                 # Arquivo de licença do projeto
 ├── README.md
 ```


## 🛠️ Instalação Local

 1. **Clone o repositório**
 
 No terminal, rode o seguinte comando:
 
 ```bash
 git clone https://github.com/Enne-Amore/star-wars.git
 ```
 
 2. **Entre no arquivo "index.html"**
 
 3. **Rode o arquivo principal de renderização:**
 
 Clique com o botão direito do mouse e selecione a seguinte opção:
 
 ```bash
 Open with Live Server
 ```


## 📁 Documentação da API

### Base da URL

 ```http
   https://swapi.dev/api/people/
 ```

### Índice de personagem

 ```http
   i == 1 <= 10
 ```

### Retorna um personagem

 ```http
   fetch(url + i + '/')
 ```

### Retorna cada dado de um personagem

 ```http
   .then(data => {
     console.table(
       data.name,
       data.mass,
       data.hair_color,
       data.skin_color,
       data.eye_color,
       data.birth_year,
       data.gender
     )
   })
 ```
 
 | Parâmetro         | Tipo  | Descrição                                                           |
 | :---------------- | :---- | :------------------------------------------------------------------ |
 | `data.name`       | `any` | **Obrigatório**. O nome do personagem que você quer                 |
 | `data.mass`       | `any` | **Obrigatória**. A Massa do personagem que você quer                |
 | `data.hair_color` | `any` | **Obrigatória**. A cor do cabelo do personagem que você quer        |
 | `data.skin_color` | `any` | **Obrigatória**. A cor da pele do personagem que você quer          |
 | `data.eye_color`  | `any` | **Obrigatória**. A cor dos olhos do personagem que você quer        |
 | `data.birth_year` | `any` | **Obrigatório**. O ano de nascimento do personagem que você quer    |
 | `data.gender`     | `any` | **Obrigatória**. A identidade de gênero do personagem que você quer |


## 🌈 Cores

 | Cor             | Hexadecimal |
 | --------------- | ----------- |
 | Vermelha Escura | `#730710`   |
 | Vermelha Clara  | `#D91828`   |
 | Amarela Escura  | `#F29F05`   |
 | Amarela Clara   | `#F2B705`   |
 | Laranja         | `#F28705`   |


## 🔤 Fontes Tipográficas

 - **SF\ Distant\ Galaxy\ Outline**  
   Exemplo de uso:  
   `font-family: "star-wars";` ou 
   `font-family: var(--fonte-titulo);`
 - **Arial, Helvetica, Sans-Serif**  
   Exemplo de uso:  
   `font-family: Arial, Helvetica, sans-serif;` ou 
   `font-family: var(--fonte-padrao);`


## 🌟 Referências de Uso

 - [API Usada](https://swapi.dev/api/)
 - [URL Específica de API Usada](https://swapi.dev/api/people/)
 - [Logo Star Wars](https://www.imagensempng.com.br/logo-star-wars-png/)
 - [Star wars icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/star-wars)
 - [Sobre a Franquia](https://www.aficionados.com.br/star-wars/)
 - [Curiosidades](https://www.selecoes.com.br/cultura-lazer/curiosidades-sobre-star-wars-que-voce-nunca-soube-vb/)
 - [Foto de Cada Personagem](https://br.pinterest.com) 


## 🔧 Suporte

 Para me contatar como suporte, o meu email é [Enne.Pessoa@gmail.com](mailto:Enne.Pessoa@gmail.com)

