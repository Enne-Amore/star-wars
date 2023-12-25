
# workshop-frontend-2023.2

Desafio proposto pelo projeto de extensão Fábrica De Software da faculdade UNIPÊ. Um site web que possui um pouco da franquia Star Wars como conteúdo. Ademais, o projeto se concentra na utilização de uma API. Nesse caso, utiliza-se uma API de dados de personagens da franquia.


## ✅ Demonstração

[Clique aqui para acessar o meu site](https://enne-amore.github.io/workshop-frontend-2023.2/)


## 🚀 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript


## 🪄 Funcionalidades

- Menu de navegação por páginas abrível e fechável
- Barra horizontal de navegação por dentro da página 
- Mais acessibilidade usando a tecla "tab"
- Efeitos de "hover" e de "active" nos elementos clicáveis
- Botão de voltar ao topo da página


## 📁 Documentação Da API

#### Base da URL

```http
  https://swapi.dev/api/people/
```

#### Índice de personagem

```http
  i == 1 <= 10
```

#### Retorna um personagem

```http
  fetch(url + i + '/')
```

#### Retorna cada dado de um personagem

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

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `data.name`      | `any` | **Obrigatório**. O nome do personagem que você quer |
| `data.mass`      | `any` | **Obrigatória**. A Massa do personagem que você quer |
| `data.hair_color`      | `any` | **Obrigatória**. A cor do cabelo do personagem que você quer |
| `data.skin_color`      | `any` | **Obrigatória**. A cor da pele do personagem que você quer |
| `data.eye_color`      | `any` | **Obrigatória**. A cor dos olhos do personagem que você quer |
| `data.birth_year`      | `any` | **Obrigatório**. O ano de nascimento do personagem que você quer |
| `data.gender`      | `any` | **Obrigatória**. A identidade de gênero do personagem que você quer |


## 🌈 Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Vermelha Escura       | ![#730710](https://via.placeholder.com/10/730710?text=+) #730710 |
| Vermelha Clara       | ![#D91828](https://via.placeholder.com/10/D91828?text=+) #D91828 |
| Amarela Escura       | ![#F29F05](https://via.placeholder.com/10/F29F05?text=+) #F29F05 |
| Amarela Clara       | ![#F2B705](https://via.placeholder.com/10/F2B705?text=+) #F2B705 |
| Laranja       | ![#F28705](https://via.placeholder.com/10/F28705?text=+) #F28705 |


## 🌟 Referências De Uso

 - [API Usada](https://swapi.dev/api/)
 - [URL Específica De API Usada](https://swapi.dev/api/people/)
 - [Logo Star Wars](https://www.imagensempng.com.br/logo-star-wars-png/)
 - [Star wars icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/star-wars)
 - [Sobre A Franquia](https://www.aficionados.com.br/star-wars/)
 - [Curiosidades](https://www.selecoes.com.br/cultura-lazer/curiosidades-sobre-star-wars-que-voce-nunca-soube-vb/)
 - [Foto De Cada Personagem](https://br.pinterest.com) 


## 🔧 Suporte

Para me contatar como suporte, o meu email é EnneFofe10@gmail.com 

