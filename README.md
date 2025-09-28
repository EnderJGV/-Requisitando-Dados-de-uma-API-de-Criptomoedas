
# Requisitando Dados de uma API de Criptomoedas

Este projeto é uma aplicação web desenvolvida em React para consultar e exibir dados de criptomoedas utilizando uma API pública. O objetivo principal foi praticar habilidades de desenvolvimento front-end, integração com APIs, uso de bibliotecas modernas e criação de interfaces responsivas.

## Objetivo

O projeto foi criado para fins de estudo e prática, focando em:
- Consumo de APIs REST
- Manipulação de dados em React
- Utilização de TailwindCSS para estilização responsiva
- Organização de componentes reutilizáveis

## Funcionalidades

- Consulta de dados de criptomoedas em tempo real
- Exibição dos dados em tabela dinâmica
- Layout moderno e responsivo
- Componentes reutilizáveis: Header, Banner, Table, Footer

## Tecnologias e Dependências

Principais dependências utilizadas:

- [React](https://react.dev/) (v19)
- [React DOM](https://react.dev/)
- [Vite](https://vitejs.dev/) (build e dev server)
- [TailwindCSS](https://tailwindcss.com/) (estilização responsiva)
- [FontAwesome](https://fontawesome.com/) (ícones)
- ESLint (padronização de código)

Veja todas as dependências em [`coins/package.json`](coins/package.json).

## Como rodar o projeto

1. **Clone o repositório:**
	```bash
	git clone https://github.com/EnderJGV/Requisitando-Dados-de-uma-API-de-Criptomoedas.git
	```
2. **Acesse a pasta do projeto:**
	```bash
	cd Requisitando-Dados-de-uma-API-de-Criptomoedas/coins
	```
3. **Instale as dependências:**
	```bash
	npm install
	```
4. **Inicie o servidor de desenvolvimento:**
	```bash
	npm run dev
	```
5. **Acesse no navegador:**
	Abra [http://localhost:5173](http://localhost:5173) para visualizar a aplicação.

## Estrutura do Projeto

```
coins/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Table/
│   ├── App.jsx
│   └── ...
├── package.json
└── ...
```

## Responsividade

O projeto foi desenvolvido com foco em responsividade, utilizando TailwindCSS para garantir uma boa experiência em diferentes tamanhos de tela (desktop, tablet e mobile).

## Licença

Projeto para fins de estudo e prática. Sinta-se livre para utilizar como referência.